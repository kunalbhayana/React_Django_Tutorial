# React-Django User Registration Tutorial

A full-stack user registration application with a React frontend and Django backend with MySQL database.

## Project Structure

- `frontend/`: React frontend application
- `backend/`: Django backend application with REST API

## Setup Instructions

### Database Setup

1. Make sure MySQL is installed and running on your system.

2. Create a MySQL database for the application:
   ```
   mysql -u root -p
   CREATE DATABASE tutorial_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
   exit;
   ```

### Backend Setup

1. Navigate to the backend directory:
   ```
   cd backend
   ```

2. Activate the virtual environment:
   ```
   source venv/bin/activate
   ```

3. Install required packages:
   ```
   pip install -r requirements.txt
   ```

4. Update the database settings in `backend_project/settings.py` with your MySQL credentials.

5. Run migrations and start the Django server:
   ```
   python manage.py migrate
   python manage.py runserver 8001
   ```
   The backend will run on http://localhost:8001

### Frontend Setup

1. Navigate to the frontend directory:
   ```
   cd frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the React development server:
   ```
   npm start
   ```
   The frontend will run on http://localhost:3000

## Features

- User registration form with validation
- Django REST API for user registration
- MySQL database for storing user data
- Cross-Origin Resource Sharing (CORS) configured for local development
- Secure password hashing with Django's authentication system

## Technologies Used

- **Frontend**: React, Axios
- **Backend**: Django, Django REST Framework
- **Database**: MySQL
