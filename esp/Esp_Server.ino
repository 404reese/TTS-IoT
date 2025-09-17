#include <HardwareSerial.h>
#include <WiFi.h>
#include <HX711.h>
#define DOUT  4
#define CLK  5
HX711 scale(DOUT, CLK);
const char* ssid = "Reese Galaxy";
const char* password = "galaxy123"; 
const char* host = "192.168.248.189";   // Just the IP
const int port = 5000;                  // Flask default port
float weight; 
float calibration_factor = 34000; // for me this vlaue works just perfect 211000  
WiFiClient client;
float X = 3;

void setup() {
  Serial.begin(9600);
  Serial.println("Ready.");

  // Connect to WiFi
  WiFi.begin(ssid, password);
  Serial.print("Connecting to WiFi");
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println();
  Serial.println("WiFi connected");
  Serial.print("IP address: ");
  Serial.println(WiFi.localIP());
}

void loop() {
  Serial.println(weight);
  measureweight();
  uploadData();
  delay(3000);  // send every 3s (otherwise you’ll flood the server)
}

void uploadData() {
  if (!client.connect(host, port)) {
    Serial.println("Connection to server failed");
    return;
  }

  // JSON payload with "weight"
  String json = "{\"weight\":" + String(weight) + ",\"timestamp\":" + String(millis()) + "}";

  // HTTP POST
  client.println("POST /api/data HTTP/1.1");
  client.print("Host: ");
  client.println(host);
  client.println("Content-Type: application/json");
  client.print("Content-Length: ");
  client.println(json.length());
  client.println();        // blank line before body
  client.println(json);

  // Debug
  Serial.println("Sent: " + json);

  // Read server response
  while (client.connected() || client.available()) {
    if (client.available()) {
      String line = client.readStringUntil('\n');
      Serial.println(line);
    }
  }

  client.stop();
}
void measureweight(){
 scale.set_scale(calibration_factor); //Adjust to this calibration factor
  Serial.print("Reading: ");
  weight = scale.get_units(5); 
    if(weight<0)
  {
    weight=0.00;
    }
  //Serial.print(scale.get_units(), 2);
 // Serial.print(" lbs"); //Change this to kg and re-adjust the calibration factor if you follow SI units like a sane person
  Serial.print("gram:");
  Serial.print( weight); 
  Serial.print(" g");
  Serial.print(" calibration_factor: ");
  Serial.print(calibration_factor);
  Serial.println();
  //     Blynk.virtualWrite(V0,weight);
  // Blynk.virtualWrite(V1,weight);
  // Delay before repeating measurement
  delay(100);
}
