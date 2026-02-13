# 🚀 Task Management REST API

## Backend Developer Internship Assignment

A scalable RESTful API built with Node.js, Express, PostgreSQL, and Sequelize, implementing secure authentication, role-based access control, and full CRUD functionality with production-ready practices.

---

# 🧠 Tech Stack

Node.js (Backend Architecture)

Express.js (API)

PostgreSQL (Database)

Sequelize ORM

JWT Authentication (Authentication and Authorization)

bcryptJS (Hashing and Security)

express-validator (Validation and Verification)

Helmet (Security Headers)

CORS (Integration of Frontend and Backend as Single Entity)

Morgan (Logging)

Swagger (API Documentation)

---

# 📦 Project Structure (Backend)

```
backend/
│
├── config/
│ ├── db.js
│ └── swagger.js
│
├── controllers/
│ ├── auth.controller.js
│ └── task.controller.js
│
├── middleware/
│ ├── auth.middleware.js
│ ├── role.middleware.js
│ └── validate.middleware.js
│
├── models/
│ ├── user.model.js
│ └── task.model.js
│
├── routes/
│ ├── auth.routes.js
│ └── task.routes.js
│
├── utils/
│ └── jwt.js
│
└── app.js

```

---

# 🔐 Core Features

## ✅ Authentication

User registration

Secure password hashing using bcrypt

JWT-based authentication

Token expiration support

Stateless authentication design

---

# ✅ Role-Based Access Control

Two roles: user and admin

Users can access only their own tasks

Admin can access all tasks

Protected routes using middleware

Role authorization middleware implemented

---

# ✅ CRUD Operations (Tasks)

## Method Endpoint Description Access

POST /api/v1/tasks -> Create task

GET /api/v1/tasks -> Get tasks

GET /api/v1/tasks/:id -> Get single task

PUT /api/v1/tasks/:id -> Update task

DELETE /api/v1/tasks/:id -> Delete task

---

# 🛡 Security Practices Implemented

Password hashing with bcrypt

JWT authentication with expiry

Role-based authorization

Helmet for security headers

CORS configuration

Input validation using express-validator

Ownership validation for task operations

SSL database connection support

Global centralized error handling

---

# 🗄 Database Schema

## User Model

id (auto-generated)

name (string, required)

email (unique, required)

password (hashed)

role (enum: user, admin)

createdAt

updatedAt

## Task Model

id (UUID primary key)

title (required)

description (optional)

userId (foreign key)

createdAt

updatedAt

Relationships

One User → Many Tasks

Cascade delete enabled

---

# 📄 API Documentation

## Swagger documentation available at:

```
http://localhost:5000/api-docs
```

## Includes:

Authentication routes

Task routes

Request/response schemas

Authorization support

---

# ⚙️ Setup Instructions

## 1️⃣ Use cd in your terminal to redirect to Particular Folder

cd backend

## 2️⃣ Install Dependencies (If node_modules not present)

npm install express
npm install express @supabase/supabase-js dotenv cors
npm install swagger-ui-express swagger-jsdoc

## 3️⃣ Create .env File

PORT=5000
DATABASE_URL=your_postgres_connection_url
JWT_SECRET=your_secret_key
JWT_EXPIRES_IN=1d

## 4️⃣ Run Server

npm run dev

# 🧪 API Testing

You can test APIs using:

Swagger UI

Postman Collection

Frontend React App

---

# 📈 Scalability & Architecture Notes

This backend is designed with scalability in mind:

# 🔹 API Versioning

Routes follow /api/v1/ structure to allow future versions.

# 🔹 Modular Architecture

Separation of:

Routes

Controllers

Middleware

Models

Config

Makes system extensible for new modules.

# 🔹 Stateless Authentication

JWT-based authentication enables horizontal scaling without session storage.

# 🔹 Future Scalability Improvements

Redis caching for read-heavy endpoints

Load balancing with NGINX

Docker containerization

CI/CD pipeline

Microservices architecture for domain separation

# 👨‍💻 Author

Rohith
Backend Developer Intern Candidate
