# AuthApp

AuthApp is a full-stack authentication web app built for a college assignment. It includes user signup, login, protected routes, and persistent session restore.

## Objective

The objective of this project is to build and deploy a complete full-stack authentication system using modern web technologies. The application demonstrates secure user registration and login, token-based authentication, protected routing, and persistent user sessions.

## Architecture

This project follows a monorepo structure with separate frontend and backend applications:

- Client Layer (React + Vite + Tailwind CSS): Handles UI, routing, form validation, and session state on the browser.
- Server Layer (Node.js + Express): Exposes REST APIs for authentication and protected user data.
- Data Layer (MongoDB Atlas + Mongoose): Stores user records with hashed passwords.
- Security Layer (JWT + bcryptjs): Uses password hashing for storage and JWT tokens for authenticated requests.
- Deployment Layer: Frontend is hosted on Vercel and backend API is hosted on Render.

## Tech Stack

- Frontend: React, Vite, Tailwind CSS
- Backend: Node.js, Express.js
- Database: MongoDB Atlas with Mongoose
- Authentication: JWT and bcryptjs
- Deployment: Vercel for frontend, Render for backend
- Version Control: GitHub

## Features

- User registration
- User login
- JWT authentication
- Protected dashboard route
- Persistent session restore on refresh
- Password hashing with bcrypt
- Clean responsive UI

## Live Links

- Frontend (Vercel): https://auth-app-assignment-deploy.vercel.app/
- Backend API (Render): https://auth-app-assignment.onrender.com

## Project Structure

- `client/` - React app
- `server/` - Express API

## GitHub Repository

- https://github.com/AKSHAY-RSOL/auth-app-assignment-deploy

## Run Locally

### Backend

1. Install dependencies:
   ```bash
   cd server
   npm install
   ```

2. Create a `.env` file from `.env.example` and set:

   - MONGO_URI
   - JWT_SECRET
   - PORT=5000

3. Start the API:
   ```bash
   npm run dev
   ```

### Frontend

1. Install dependencies:
   ```bash
   cd client
   npm install
   ```

2. Create a `.env` file from `.env.example` and set:

   - VITE_API_URL=http://localhost:5000 (for local)

   Use your Render URL in production.

3. Start the app:
   ```bash
   npm run dev
   ```

## Environment Variables

### Server

- `MONGO_URI` - MongoDB Atlas connection string
- `JWT_SECRET` - Secret used to sign JWT tokens
- `PORT` - Port for the API server

### Client

- `VITE_API_URL` - Backend base URL

## API Endpoints

- POST /api/auth/register
- POST /api/auth/login
- GET /api/auth/me (protected)

## Output

- Users can create an account with name, email, and password.
- Registered users can log in and receive a JWT token.
- Authenticated users can access the protected dashboard.
- User session is restored after browser refresh through the /me endpoint.
- Users can log out and the protected route becomes inaccessible until next login.

## Screenshots
<img width="1917" height="939" alt="image" src="https://github.com/user-attachments/assets/9640083e-5eb5-444a-b51b-362c1a760ea4" />


## Notes

- The backend `GET /api/auth/me` route restores the current session using the stored token.
- The dashboard is protected, so users must log in before accessing it.
- Client-side route refresh is handled on Vercel using a rewrite fallback.
