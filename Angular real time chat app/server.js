const express = require('express');
const cors = require('cors');


const app = express();
const http = require('http').createServer(app);

const io = require('socket.io')(http, {
    cors: {
        origin: '*',
    }
});

let userList = new Map();

io.on('connection', (socket) => {

});

function addUser(userName, id) {
    if (!userList.has(userName)) {
        userList.set(userName, new Set(id));
    }
}

app.get('/', (req, res) => {
    res.send('Hello World!');
});

http.listen(3000, () => {
    console.log('Server started on port 3000');
});