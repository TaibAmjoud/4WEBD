# Event Ticket Management System - Microservices Architecture

This project is an event ticket management application based on a microservices architecture. It allows for the creation, reading, updating, and deleting (CRUD) of event and user information, as well as ticket purchasing. The application is designed to be scalable and can be used by small businesses organizing local events or by international touring stars.

## Features

- API for CRUD operations on event information
- API for CRUD operations on user information
- API for user authentication/authorization
- API for ticket purchase with asynchronous confirmation via email or SMS
- Language management (English/French)
- Numbered ticket generation for increased security
- Adherence to technical constraints (response time < 300ms, regular database backup, etc.)

## Technologies Used

- Node.js for microservices backend
- Express.js for handling routes and HTTP requests
- MongoDB for the main database
- RabbitMQ for asynchronous message handling
- React.js for the frontend user interface
- Docker for service containerization
- Nginx for web server implementation
- Swagger / OpenAPI for API documentation

## Database Schema

### Event
- **title**: String (required) - Title of the event
- **description**: String (required) - Description of the event
- **date**: Date (required) - Date of the event
- **address**: String (required) - Address of the event location
- **ticketCapacity**: Number (required) - Maximum capacity of tickets for the event

### User
- **username**: String (required) - Username of the user
- **email**: String (required) - Email address of the user
- **password**: String (required) - Password of the user (hashed for security)

### Ticket
- **uuid**: String (required) - Unique identifier for the ticket
- **event**: ObjectId (required) - Reference to the event for which the ticket is purchased
- **price**: Number (required) - Price of the ticket
- **date**: Date - Date and time of ticket purchase

## Installation and Usage

1. Clone the GitHub repository: `git clone https://github.com/your_username/your_project.git`
2. Install dependencies: `npm install` in each service folder (event, ticket, user, etc.)
3. Configure environment variables in the `.env.dev` files
4. Start the services: `docker-compose up`

## Documentation

API documentation is available in each service via Swagger / OpenAPI. To access it, navigate to `http://localhost:4000/api-docs`.

## Authors

[Yan Lin] - [Taib Amjoud]
