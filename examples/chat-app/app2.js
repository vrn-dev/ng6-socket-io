const http = require('http');
const path = require('path');
const express = require('express');
const app = express();


app.use(express.static(path.join(__dirname, 'public/dist')));

app.get('*', function (req, res, next) {
  res.sendFile(__dirname + "/public/dist/index.html");
});


const server = http.createServer(app);
const io = require('socket.io')(server);
io.on('connection', function (socket) {
  socket.emit('msg', { msg: 'Welcome bro!' });
  socket.on('msg', function (msg) {
    console.log(msg);
    socket.emit('msg', { msg: "you sent : " + msg });
  })
});

server.listen(8989);
console.log(`Server 1 listening on 8989`);