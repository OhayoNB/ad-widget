# Ad Widget

A project that combines HTML, CSS, and Vanilla JS.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Running Unit Tests](#running-unit-tests)
- [Authors](#authors)

## Prerequisites

Before you begin, make sure you have the following tools installed:

- Web Browser: Modern web browser such as Chrome, Firefox, or Safari.
- Live Server: To view and run the application smoothly, it is recommended to use a live server. You can use the Live Server extension if you are using Visual Studio Code. [Download Live Server for VS Code.](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
- VPN to the United States: Due to restrictions with the API, a VPN set to the United States is required to make successful calls. Ensure your VPN is active and set to the U.S. before proceeding.

## Getting Started

Follow these steps to run the project:

1. Clone this repository to your local machine:

```bash
   git clone https://github.com/OhayoNB/ad-widget.git
   cd ad-widget
```

2. Include API Key:

- Locate the ad.service.js file.
- Replace the placeholder text <YOUR_API_KEY_HERE> with your actual API key.

```bash
   const API_KEY = '<YOUR_API_KEY_HERE>';
```

3. Run the App Using Live Server:

- If you're using Visual Studio Code with the Live Server extension:
  - Open the project directory in VS Code.
  - Right-click on the index.html and select Open with Live Server.
- The app should now launch in your default browser.

## Running Unit Tests

To execute the unit tests using QUnit:

- With the project running in the browser, open the Developer Tools.
- Navigate to the console tab.
- Enter the following command to initiate the unit tests:

```bash
   startQUnitTests();
```

### Authors

- [Bar Ohayon](https://github.com/OhayoNB)
