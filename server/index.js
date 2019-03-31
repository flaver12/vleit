var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

const clients = {};

app.get('/', function(req, res){
  res.send('<h1>Hello world</h1>');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});

io.on('connection', function(socket){
    console.log('a user connected');
    
    //User selected a role
    socket.on('new-task', function(data) {
        console.log('new task dispatched');
        data.stations.forEach(station => {
            clients.forEach(element => {
                if(element.stations.includes(station)) {
                    io.sockets.connected[clients[element.uuid].socket].emit("new-task-created", 'i am a new task!');
                }
            });
        });
    });

    socket.on('login', function(object) {
        clients[object.uuid] = {
            "stations": object.stations,
            "name": object.name,
            "socket": socket.id
        };
        console.log(clients);
    });

    socket.on('disconnect', function(){
        console.log('user disconnected');
        for(var uuid in clients) {
            if(clients[uuid].socket === socket.id) {
                delete clients[uuid];
                break;
            }
        }
        console.log(clients);
    });
});