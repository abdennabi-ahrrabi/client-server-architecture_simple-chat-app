
# Simple Chat Application

A simple, professional implementation of a client-server architecture using Node.js, Express, and Socket.IO. This application demonstrates real-time communication between clients, including broadcasting messages and handling client connections.

## Table of Contents

- [Project Overview](#project-overview)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Architecture and Design](#architecture-and-design)
- [Testing](#testing)
- [Logging and Error Handling](#logging-and-error-handling)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

This project serves as an educational example to explain the implementation of a basic client-server architecture with Socket.IO for real-time communication. It includes structured logging, error handling, and testing.

The application demonstrates:
- How to set up a Node.js server with Socket.IO.
- Basic real-time communication between multiple clients.
- Implementation of a layered architecture with a focus on modularity and separation of concerns.
- Proper logging and error handling practices.
- Automated testing for the server and socket interactions.

## Project Structure

```
simple-chat-app/
│
│
├── Logs/                          # Contains log files generated by the application
│    
├── server/
│   ├── controllers/               # Business logic (controller functions for sockets)
│   ├── middlewares/               # Custom middlewares (e.g., error handling)
│   │   └── errorHandler.js        # Centralized error handling middleware
│   ├── models/                    # Data models (if using a database)
│   ├── routes/                    # Route definitions (HTTP endpoints)
│   │   └── index.js               # Basic route setup
│   ├── services/                  # Utility services (e.g., logger)
│   │   └── logger.js              # Logger configuration with Winston
│   ├── socketHandler.js           # Socket event handlers
│   └── server.js                  # Main server file
│
├── tests/                         # Automated tests
│   ├── sample.test.js             # Basic sample test
│   ├── server.test.js             # HTTP route tests
│   └── socket.test.js             # Socket event tests
│
├── .env                           # Environment variables configuration file
├── .gitignore                     # Specifies files and directories to be ignored by git
├── package.json                   # Project metadata and dependencies
├── package-lock.json              # Lock file for dependencies
└── README.md                      # Project documentation
```

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/simple-chat-app.git
   cd simple-chat-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory with the following content:
   ```
   PORT=3000
   LOG_LEVEL=info
   ```

## Usage

1. **Start the server:**
   ```bash
   npm start
   ```

2. **Open a browser and connect to the server:**
   The server will be running on `http://localhost:3000`.

3. **Client Interaction:**
   - Open two browser tabs or clients to test the chat functionality.
   - Send messages from one client and observe them being broadcast to the other.

## Architecture and Design

This project follows a layered architecture pattern, separating concerns into different layers:

1. **Controllers**: Manages the business logic related to socket events.
2. **Middlewares**: Handles error processing and any request pre-processing.
3. **Models**: Defines data models (if a database is used).
4. **Routes**: Defines HTTP routes for the RESTful API (if required).
5. **Services**: Provides utility functions like logging.
6. **Socket Handler**: Manages the socket connection and events.

## Testing

1. **Run all tests:**
   ```bash
   npm test
   ```

2. **Test Coverage:**
   - Unit tests cover basic HTTP routes and socket interactions.
   - Integration tests ensure that different parts of the application work together as expected.

## Logging and Error Handling

- **Logging**: Logs are managed using Winston, with log levels configurable via environment variables.
- **Error Handling**: Centralized error handling middleware ensures that all errors are logged and appropriate responses are sent to the client.

## Environment Variables

This project uses environment variables to manage configuration settings. The following variables are available:

- `PORT`: The port number on which the server will run.
- `LOG_LEVEL`: The level of logging to be used (`info`, `debug`, etc.).

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

