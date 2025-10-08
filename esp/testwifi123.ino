#include <WiFi.h>
#include <HTTPClient.h>

// Wi-Fi credentials
const char* ssid = "Reese Galaxy"; // Replace with your Wi-Fi SSID
const char* password = "galaxy123"; // Replace with your Wi-Fi password

// Server details
const String serverUrl = "http://192.168.141.26:5000/api/data"; // Replace with your Express server URL

void setup() {
  Serial.begin(115200); // Initialize serial communication
  connectToWiFi();      // Connect to Wi-Fi
}

void loop() {
  if (WiFi.status() != WL_CONNECTED) {
    connectToWiFi();  // Reconnect if Wi-Fi gets disconnected
  }

  // Send a POST request with dummy data
  sendPostRequest();

  delay(5000);  // Wait for 5 seconds before sending the next request
}

// Function to connect to Wi-Fi
void connectToWiFi() {
  Serial.print("Connecting to Wi-Fi...");
  WiFi.begin(ssid, password);
  
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.print(".");
  }
  
  Serial.println("\nConnected to Wi-Fi!");
}

// Function to send POST request with dummy data (weight: 123)
void sendPostRequest() {
  if (WiFi.status() == WL_CONNECTED) {
    HTTPClient http;

    // Specify the server and endpoint
    http.begin(serverUrl);  // Server URL

    // Specify content type as JSON
    http.addHeader("Content-Type", "application/json");

    // Dummy payload (e.g., weight: 123)
    String payload = "{\"weight\": 123}";

    // Send POST request
    int httpResponseCode = http.POST(payload);

    if (httpResponseCode > 0) {
      Serial.print("HTTP Response code: ");
      Serial.println(httpResponseCode);  // Should print 200 if successful
    } else {
      Serial.print("Error on sending POST request: ");
      Serial.println(httpResponseCode);  // Print error code if request fails
    }

    // Free resources
    http.end();
  } else {
    Serial.println("Wi-Fi Disconnected");
  }
}
