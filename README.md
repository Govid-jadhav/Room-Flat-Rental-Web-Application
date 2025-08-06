Stayra - Travel & Listing Platform
A full-stack travel and property listing web app where users can discover and post accommodations for their trips. Built with Node.js, Express, and MongoDB, Stayra makes finding or sharing a stay seamless, with map-based exploration, user authentication, and review functionality.

🔗 Live Demo: https://room-flat-rental-web-application.onrender.com

🌟 Features
✅ Completed
🔐 User Authentication

Signup, Login, Logout using Passport.js

Persistent sessions with express-session

Flash messaging for real-time feedback

🏘️ Listings Management

Users can create, view, edit, and delete travel property listings

Ownership-based access with isOwner middleware

Full CRUD with validation

💬 Review System

Leave and view reviews on listing pages

Integrated with MongoDB via .populate('reviews')

🗺️ Interactive Map Features

Browse listings on an interactive Leaflet.js map

Auto-centered via navigator.geolocation

Clustering for dense locations

Location search using Nominatim autocomplete

Fullscreen map support for immersive travel planning

✔️ Responsive Design

Mobile-friendly UI using EJS templates + Bootstrap 5

🛠️ Robust Error Handling

Catch unauthorized access and form errors gracefully

Server and client-side validation

⚙️ Tech Stack
Layer	Stack
Backend	Node.js, Express.js
Frontend	EJS templating, Bootstrap 5
Database	MongoDB with Mongoose ORM
Auth	Passport.js (LocalStrategy)
Maps	Leaflet.js, Nominatim, MarkerCluster
Utilities	express-session, connect-flash

🧑‍💻 Setup Instructions
1️⃣ Clone the Repo
bash
Copy code
git clone https://github.com/your-username/hotel-management
cd hotel-management
2️⃣ Install Dependencies
bash
Copy code
npm install
3️⃣ Configure Environment
Create a .env file:

env
Copy code
DB_URL=mongodb://localhost:27017/stayra-db
SECRET=yourSecretKey
✅ Make sure .env is added to .gitignore

4️⃣ Start the Application
bash
Copy code
npm start
Visit: http://localhost:3000/listings

👤 Test Credentials
You can register at /signup or use any previously created accounts.

🔍 Upcoming Enhancements
🚧 In Progress

🔍 Search by location/keywords

💸 Filter by price range

🏷️ Sort by price

🎯 Planned Features

📅 Booking system with calendar availability

🧑‍💼 Admin dashboard

🛡️ Role-based access control (Admin / Traveler)

✅ Full test coverage

📱 Mobile map UI improvements


📁 Folder Structure
hotel-management/
├── models/
├── routes/
├── views/
│   ├── includes/
│   └── listings/
├── public/
│   └── stylesheets/
├── utils/
├── app.js
├── .env


🌐 Deployment
Hosted on Render
🔗 Live Site

