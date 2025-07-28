📘 Hotel Management Auth App – README
This is a Node.js-based hotel listing web app that implements secure user authentication using Passport.js, along with sign up, login, and flash messaging. It uses EJS templates, Bootstrap UI, and MongoDB with Mongoose ORM.

📁 Project Structure
pgsql
Copy code
hotel-management/
├── models/
│   └── user.js
├── routes/
│   └── user.js
│   └── listings.js
├── views/
│   ├── includes/
│   │   ├── flash.ejs
│   │   ├── footer.ejs
│   │   └── navbar.ejs
│   ├── layout/
│   │   └── boilerplate.ejs
│   ├── users/
│   │   ├── signup.ejs
│   │   └── login.ejs
│   └── listings/
│       └── index.ejs
├── public/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── script.js
├── app.js (or index.js)
├── package.json
└── README.md
⚙️ Installation
Clone the repo

bash
Copy code
git clone https://github.com/yourusername/hotel-management-auth.git
cd hotel-management-auth
Install dependencies

bash
Copy code
npm install
Set up environment (optional)
Create a .env file:

env
Copy code
MONGO_URI=mongodb://localhost:27017/hotel-auth
SESSION_SECRET=yourStrongSecret
Run MongoDB
Make sure MongoDB is running locally:

bash
Copy code
mongod
Start the app

bash
Copy code
npm start
🚀 Features
🔒 User Authentication (Signup/Login/Logout)

🔐 Password hashing using passport-local-mongoose

📦 MongoDB & Mongoose for user storage

💬 Flash messages for feedback (via connect-flash)

📄 EJS views with clean Bootstrap 5 styling

🛡 Express session for maintaining login state

🧪 Routes
Method	Route	Description
GET	/signup	Render signup form
POST	/signup	Create new user & login
GET	/login	Render login form
POST	/login	Login existing user
GET	/logout	Log user out
GET	/listings	Protected route (sample)

🛠 Tech Stack
Backend: Node.js, Express.js

Auth: Passport.js (passport-local)

Frontend: EJS + Bootstrap 5

DB: MongoDB with Mongoose

Utilities: connect-flash, express-session

🧑‍💻 Sample Flash Messages
js
Copy code
req.flash("success", `Welcome, ${user.username}!`);
req.flash("error", "Invalid username or password.");
ejs
Copy code
<% if (success && success.length > 0) { %>
  <% success.forEach(msg => { %>
    <div class="alert alert-success"><%= msg %></div>
  <% }) %>
<% } %>
🔐 Auth Config (Passport)
js
Copy code
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user");

app.use(require("express-session")({
  secret: process.env.SESSION_SECRET || "defaultSecret",
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
