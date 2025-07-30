🏨 Hotel Management Web App (WIP)
A Node.js-based hotel management application with user authentication, hotel room listings, and a Bootstrap-styled interface. Currently in development.

🚀 Features
✅ Completed
User registration with Passport.js

User login/logout with flash messaging

EJS templating with layout inheritance

Bootstrap 5 responsive UI

Flash messages for success/error feedback

Form validation (client & server side)

Listings CRUD with isOwner access control

Display reviews on listing show page (using .populate('reviews'))

⏳ In Progress
Admin dashboard

Booking system with date availability

User roles: Admin / Guest

Advanced authorization middleware

🛠️ Tech Stack
Backend: Node.js, Express.js

Authentication: Passport.js (LocalStrategy)

Templating: EJS with layout inheritance

Database: MongoDB with Mongoose

Styling: Bootstrap 5 & custom CSS

Flash Messages: connect-flash

Session Management: express-session

Environment Config: dotenv

📦 Installation
bash
Copy code
git clone https://github.com/your-username/hotel-management
cd hotel-management
npm install
🔐 Setup Environment Variables
Create a .env file in the root:

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
You can register a new user at /signup
Or log in with any seeded/test user (if implemented).

✅ Flash Message Example
Backend:
js
Copy code
req.flash("success", `Welcome, ${user.username}!`);
Frontend (EJS):
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

Added isOwner middleware to protect listing edit/delete

Fixed model registration error (Schema hasn't been registered)

Injected currentUser into res.locals for global EJS access

Enforced isLoggedIn & isOwner middleware on listing routes

Flash messages on unauthorized access

Populated reviews on listing show page

⚠️ Still To Do
Middleware for Admin/Guest role-based access

Booking logic (with availability & date validation)

Admin dashboard interface

UI/UX polishing & full form validations

Testing routes & error handling