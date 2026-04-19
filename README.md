# AuthApp

AuthApp is a simple full-stack authentication app built for a college assignment. It uses a React frontend, an Express API, MongoDB Atlas, and JWT-based auth with password hashing.

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

## Project Structure

- `client/` - React app
- `server/` - Express API

## GitHub Repository

- https://github.com/AKSHAY-RSOL/auth-app-assignment

## Run Locally

### Backend

1. Install dependencies:
   ```bash
   cd server
   npm install
   ```

2. Create a `.env` file from `.env.example` and add your MongoDB Atlas URI and JWT secret.

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

2. Create a `.env` file from `.env.example` and set `VITE_API_URL` to your backend URL.

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

## Live Demo

- Frontend: https://your-vercel-url.vercel.app
- Backend API: https://your-render-url.onrender.com

## Screenshots

Add screenshots here after deployment.

## Notes

- The backend `GET /api/auth/me` route restores the current session using the stored token.
- The dashboard is protected, so users must log in before accessing it.
