# Eventro – Event Management System

A modern full-stack event management application built with **Node.js**, **Express**, **MongoDB**. This platform allows users to sign up, register for events, and manage event schedules with ease.

---

## Features

- User registration and login
- Event creation and management
- MongoDB Atlas cloud database integration
- Simple and clean frontend interface
- Environment variable (.env) based configuration

---

## Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas
- **Hosting**: Netlify (frontend), Render/Glitch (backend)

# Backend Setup
cd backend
npm install

# MongoDB Atlas Setup
## Allow Access to Everyone
In the MongoDB Atlas dashboard:
Go to Network Access
Add IP Address: 0.0.0.0/0 (to allow access from any IP)

# Start Backend Server
npm run dev