const map = L.map('map').setView([19.7515, 75.7139], 6);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Safely parse listings from server
const listings = JSON.parse(`<%= JSON.stringify(allListings) %>`);

listings.forEach(listing => {
    if (listing.geometry && listing.geometry.coordinates?.length === 2) {
        const [lng, lat] = listing.geometry.coordinates;

        L.marker([lat, lng])
            .addTo(map)
            .bindPopup(`<b>${listing.title}</b><br>${listing.location}`);
    }
});