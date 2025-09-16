#include <WiFi.h>
#include <HTTPClient.h>

const char* ssid = "Reese Galaxy";
const char* password = "galaxy123";
const char* serverUrl = "http://192.168.248.189:5000/data";  // e.g., http://192.168.1.100:5000/data

void setup() {
  Serial.begin(115200);
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting...");
  }
  Serial.println("Connected to WiFi");

  // Send data
  if (WiFi.status() == WL_CONNECTED) {
    HTTPClient http;
    http.begin(serverUrl);
    http.addHeader("Content-Type", "application/json");

    String jsonData = "{\"temperature\": 24.7}";
    int httpResponseCode = http.POST(jsonData);

    if (httpResponseCode > 0) {
      String response = http.getString();
      Serial.println(httpResponseCode);
      Serial.println(response);
    } else {
      Serial.print("Error code: ");
      Serial.println(httpResponseCode);
    }

    http.end();
  }
}

void loop() {
  // Nothing here for now
}