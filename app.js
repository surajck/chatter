// This is the main file of our chat app. It initializes a new 
// express.js instance, requires the config and routes files
// and listens on a port. Start the application by running
// 'node app.js' in your terminal


var express = require('express'),
    http = require('http'),
    https = require('https'),
    path = require('path');

var app = express();

var ioServer = http.Server(app);
var socket = require('socket.io')(ioServer);

// This is needed if the app is run on heroku:
app.set('port',process.env.PORT || 3000);

// var io = require('socket.io').listen(app.listen(port));

console.log(__dirname)

app.use(express.static(__dirname + '/public'));


socket.on('connect',function(socket){
	console.log('got a connection')

	socket.on('newChat',function(data){
		console.log(data)
		socket.broadcast.emit('msg',data)
	});
});


ioServer.listen(app.get('port'), function(req,res) {
    console.log('Express server listening on port ' + app.get('port'));
});
