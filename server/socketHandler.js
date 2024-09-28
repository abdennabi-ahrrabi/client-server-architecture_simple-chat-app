// server/socketHandler.js

import logger from './services/logger.js';

export default function socketHandler(socket) {
    logger.info('New client connected');

    socket.on('message', (data) => {
        logger.info(`Message received: ${data}`);
        socket.broadcast.emit('message', data); // Broadcast the message to all other clients
    });

    socket.on('disconnect', () => {
        logger.info('Client disconnected');
    });
}
