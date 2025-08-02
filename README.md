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

📦 Installation
bash
Copy code
git clone https://github.com/your-username/hotel-management
cd hotel-management
npm install
🔐 Environment Variables
Create a .env file in the root directory:

env
Copy code
DB_URL=mongodb://localhost:27017/hotel-db
SECRET=yourSecretKey
▶️ Running the App
bash
Copy code
npm start
Visit http://localhost:3000 in your browser.

🧪 Test Credentials
Register a user at /signup

Or log in with any user you've created.

💬 Flash Message Usage
Backend

js
Copy code
req.flash("success", `Welcome, ${user.username}!`);
Frontend (EJS)

ejs
Copy code
<% if (success && success.length > 0) { %>
  <% success.forEach(msg => { %>
    <div class="alert alert-success alert-dismissible fade show">
      <%= msg %>
      <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    </div>
  <% }) %>
<% } %>
🌐 Map Features (WIP)
Implemented using Leaflet.js:

Map initialized on listing show page

Displaying marker based on listing coordinates

[In Progress]

Auto-center on user's location (navigator.geolocation)

Show all listings on index map

Marker clustering (leaflet.markercluster)

Autocomplete address search (Nominatim)

Fullscreen toggle option