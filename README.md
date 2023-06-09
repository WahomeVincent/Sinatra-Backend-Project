# Sinatra-Backend-Project

This repository contains a Sinatra backend project developed by WahomeVincent. The project aims to provide a simple and efficient web application using the Sinatra framework.

## Author - WAHOME VINCENT MWANGI

## Table of Contents
    Features
    Installation
    Usage
    Endpoints
    Contributing
    
### Features
Built with Sinatra: The project leverages the Sinatra web framework, known for its simplicity and flexibility.
RESTful API: Implements a RESTful API architecture to handle different HTTP methods and perform CRUD operations.
Database Integration: Utilizes a database (e.g., SQLite, MySQL, PostgreSQL) to store and retrieve data.
Authentication and Authorization: Provides user authentication and authorization mechanisms to secure the application.
JSON Responses: Sends and receives data in JSON format, allowing easy integration with frontend frameworks or other applications.
### Installation
To run this project locally, please follow these steps:

Clone the repository:

bash
Copy code
git clone https://github.com/WahomeVincent/Sinatra-Backend-Project.git
Navigate to the project directory:

bash
Copy code
cd Sinatra-Backend-Project
Install the required dependencies using bundler:

bash
Copy code
bundle install
Set up the database:

bash
Copy code
# Replace 'DATABASE_URL' with your actual database URL
export DATABASE_URL=sqlite3:db/database.sqlite3
bundle exec rake db:migrate
This project uses the Active Record ORM for database management.

### Usage
To start the application, run the following command:

### bash
Copy code
bundle exec ruby app.rb
By default, the application will be accessible at http://localhost:4567.

#### Endpoints
The following endpoints are available in the API:

GET /users: Retrieves a list of all users.
GET /users/:id: Retrieves a specific user by ID.
POST /users: Creates a new user.
PUT /users/:id: Updates an existing user.
DELETE /users/:id: Deletes a user.
Please refer to the API documentation or the source code for more details on the request and response structures.

#### Contributing
Contributions to this project are welcome. If you find any issues or have suggestions for improvement, please open an issue or submit a pull request. Ensure that you follow the existing coding style and conventions.

