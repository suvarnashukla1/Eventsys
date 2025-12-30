# Event Booking System
## Overview
This project is a web-based Event Booking System developed as part of a job assignment.
It demonstrates user authentication, event management, browsing, and a complete booking flow with payment integration.
The focus of the project is clarity, usability, and correct architectural decisions within a limited scope.

## Features
- Authentication
- User signup and login
- JWT-based authentication
- Protected routes for authenticated users
- Event Creation
- View all available events
- Responsive card layout
- Each event opens in a detailed view
- Event Details
- Dedicated page for each event
- Displays full event information
- Booking option available
- Payment Flow

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
- Mongoose
- JWT authentication

## Environment Variables
### Frontend
PayPal Client ID stored in a .env file using Vite environment variables

### Backend
MongoDB connection string
JWT secret

Environment files are excluded from version control.

## Running the Project:
Frontend
```bash

cd eventbook
npm install
npm run dev
```

Backend
```bash
cd eventbook
cd backend
npm install
node server.js
```
## Future Enhancements
- Improvements
- Backend payment verification
- Seat locking to avoid overbooking
- Payment history storage
- Email notifications
- Admin dashboard

## Conclusion
This project presents a complete event booking workflow with authentication, event management, and payment integration.
The implementation balances practicality and clarity while leaving room for production-level enhancements.
