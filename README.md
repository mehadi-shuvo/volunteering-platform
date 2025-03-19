# Volunteer Platform

## 📌 Project Overview

This Volunteer Platform enables users to discover and join volunteer events, request community help, and manage their profiles. It connects volunteers with opportunities and provides a streamlined way to engage in community service.

## 📌 Technologies Used

- **Frontend**: React, TypeScript, Tailwind CSS, daisyUI, react-hook-form, Redux, Axios
- **Backend**: Node.js, TypeScript, Express.js, Prisma
- **Database**: PostgreSQL
- **Authentication**: JWT-based auth
- **Authentication**: REST API

## 📌 Features

### 🔹 User Registration & Profile Management

- Sign up, login, and profile management
- Secure password hashing with bcrypt
- JWT-based authentication

### 🔹 Discover & Join Volunteer Events

- Event listing with category and location filters
- Event detail page with join button
- Backend integration for event creation, listing, and joining

### 🔹 Community Help Requests

- Help request listing with urgency levels
- Help request detail page with comments
- Commenting system for user engagement

## 📌 Database Schema

```

enum VolunteerType {
  VOLUNTEER
  ORGANIZER
}

enum URGENCY_LEVELS{
  LOW
  MEDIUM
  URGENT
}

model User {
  id               String        @id @default(uuid())
  email            String        @unique
  name             String
  password         String
  skills           String[]
  causes_supported String[]      @default([])
  created_at       DateTime      @default(now())
  updated_at       DateTime      @updatedAt
  organized_events Events[]      @relation("OrganizedEvents")
  attended_events  Events[]      @relation("AttendedEvents")
  help_post        HelpPost[]
  comments         Comments[]
  history          History[]
}

model Events {
  id             String        @id @default(uuid())
  title          String
  description    String
  category       String
  organizer_id   String
  organizer      User          @relation("OrganizedEvents", fields: [organizer_id], references: [id])
  attendees      User[]        @relation("AttendedEvents")
  location       String
  date           String
  time           String
  created_at     DateTime      @default(now())
  updated_at     DateTime      @updatedAt
  history        History[]
}

model History {
  id          String        @id @default(uuid())
  title       String
  type        VolunteerType
  date        String
  user_id     String
  user        User          @relation(fields: [user_id], references: [id])
  event_id    String
  event       Events        @relation(fields: [event_id], references: [id])
  created_at  DateTime      @default(now())
  updated_at  DateTime      @updatedAt
}

model HelpPost{
  id String @id @default(uuid())
  title String
  description String
  urgency_level URGENCY_LEVELS
  user User @relation(fields: [posted_by], references: [id])
  posted_by String

  comments Comments[]
}

model Comments {
  id String @id @default(uuid())
  comment String
  user_id String
  post_id String
  user User @relation(fields: [user_id], references: [id])
  post HelpPost @relation(fields: [post_id], references: [id])

}
```

## 📌 Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/mehadi-shuvo/volunteering-platform.git
cd volunteering-platform
```

### 2️⃣ Install Dependencies

```bash
cd server
npm install
cd ../client
npm install
```

### 3️⃣ Configure Environment Variables

Create a `.env` file in the `server` & `client` directory:

Follow the `.example.env files`.

### 4️⃣ Run the Development Servers

#### Backend:

```bash
cd server
npm run start:dev
```

#### Frontend:

```bash
cd client
npm run dev
```

## 📌 API Documentation

### 🔹 User Authentication

- `POST /api/auth/register` – Register a new user
- `POST /api/auth/login` – Log in a user
- `POST /api/auth/logout` – Log out a user
- `POST /api/auth/refresh-token` – Get access token by refresh token
- `POST /api/auth/refresh-token` – Get access token by refresh token
- `GET /api/auth/` – Fetch users profile
- `GET /api/auth/:id` – Fetch user profile
- `PUT /api/auth/:id` – Update user profile

### 🔹 Volunteer Events

- `POST /api/volunteer-events` – Create a new event
- `GET /api/volunteer-events` – Fetch all events (filters available)
- `POST /api/volunteer-events/join` – Join an event

### 🔹 Community Help Requests

- `POST /api/help-post` – Create a new help request
- `GET /api/help-post` – Fetch all help requests
- `POST /api/help-post/comment/:id` – Add a comment

## 📌 Running the Project

### Locally

```bash
npm run start:dev (server)
npm run dev (client)
```

### Deployment on Vercel

- Push your repository to GitHub
- Link it to Vercel
- Deploy both `client` and `server` projects with proper environment variables

---
