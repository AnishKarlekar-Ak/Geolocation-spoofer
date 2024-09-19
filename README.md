<h1>Geolocation Spoofing Script</h1>
<h2>Overview</h2>
<p>This script allows you to spoof your geolocation on any webpage by dynamically overriding the <code>navigator.geolocation</code> methods. It cycles through a predefined list of locations and updates the geolocation information every 5 seconds.</p>

<h2>How It Works</h2>
    
<h3>Spoofed Locations:</h3>
    <ul>
        <li>The script contains a list of predefined locations, each with latitude, longitude, and accuracy.</li>
        <li>Locations are cycled through in sequence.</li>
    </ul>

   <h3>Method Overrides:</h3>
    <ul>
        <li>The <code>navigator.geolocation.getCurrentPosition</code> and <code>navigator.geolocation.watchPosition</code> methods are overridden to return the spoofed location data.</li>
    </ul>

   <h3>Update Interval:</h3>
    <ul>
        <li>The script updates the location every 5 seconds by cycling through the list of spoofed locations.</li>
    </ul>

   <h3>Script Injection:</h3>
    <ul>
        <li>The script creates a new <code>&lt;script&gt;</code> element and injects it into the webpage, allowing it to run in the context of the page.</li>
    </ul>

   <h2>How to Use</h2>
    
   <h3>Add Script to Webpage:</h3>
    <ul>
        <li>You can manually inject the script into a webpage by pasting it into the browser's Developer Tools Console, or you can use a Chrome extension to automatically inject the script.</li>
    </ul>

 <h3>Add as Extension:</h3>
    <ul>
        <li>You can clone this repository on your local machine or download the code and then You can go to 'chrome://extensions' and turn on developer mode and select "Load Unpacked" and Browse and select the folder containing this</li>
    </ul>
   <h3>Test Geolocation:</h3>
    <ul>
        <li>Open a webpage that uses geolocation, such as <a href="https://www.whatismylocation.com/" target="_blank">What is My Location?</a>, to see the spoofed location.</li>
    </ul>

   <h2>Limitations</h2>
    
   <h3>Script Injection:</h3>
    <ul>
        <li>The script needs to be injected into the webpage context. This can be done via a Chrome extension or Developer Tools.</li>
    </ul>

   <h3>No Response Handling:</h3>
    <ul>
        <li>The spoofed location will not handle responses sent to the spoofed IP address. The server responses will still go to your real IP address.</li>
    </ul>

   <h3>Browser Restrictions:</h3>
    <ul>
        <li>Some modern browsers may have additional security measures that can prevent overriding of <code>navigator.geolocation</code>.</li>
    </ul>

   <h3>Legal and Ethical Use:</h3>
    <ul>
        <li>Ensure you use this script for ethical and legal purposes only. Spoofing geolocation for malicious activities or without consent can be illegal.</li>
    </ul>
