🏨 Hotel Management Web App (WIP)
A Node.js-based hotel management application with user authentication, hotel room listings, reviews, and a Bootstrap-styled interface. Currently under active development.
🚀 Features
✅ Completed
User registration and login (Passport.js)

Flash messages for success/error feedback

Express-session-based login persistence

EJS templating with layout inheritance

Bootstrap 5 responsive UI

Form validation (client-side + server-side)

Listings CRUD with isOwner access control

Display reviews on listing page (populate('reviews'))

Error fixes:

Model registration issue resolved

Populating currentUser in res.locals

Flash messages for unauthorized access

Enforced isLoggedIn and isOwner middleware

⏳ In Progress
🌍 Map functionality (Leaflet.js)

Center on user's geolocation via navigator.geolocation

Show multiple markers for all listings

Marker clustering (leaflet.markercluster)

Location search with autocomplete (Nominatim)

Fullscreen toggle for map

🛠️ Tech Stack
Backend: Node.js, Express.js

Authentication: Passport.js (LocalStrategy)

Templating: EJS

Database: MongoDB with Mongoose

Styling: Bootstrap 5 + custom CSS

Flash Messages: connect-flash

Session: express-session

Map API: Leaflet.js, Nominatim, MarkerCluster