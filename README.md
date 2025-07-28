🏨 Hotel Management Web App (WIP)
A Node.js-based hotel management application with user authentication, listings, and a Bootstrap-styled interface. Currently in development.

🚀 Features (Completed / In Progress)
 User registration (Passport.js)

 User login/logout

 Flash messages for success/error

 EJS templating with layout inheritance

 Bootstrap 5 styling

 Hotel room listings (in progress)

 Admin dashboard

 Booking system

 User roles (Admin, Guest)

 Form validation (client & server)

🛠️ Tech Stack
Backend: Node.js, Express.js

Authentication: Passport.js (passport-local)

Templating: EJS with layouts

Database: MongoDB, Mongoose

Frontend: Bootstrap 5, custom CSS

Flash Messages: connect-flash

Session Management: express-session

Environment Variables: dotenv

🏗️ Project Structure
bash
Copy
Edit
hotel-management/
│
├── models/               # Mongoose models (e.g., User.js)
├── public/
│   ├── css/
│   └── js/               # Custom JS
├── routes/
│   ├── users.js          # Signup/Login routes
│   └── listings.js       # (WIP)
├── views/
│   ├── users/            # signup.ejs, login.ejs
│   ├── includes/         # navbar.ejs, footer.ejs, flash.ejs
│   └── layout/           # boilerplate.ejs
│
├── app.js                # Main Express app
├── package.json
└── README.md
📦 Installation
bash
Copy
Edit
git clone https://github.com/your-username/hotel-management
cd hotel-management
npm install
Create a .env file:

ini
Copy
Edit
DB_URL=mongodb://localhost:27017/hotel-db
SECRET=yourSecretKey
▶️ Running the App
bash
Copy
Edit
npm start
🧪 Test Credentials
You can register a new account at /signup or login with a seeded user (if applicable).

✅ Flash Message Example
js
Copy
Edit
req.flash("success", `Welcome, ${user.username}!`);
Displayed using EJS:

ejs
Copy
Edit
<% if (success && success.length > 0) { %>
  <% success.forEach(msg => { %>
    <div class="alert alert-success alert-dismissible fade show" role="alert">
      <%= msg %>
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  <% }) %>
<% } %>
⚠️ Still To Do
Middleware for authentication & roles

Listings CRUD

Booking logic

Tests & validations
