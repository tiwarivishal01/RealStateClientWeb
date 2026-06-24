# YourFutureHome - Backend Server

This is the backend API component of **YourFutureHome**, built with Express.js, Prisma ORM, and MongoDB.

## Technology Stack

- **Core**: Node.js + Express.js
- **ORM**: Prisma (v5)
- **Database**: MongoDB Atlas
- **Authorization**: Express OAuth2 JWT Bearer (Auth0 security layer)
- **Utilities**: nodemon, cookie-parser, cors, express-async-handler

## Installation & Setup

1. **Install Dependencies**:
   Ensure you have Node.js installed, then execute in this directory:
   ```bash
   npm install
   ```

2. **Environment Configuration**:
   Create or modify the `.env` file in the `server` directory:
   ```env
   PORT=8000
   DATABASE_URL="mongodb+srv://<username>:<password>@<cluster>.mongodb.net/realestate?retryWrites=true&w=majority"
   ```

3. **Synchronize Schema**:
   Push the Prisma schema structure and indexes to your MongoDB database:
   ```bash
   npx prisma db push
   ```

4. **Generate Prisma Client**:
   Generate local client types matching the schema:
   ```bash
   npx prisma generate
   ```

5. **Start Server**:
   Start the development server with Nodemon (runs on port `8000` by default):
   ```bash
   npm start
   ```

6. **Seed Database (Optional)**:
   Clear existing records and seed 19 realistic property listings:
   ```bash
   node prisma/seed.js
   ```

## Folder Structure

- `/config`: Configuration settings for Prisma Client and Auth0 authentication checks.
- `/controllers`: Request handlers for User profiles, Bookings, Favorites, and Residencies.
- `/data`: Sample listing data source (`Residency.json`).
- `/prisma`: Prisma schema model layout (`schema.prisma`) and seed logic (`seed.js`).
- `/routes`: Router setups mapping routes to controllers.
- `index.js`: Main Express application entry point.
