var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
const uuidv4 = require('uuid/v4');

const clients = {};
const tasks = {};


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

        //Add task to list
        tasks[data.taskId] = data;
        tasks[data.taskId].transmitedTo = [];
        data.stations.forEach(station => {
            for(let uuid in clients) {
                if(clients[uuid].stations.includes(station)) {
                    let vehicles = [];
                    data.vehicles.forEach(vehicle => {
                        if(vehicle.station === station) {
                            vehicles.push(vehicle.vehicle);
                        }
                    });
                    tasks[data.taskId].transmitedTo.push(clients[uuid].socket);
                    io.sockets.connected[clients[uuid].socket].emit(
                        "new-task-created", 
                        {
                            situation: data.situation, 
                            description: data.description,
                            location: data.location,
                            stations: data.stations,
                            vehicles: vehicles,
                            taskId: data.taskId
                        }
                    );
                }
            }
        });
        console.log(tasks)
    });

    socket.on('complete-task', function(taskId) {
        if(tasks[taskId]) {
            tasks[taskId].transmitedTo.forEach(socket => {
                io.sockets.connected[socket].emit(
                    "task-done",
                    taskId
                );
            });
            delete tasks[taskId];
        }
        console.log(tasks);
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