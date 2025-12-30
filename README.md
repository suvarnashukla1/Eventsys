# Event Booking System
## Overview
This project is a web-based Event Booking System.
It demonstrates user authentication, event management and browsing.

## Features
- User signup and login
- JWT-based authentication
- Event Creation
- View all available events
- Responsive card layout
- Each event opens in a detailed view
- Dedicated page for each event
- Paypal frontend

## Technology Stack
### Frontend
- React (Vite)
- React Router
- PayPal React SDK
- Inline styling

### Backend
- Node.js
- Express.js
- MongoDB
- JWT authentication

## Environment Variables
### Frontend
PayPal Client ID stored in a .env file using Vite environment variables


### Backend
MongoDB connection string,
JWT secret

Environment files are excluded from version control.

## Local Setup Instructions
Prerequisites
- Node.js v18+
- npm v9+
- MongoDB Atlas account

## Running the Project:
Frontend
```bash

cd eventbook
npm install
npm run dev

```
Frontend runs at:
http://localhost:5173

Backend
```bash
cd eventbook
cd backend
npm install
node server.js
```
Backend runs at:
http://localhost:5000

## Future Enhancements
- Backend payment verification i.e. complete payment system
- Seat locking to avoid overbooking
- Payment history storage
- Email notifications
- Admin dashboard
