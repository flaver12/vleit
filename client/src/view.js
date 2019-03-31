import { ConnetionHandler } from './core/server/ConnectionHandler'
import { renderLeitstelle } from './core/view/leitstelle';
const connectionHandler = new ConnetionHandler();
const contentElement = document.querySelector('.content');
const loginElement = document.querySelector('.mode');
const headerElement = document.querySelector('.station-header');
const dynContent = document.querySelector('.dyn-content');
const uuid = require('electron').remote.getGlobal('uuid');
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
    console.log(selectedLocations);
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
    console.log(uuid);
    e.preventDefault();
    connectionHandler.login({"stations": "", "name": "Leitstelle", "uuid": uuid});
    loginElement.style.display = 'none';
    contentElement.style.display = 'block';
    render("Leitstelle");
}

//onTaskSubmit
function onTaskSubmit() {
    console.log('called!')

}

//Render
function render(role) {
    headerElement.innerHTML = `Deine Rolle <b>${role}</b>`;
    if(role === 'Leitstelle') {
        dynContent.innerHTML = renderLeitstelle();
        document.querySelector('.task-creation-btn').onclick = e => {
            e.preventDefault();
            connectionHandler.socket.emit('new-task', {stations: ["RW1", "RW2"]});
            onTaskSubmit();
        }
        return;
    }
}

//Define socket events
connectionHandler.socket.on('new-task-created', function(task) { console.log('task'+task) })