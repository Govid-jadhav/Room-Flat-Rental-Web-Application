const map = L.map('map').setView([19.0760, 72.8777], 10); // Default to Mumbai

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Optional: Add marker if you have coordinates
L.marker([19.0760, 72.8777]).addTo(map)
    .bindPopup('Default Location')
    .openPopup();