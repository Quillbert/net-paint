var express = require('express');
var app = express();
var server = app.listen(process.env.PORT || 3000);
app.use(express.static('public'));
var socket = require('socket.io');
var io = socket(server);
console.log("listening");
io.on('connection', function(socket){
	console.log(socket.id);
  socket.on('message', function(data){
    io.emit('message', data);
  });
});
