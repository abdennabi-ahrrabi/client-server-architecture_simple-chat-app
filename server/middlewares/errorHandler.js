// server/middlewares/errorHandler.js

import logger from '../services/logger.js';

export default function errorHandler(err, req, res, next) {
    logger.error(`Error: ${err.message}`);
    res.status(500).json({ message: 'Internal Server Error' });
}
