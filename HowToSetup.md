# How To Setup - React-Django Student Portal

This guide provides step-by-step instructions to set up and run the React-Django Student Portal application.

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- Python (v3.8 or higher)
- pip (latest version)
- Git

## Quick Setup Guide

### Step 1: Clone the Repository

```bash
# Clone the repository
git clone https://github.com/kunalbhayana/React_Django_Tutorial.git

# Navigate to the project directory
cd React_Django_Tutorial
```

### Step 2: Backend Setup

```bash
# Navigate to the backend directory
cd backend

# Create a virtual environment
python -m venv venv

# Activate the virtual environment
# On Windows
venv\Scripts\activate
# On macOS/Linux
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Apply migrations
python manage.py migrate

# Create a superuser (optional)
python manage.py createsuperuser
```

### Step 3: Frontend Setup

```bash
# Navigate to the frontend directory
cd ../frontend

# Install dependencies
npm install
```

### Step 4: Run the Application

**Start the Backend Server:**

```bash
# Make sure you're in the backend directory and the virtual environment is activated
cd backend
source venv/bin/activate  # On macOS/Linux

# Start the Django server on port 8001
python manage.py runserver 8001
```

**Start the Frontend Server:**

```bash
# In a new terminal, navigate to the frontend directory
cd frontend

# Start the React development server
npm start
```

## Access the Application

- Frontend: http://localhost:3000
- Backend API: http://localhost:8001/api/
- Django Admin: http://localhost:8001/admin/

## Features

- User registration with form validation
- Navigation between Home, Sign Up, About Us, and Student Dashboard pages
- Clean, responsive UI with standard CSS styling
- Backend API for user registration

## Troubleshooting

1. **Port already in use**: If port 3000 is already in use, React will ask to use another port. Type 'Y' to accept.

2. **Backend connection issues**: Ensure the backend is running on port 8001 and CORS is properly configured.

3. **Module not found errors**: Run `npm install` again in the frontend directory to ensure all dependencies are installed.

4. **Database errors**: Make sure migrations are applied with `python manage.py migrate`.

## Need Help?

If you encounter any issues, please:
1. Check the console for error messages
2. Ensure all prerequisites are installed
3. Verify that you've followed all steps in order
4. Contact the instructor for further assistance
