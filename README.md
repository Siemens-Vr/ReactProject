# Virtual Mechatronic Lab

## Overview

This project is a web application that combines a virtual mechatronics lab experience with an e-commerce platform. Users can explore and interact with virtual mechatronics products i.e, 3D interactions and purchase products developed in the lab. The application is built using React for the frontend and Node.js for the backend.

## Features

### Virtual Mechatronics Lab
- Interactive simulations of mechatronics products
- Real-time data visualization
- Product catalog featuring items developed in the lab
- Secure shopping cart and checkout process
- User reviews and ratings

### User Management
- User registration and authentication
- Profile management
- Downloaded products

## Technology Stack

- Frontend: React.js
- Backend: Node.js with Express.js
- Database: Postgresql
- Authentication: JWT (JSON Web Tokens)

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)
- Postgresql (v16.4 or later)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/Siemens-Vr/ReactProject.git
   cd sitereactvr
   ```

2. Install dependencies:
   ```
   npm install
   ```

4. Set up environment variables:
   - Create a `.env` file in the `API` directory
   - Add the following variables:
     ```
     PORT=5000
     MONGODB_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     STRIPE_SECRET_KEY=your_stripe_secret_key
     ```

## Running the Application

1. Start the backend server:
   ```
   npm start
   ```

2. In a new terminal, start the frontend development server:
   ```
   cd sitereactvr
   npm start
   ```

3. Open your browser and navigate to `http://localhost:3000`

## Testing

- To run tests:
  ```
  cd sitereactvr
  npm test
  ```

## Deployment

Detailed deployment instructions will depend on your hosting provider. Generally, you'll need to:

1. Build the React frontend
2. Set up a production Postgres database
3. Configure environment variables on your hosting platform
4. Deploy the Node.js backend
5. Set up a web server to serve the static frontend files and proxy API requests to the backend



