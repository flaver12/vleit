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
            console.log(station);
            if(clients[station]) {
                io.sockets.connected[clients[station].socket].emit("new-task-created", 'i am a new task!');
            }
        });
    });

    socket.on('login', function(station) {
        clients[station] = {
            "socket": socket.id
        };
        console.log(clients);
    });

    socket.on('disconnect', function(){
        console.log('user disconnected');
        for(var name in clients) {
            if(clients[name].socket === socket.id) {
                delete clients[name];
                break;
            }
        }
    });
});