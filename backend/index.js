const express = require('express')
const routes = require('./router')
const socketIo = require('socket.io');
const cors = require('cors')

const app = express()


app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(cors({ origin: '*' }));
app.use('/', routes)

const server = app.listen(5000, () => {
    console.log("listening on port 5000")
})

const io = socketIo(server);

// Define Socket.io logic here

io.on('connection', (socket) => {
    console.log('A user connected');

    // Handle incoming messages
    socket.on('chat message', (message) => {
        // Save the message to MongoDB
        // Emit the message to all connected clients
        io.emit('chat message', message);
    });

    // Handle user disconnection
    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});