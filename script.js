// Initialize the map and set the view to a general location
const map = L.map('map').setView([20.5937, 78.9629], 3); // Zoom level adjusted for global view

// Add OpenStreetMap tiles to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

// Cities in the world and India with their latitude, longitude, and basic info
const cities = {
  "New York": { 
        lat: 40.7128, 
        lon: -74.0060, 
        futurePrediction: "Future Climate Risk: Moderate\nIncreased storms, rising sea levels.",
        pastData: "Past Decade: Average temperature increase of 1.5°C, flooding events increased by 20%."},
  "Los Angeles": { 
        lat: 34.0522, 
        lon: -118.2437, 
        futurePrediction: "Future Climate Risk: High\nSevere droughts and wildfires expected.",
        pastData: "Past Decade: Temperature increased by 2°C, drought frequency doubled."},
  "Tokyo": { 
        lat: 35.6762, 
        lon: 139.6503, 
        futurePrediction: "Future Climate Risk: Moderate\nIncreased typhoons and heatwaves.",
        pastData: "Past Decade: Temperature increase of 1.8°C, severe flooding events increased."},
    "Sydney": { 
        lat: -33.8688, 
        lon: 151.2093, 
        futurePrediction: "Future Climate Risk: High\nIncreased temperatures and bushfire risk.",
        pastData: "Past Decade: Temperature increased by 1.5°C, droughts more frequent."
    },
    "Mumbai": { 
        lat: 19.0760, 
        lon: 72.8777, 
        futurePrediction: "Future Climate Risk: High\nRising sea levels, higher temperatures, extreme rainfall.",
        pastData: "Past Decade: Average temperature increase of 1.5°C, extreme flooding events increased by 30%."
    },
    "Delhi": { 
        lat: 28.6139, 
        lon: 77.2090, 
        futurePrediction: "Future Climate Risk: Severe\nIncreased heatwaves, air pollution, and water scarcity.",
        pastData: "Past Decade: Temperature increased by 2°C, significant air quality deterioration."
    },
    "Gujarat": { 
        lat: 22.2587, 
        lon: 71.1924, 
        futurePrediction: "Future Climate Risk: Moderate\nHigher risk of droughts, more intense heatwaves.",
        pastData: "Past Decade: Water shortages increased by 40%, temperature increased by 1.8°C."
    },
    "Kanyakumari": { 
        lat: 8.0883, 
        lon: 77.5385, 
        futurePrediction: "Future Climate Risk: Low\nMinimal changes expected but rising sea levels could impact coastline.",
        pastData: "Past Decade: Minor increase in temperatures, stable precipitation levels."
    },
    "Harohalli (Karnataka)": { 
        lat: 12.7760, 
        lon: 77.4340, 
        futurePrediction: "Future Climate Risk: Moderate\nIncreased rainfall, higher chances of crop damage.",
        pastData: "Past Decade: Rainfall increased by 20%, small temperature rise of 1°C."
    },
    "Nepal": { lat: 28.3949, lon: 84.1240, futurePrediction: "Future Climate Risk: High\nGlacial melt, more frequent landslides, unpredictable monsoons.", pastData: "Past Decade: Glaciers shrank by 10%, increased flooding, and landslides."}
    
};

// Loop through the cities object and add markers to the map
for (const city in cities) {
    const { lat, lon, futurePrediction, pastData } = cities[city];
    const marker = L.marker([lat, lon]).addTo(map);
    
    // Add a popup that shows the city name when the marker is clicked
    marker.bindPopup(city);
    
    // When a city marker is clicked, display more info in an external div
    marker.on('click', () => {
        const cityInfo = `
            <h3>${city}</h3>
            <p><strong>Future Prediction:</strong> ${futurePrediction}</p>
            <p><strong>Past Data:</strong> ${pastData}</p>
        `;
        document.getElementById('city-info').innerHTML = cityInfo;
    });
}