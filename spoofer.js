(function () {
    // Define spoofed locations
    const locations = {
        1: {
            latitude: 35.6764,
            longitude: 139.6500,
            accuracy: 150
        },
        2: {
            latitude: 40.7128,
            longitude: -74.0060,
            accuracy: 12
        },
        3: {
            latitude: 51.5072,
            longitude: -0.1276,
            accuracy: 190
        }
    };

    let locationKeys = Object.keys(locations);
    let currentIndex = 0;

    // Function to update the spoofed location
    function updateLocation() {
        const location = locations[locationKeys[currentIndex]];

        // Override getCurrentPosition
        navigator.geolocation.getCurrentPosition = function (success, error, options) {
            success({
                coords: {
                    latitude: location.latitude,
                    longitude: location.longitude,
                    accuracy: location.accuracy
                }
            });
        };

        // Override watchPosition
        navigator.geolocation.watchPosition = function (success, error, options) {
            success({
                coords: {
                    latitude: location.latitude,
                    longitude: location.longitude,
                    accuracy: location.accuracy
                }
            });
        };

        // Increment index to cycle through locations
        currentIndex = (currentIndex + 1) % locationKeys.length;
    }

    // Create and inject the script element
    const script = document.createElement('script');
    script.textContent = `
        (function () {
            const locations = ${JSON.stringify(locations)};
            const locationKeys = ${JSON.stringify(locationKeys)};
            let currentIndex = ${currentIndex};

            function updateLocation() {
                const location = locations[locationKeys[currentIndex]];
                navigator.geolocation.getCurrentPosition = function (success, error, options) {
                    success({
                        coords: {
                            latitude: location.latitude,
                            longitude: location.longitude,
                            accuracy: location.accuracy
                        }
                    });
                };

                navigator.geolocation.watchPosition = function (success, error, options) {
                    success({
                        coords: {
                            latitude: location.latitude,
                            longitude: location.longitude,
                            accuracy: location.accuracy
                        }
                    });
                };

                // Increment index to cycle through locations
                currentIndex = (currentIndex + 1) % locationKeys.length;
            }

            setInterval(updateLocation, 5000); // Update every 5 seconds

            // Initial update
            updateLocation();
        })();
    `;

    document.documentElement.appendChild(script);
})();
