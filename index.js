const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/style.css', function(req, res) {
  res.sendFile(path.join(__dirname +"style.css"));
});

io.on('connection', (socket) => {
  socket.on('chat message', (msg, nickname) => {
    io.emit('chat message', msg, nickname);
  });
});

server.listen(3000,"0.0.0.0");
