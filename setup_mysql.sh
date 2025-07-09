#!/bin/bash

# MySQL setup script for Tutorial project
echo "Setting up MySQL database for the Tutorial project..."

# Prompt for MySQL credentials
read -p "Enter MySQL username (default: root): " mysql_user
mysql_user=${mysql_user:-root}

read -s -p "Enter MySQL password: " mysql_password
echo ""

# Create database
echo "Creating database 'tutorial_db'..."
mysql -u "$mysql_user" -p"$mysql_password" -e "CREATE DATABASE IF NOT EXISTS tutorial_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"

if [ $? -eq 0 ]; then
    echo "Database created successfully!"
    
    # Update Django settings with the provided credentials
    echo "Updating Django settings with your MySQL credentials..."
    
    # Escape special characters in the password for sed
    escaped_password=$(echo "$mysql_password" | sed 's/[\/&]/\\&/g')
    
    # Update settings.py with the provided credentials
    sed -i '' "s/'USER': 'root',/'USER': '$mysql_user',/g" ./backend/backend_project/settings.py
    sed -i '' "s/'PASSWORD': '',/'PASSWORD': '$escaped_password',/g" ./backend/backend_project/settings.py
    
    echo "Settings updated successfully!"
    
    # Apply migrations
    echo "Applying Django migrations..."
    cd backend
    source venv/bin/activate
    python manage.py migrate
    
    if [ $? -eq 0 ]; then
        echo "Migrations applied successfully!"
        echo "MySQL setup complete! You can now run the Django server."
    else
        echo "Error applying migrations. Please check your MySQL credentials and try again."
    fi
else
    echo "Error creating database. Please check your MySQL credentials and try again."
fi
