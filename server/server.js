// server/server.js

import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import dotenv from 'dotenv';
import logger from './services/logger.js';
import socketHandler from './socketHandler.js';
import router from './routes/index.js';
import errorHandler from './middlewares/errorHandler.js';

// Load environment variables
dotenv.config();

// Create Express app
const app = express();
app.use(express.json());

// Define routes
app.use('/', router);

// Error handling middleware
app.use(errorHandler);

// Create HTTP server and Socket.IO instance
const server = http.createServer(app);
const io = new Server(server);

// Handle socket connections
io.on('connection', socketHandler);

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    logger.info(`Server is running on port ${PORT}`);
});

export default server;
