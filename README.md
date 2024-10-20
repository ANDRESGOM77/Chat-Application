# Chat Application

## Table of Contents

1. [Project Overview](#project-overview)
2. [Video Demonstration](#video-demonstration)
2. [Technologies Used](#technologies-used)
3. [Project Structure](#project-structure)
4. [Setup and Installation](#setup-and-installation)
5. [Running the Application](#running-the-application)
6. [Features](#features)
7. [API Endpoints](#api-endpoints)
8. [Contributing](#contributing)
9. [License](#license)

## Project Overview

This project is a real-time chat application built using React for the frontend and Node.js with Express for the backend. It allows users to sign up, log in, and engage in real-time conversations with other users.

## Video Demonstration  

- [![Video](assets/video.mp4)](./Client/src/assets/videos/ShowingApp.mp4)

## Technologies Used

- Frontend: React, Vite, Tailwind CSS, DaisyUI
- Backend: Node.js, Express
- Database: MongoDB
- Real-time Communication: Socket.io
- Authentication: JSON Web Tokens (JWT)

## Project Structure

The project is divided into two main directories:

### Client

Contains the React frontend application.
- `src/`: Source files for the React application
  - `components/`: Reusable React components
  - `context/`: React context for state management
  - `hooks/`: Custom React hooks
  - `pages/`: React components for different pages
  - `utils/`: Utility functions

### Server

Contains the Node.js backend application.
- `controllers/`: Request handlers
- `models/`: Mongoose models for MongoDB
- `routes/`: Express routes
- `middleware/`: Custom middleware functions
- `utils/`: Utility functions
- `socket/`: Socket.io setup and event handlers

## Setup and Installation

1. Clone the repository
2. Install dependencies for both client and server: `npm build`
3. Set up environment variables:
- Create a `.env` file in the server directory
- Add necessary environment variables (e.g., MONGO_URI, JWT_SECRET)

## Running the Application

1. Start the server:`npm start`
2. Start the client:`npm build`

## Features

- User authentication (signup, login, logout)
- Real-time messaging
- User presence (online/offline status)
- Message history

## API Endpoints

- POST /api/auth/signup: User registration
- POST /api/auth/login: User login
- POST /api/auth/logout: User logout
- GET /api/messages/:id: Get messages for a conversation
- POST /api/messages/send/:id: Send a message

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.


## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.