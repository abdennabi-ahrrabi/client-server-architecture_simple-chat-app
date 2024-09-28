// tests/socket.test.js

import { expect } from 'chai'; // Use named import for chai
import { io } from 'socket.io-client';
import server from '../server/server.js'; // Ensure the correct path and extension

describe('Socket.IO Client-Server Interaction', function () {
    let clientSocket;
    let clientSocket2; // Second client for broadcast testing

    // Increase timeout to allow for server start/stop
    this.timeout(10000);

    // Start the server programmatically before the tests, only if it's not already started
    before((done) => {
        if (!server.listening) {
            server.listen(3000, () => {
                console.log('Server started on port 3000');
                done();
            });
        } else {
            done();
        }
    });

    // Setup before each test
    beforeEach((done) => {
        clientSocket = io('http://localhost:3000', {
            reconnectionDelay: 0,
            forceNew: true,
            timeout: 3000,
            transports: ['websocket']
        });

        clientSocket2 = io('http://localhost:3000', {
            reconnectionDelay: 0,
            forceNew: true,
            timeout: 3000,
            transports: ['websocket']
        });

        let connectedCount = 0;

        clientSocket.on('connect', () => {
            connectedCount++;
            if (connectedCount === 2) done();
        });

        clientSocket2.on('connect', () => {
            connectedCount++;
            if (connectedCount === 2) done();
        });
    });

    // Disconnect clients after each test
    afterEach((done) => {
        if (clientSocket.connected) {
            clientSocket.disconnect();
        }

        if (clientSocket2.connected) {
            clientSocket2.disconnect();
        }

        done();
    });

    // Stop the server after all tests
    after((done) => {
        if (server.listening) {
            server.close(() => {
                console.log('Server stopped');
                done();
            });
        } else {
            done();
        }
    });

    // Test case for message broadcasting
    it('should broadcast messages to all clients', function (done) {
        this.timeout(10000); // Increase timeout for this specific test

        clientSocket2.on('message', (message) => {
            try {
                console.log('Received broadcast message:', message); // Log received message for debugging
                expect(message).to.equal('Hello, world!');
                done();
            } catch (error) {
                done(error);
            }
        });

        // Emit message from the first client after a slight delay
        setTimeout(() => {
            clientSocket.emit('message', 'Hello, world!');
        }, 500); // Delay to ensure clientSocket2 is ready to receive messages
    });
});
