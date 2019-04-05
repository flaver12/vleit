import { ConnetionHandler } from './core/server/ConnectionHandler'
import { renderLeitstelle } from './core/view/leitstelle';
import { Vehicles } from './core/vehicles/Vehicles';
import {Howl, Howler} from 'howler';

const connectionHandler = new ConnetionHandler();
const contentElement = document.querySelector('.content');
const loginElement = document.querySelector('.mode');
const headerElement = document.querySelector('.station-header');
const dynContent = document.querySelector('.dyn-content');
const uuid = require('electron').remote.getGlobal('uuid');
const uuidv4 = require('uuid/v4');

let allSelectedStations = [];

//onLogin
document.querySelector('.login-btn').onclick = e => {
    e.preventDefault();
    const selectedLocations = document.querySelectorAll('input[type=checkbox]:checked');
    let loginObject = {
        name: "",
        stations: [],
        uuid
    };
    let role;
    selectedLocations.forEach(location => {
        loginObject.name = location.getAttribute('data-role');
        loginObject.stations.push(location.value);
        role = location.getAttribute('data-role');
    });

    connectionHandler.login(loginObject);
    loginElement.style.display = 'none';
    contentElement.style.display = 'block';
    render(role);
}

document.querySelector('.loginlst-btn').onclick = e => {
    e.preventDefault();
    connectionHandler.login({"stations": "", "name": "Leitstelle", "uuid": uuid});
    loginElement.style.display = 'none';
    contentElement.style.display = 'block';
    render("Leitstelle");
}

function endTask(o, taskId) {
    var p=o.parentNode.parentNode;
    p.parentNode.removeChild(p);
    onTaskComplete(taskId);
}

//onTaskSubmit
function onTaskSubmit(task) {
    connectionHandler.socket.emit('new-task', task);
}

//onTaskComplete
function onTaskComplete(taskId) {
    console.log(taskId);
    connectionHandler.socket.emit('complete-task', taskId);
}

//Add taskToTable
function addTask(task, activeVehicleForTask) {
    const table = document.querySelector('.list');
    const row = table.insertRow(-1);
    row.classList.add('task-item');
    row.setAttribute('data-id', `${task.taskId}`);
    let cSituation = row.insertCell(0);
    let cDescription = row.insertCell(1);
    let cLocations = row.insertCell(2);
    let cStation = row.insertCell(3);
    let cActiveVehicleForTask = row.insertCell(4);
    let cStatus = row.insertCell(5);

    let activeStationsForTask = '';
    
    task.stations.forEach(e => {
        activeStationsForTask += `${e} <br>`;
    });

    cSituation.innerHTML = task.situation;
    cDescription.innerHTML = task.description;
    cLocations.innerHTML = task.location;
    cStation.innerHTML = activeStationsForTask;
    cActiveVehicleForTask.innerHTML = activeVehicleForTask;
    cStatus.innerHTML = `<button class="btn btn-success" onclick="endTask(this,'${task.taskId}')">Einsatz abgeschlossen</button>`;
}

//Render
function render(role) {
    headerElement.innerHTML = `Deine Rolle <b>${role}</b>`;
    if(role === 'Leitstelle') {
        dynContent.innerHTML = renderLeitstelle();
        
        const allStations = document.querySelectorAll('input.station-select');
        const vehicleDiv = document.querySelector('.vehicles');

        const vehicleManager = new Vehicles();
        allStations.forEach(e => {
            e.addEventListener('change', (event) => {
                if (event.target.checked) {
                  let vehicles = vehicleManager.loadVehicles(event.target.getAttribute('data-role'), event.target.value);
                  allSelectedStations.push(event.target.value);
                  vehicleDiv.innerHTML += `<h3 class="title-${event.target.value}">${event.target.value}</h3>`;
                  vehicles.forEach(vehicle => {
                    vehicleDiv.innerHTML += `
                    <div class="form-group vehicle-${event.target.value} vehicle-base">
                        <div class="col-9 col-sm-12">
                            <div class="form-group">
                                <label class="form-checkbox">
                                <input type="checkbox" value="${vehicle}" name="vehicle" class="vehicle-select" data-role="${event.target.getAttribute('data-role')}" data-station="${event.target.value}">
                                <i class="form-icon"></i> ${vehicle}
                                </label>
                            </div>
                        </div>
                    </div>
                    `;
                  });
                } else {
                    for( var i = 0; i < allSelectedStations.length; i++){ 
                        if ( allSelectedStations[i] === (event.target.value)) {
                            allSelectedStations.splice(i, 1); 
                        }
                    }
                     
                    let allVehicles = document.querySelectorAll(`.vehicle-${event.target.value}`);
                    let vehicleTitle = document.querySelector(`.title-${event.target.value}`);

                    allVehicles.forEach(vehicle => {
                        vehicle.parentNode.removeChild(vehicle);
                    });
                    vehicleTitle.parentNode.removeChild(vehicleTitle);
                }
            });
        });
        
        document.querySelector('.task-creation-btn').onclick = e => {
            e.preventDefault();

            // create object
            let task = {
                stations: allSelectedStations,
                vehicles: [],
                situation: document.querySelector('.situation option:checked').value,
                description: document.querySelector('.description').value,
                location: document.querySelector('.place').value
            };

            let activeVehicleForTask = '';
            const selectedVehicles = document.querySelectorAll('input[type=checkbox].vehicle-select:checked');
            selectedVehicles.forEach(e => {
                activeVehicleForTask += `${e.value} <br>`;
                task.vehicles.push({station: e.getAttribute('data-station'), vehicle: e.value});
            });
            task.taskId = uuidv4();
            // Add taskobject to the local first
            addTask(task, activeVehicleForTask);

            onTaskSubmit(task);
            
            document.querySelector('.description').value = '';
            document.querySelector('.place').value = '';
            document.querySelectorAll('input.station-select').forEach(station => {
                if(station.checked) {
                    station.checked = false;
                }
            });
            document.querySelectorAll('.vehicle-base').forEach(vehicle => {
                vehicle.parentNode.removeChild(vehicle);
            });
        }
        return;
    }
}

//Define socket events
connectionHandler.socket.on('new-task-created', function(task) { 
    const sound = new Howl({
        src: [__dirname+'/../extraResources/task.ogg'],
        volume: 0.5
    });
    sound.play();

    let activeVehicleForTask = '';
    task.vehicles.forEach(vehicle => {
        activeVehicleForTask += `${vehicle} <br>`;
    });

    addTask(task, activeVehicleForTask);
});

//When task is done
connectionHandler.socket.on('task-done', function(taskId) {
    const rows = document.querySelectorAll('.task-item');
    rows.forEach(row => {
        const id = row.getAttribute('data-id');
        if(id == taskId) {
            row.parentNode.removeChild(row);
        }
    })
});