# 🏨 Hotel Management Web App (WIP)

A Node.js-based hotel management application with user authentication, listings, and a Bootstrap-styled interface. Currently in development.

---

## 🚀 Features (Completed / In Progress)

- ✅ User registration (Passport.js)  
- ✅ User login/logout  
- ✅ Flash messages for success/error  
- ✅ EJS templating with layout inheritance  
- ✅ Bootstrap 5 styling  
- ✅ Hotel room listings (in progress)  
- ✅ Listings CRUD with isOwner access control 🔐  
- ⏳ Admin dashboard  
- ⏳ Booking system  
- ⏳ User roles (Admin, Guest)  
- ✅ Form validation (client & server)

---

## 🛠️ Tech Stack

**Backend**: Node.js, Express.js  
**Authentication**: Passport.js (passport-local)  
**Templating**: EJS with layouts  
**Database**: MongoDB, Mongoose  
**Frontend**: Bootstrap 5, custom CSS  
**Flash Messages**: connect-flash  
**Session Management**: express-session  
**Environment Variables**: dotenv

---

## 📦 Installation

```bash
git clone https://github.com/your-username/hotel-management
cd hotel-management
npm install
Create a .env file:

ini
Copy code
DB_URL=mongodb://localhost:27017/hotel-db
SECRET=yourSecretKey
▶️ Running the App
bash
Copy code
npm start
🧪 Test Credentials
You can register a new account at /signup or login with a seeded user (if applicable).

✅ Flash Message Example
js
Copy code
req.flash("success", `Welcome, ${user.username}!`);
Displayed using EJS:

ejs
Copy code
<% if (success && success.length > 0) { %>
  <% success.forEach(msg => { %>
    <div class="alert alert-success alert-dismissible fade show">
      <%= msg %>
    </div>
  <% }) %>
<% } %>
📝 ✅ What We Did Today (2025-07-29)
✅ Added isOwner middleware to protect edit/delete operations.

✅ Fixed "Schema hasn't been registered" error by correctly registering models.

✅ Integrated currentUser using res.locals for EJS conditional logic.

✅ Ensured isLoggedIn & isOwner middleware are used properly in routes.

✅ Implemented owner-checks on listings with redirect + flash messages.

✅ Populated reviews in show route using .populate("reviews").

⚠️ Still To Do
Middleware for advanced user roles (Admin/Guest)

Booking logic (date validation, availability)

Admin dashboard interface

Testing + form validation improvements

yaml
Copy code
