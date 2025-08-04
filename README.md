🏨 Hotel Management Web App
A full-stack hotel/room listing platform built with Node.js, Express, MongoDB, and Bootstrap. Users can register, list properties, leave reviews, and search/filter results with a responsive and map-enabled UI.

🚀 Live Demo: https://room-flat-rental-web-application.onrender.com

📸 Features
✅ Completed
🔐 User Auth with Passport.js (Signup, Login, Logout)

📬 Flash messages for success/error feedback

🔄 Persistent login using express-session

🎨 EJS + Bootstrap 5 templating with layout inheritance

🧾 CRUD operations for hotel/room listings

✅ isOwner middleware for edit/delete access

💬 Review system (Listing page shows all reviews via .populate('reviews'))

✔️ Form validation (client-side and server-side)

❌ Error handling for unauthorized or invalid access

🗺️ Map Features (Leaflet.js)
🌍 Show listings on interactive map

📍 Geolocation centering (navigator.geolocation)

🗂️ Marker clustering for dense listings

🧠 Location search with Nominatim autocomplete

🖥️ Fullscreen toggle support

⚒️ Tech Stack
Layer	Tech Stack
Backend	Node.js, Express.js
Frontend	EJS templating + Bootstrap 5
Database	MongoDB + Mongoose ORM
Auth	Passport.js (LocalStrategy)
Maps	Leaflet.js, Nominatim, MarkerCluster
Utilities	express-session, connect-flash

📦 Installation & Setup
1️⃣ Clone the Repository
bash
Copy
Edit
git clone https://github.com/your-username/hotel-management
cd hotel-management
2️⃣ Install Dependencies
bash
Copy
Edit
npm install
3️⃣ Set up Environment Variables
Create a .env file in the project root with:

env
Copy
Edit
DB_URL=mongodb://localhost:27017/hotel-db
SECRET=yourSecretKey
💡 Use .env.example as a template if provided.

4️⃣ Run the Server
bash
Copy
Edit
npm start
Visit http://localhost:3000/listings in your browser.

🧪 Test Credentials
You can register a new user at /signup, or log in with previously created users.

🔍 Search & Filter (In Progress)
🔎 Search by location and keywords

💸 Filter listings by min/max price

🏷️ Sort by price (Low → High, High → Low)

📌 Still To Do
⏳ Booking system (availability calendar, booking history)

🧑‍💼 Admin dashboard

🛡️ Role-based access control

🧪 Full test coverage

📱 Mobile map UI polish

🗃️ Folder Structure
arduino
Copy
Edit
hotel-management/
├── models/
├── routes/
├── views/
│   ├── includes/
│   └── listings/
├── public/
│   └── stylesheets/
├── utils/
├── .env
├── .gitignore
├── app.js
🛑 Don't Forget
Make sure .env is added to .gitignore:

gitignore
Copy
Edit
.env
node_modules/
If mistakenly pushed, remove with:

bash
Copy
Edit
git rm --cached .env
🌐 Hosted On
🔗 Render
Live URL: https://room-flat-rental-web-application.onrender.com
