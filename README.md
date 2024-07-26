# Building a Joke Submit Portal Microservice with Express and MongoDB

## Description
This project is a microservice built using Express.js and MongoDB. It provides functionality for submitting and managing data in a scalable and efficient manner. The service includes endpoints for submitting data, retrieving submitted records, and managing them using a MongoDB database. The system includes other microservices for moderating jokes and viewing jokes.



## Features
- **Usage of API Key**: Implements API key authentication for secure communication with private servers.
- **CRUD Operations**: Provides full Create, Read, Update, and Delete operations for managing user submission data.
- **MongoDB Integration**: Utilizes MongoDB for storing and managing data.

## Installation
To set up the project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/submit-microservice.git
    ```
2. Navigate into the project directory:
    ```bash
    cd submit-microservice
    ```
3. Install dependencies:
    ```bash
    npm install
    ```

## Configuration
Create a `.env` file in the root directory with the following environment variables:

```env
PORT=3000
MONGO_URI=mongodb://localhost:27017 
CLIENT_API_KEY=a38d54e0e4fb18e9b5b299a3926b7c74ec7c1bc648037d7e054522ecefc40d78
```

