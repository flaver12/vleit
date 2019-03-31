import { ConnetionHandler } from './core/server/ConnectionHandler'
import { renderLeitstelle } from './core/view/leitstelle';
const connectionHandler = new ConnetionHandler();
const contentElement = document.querySelector('.content');
const loginElement = document.querySelector('.mode');
const headerElement = document.querySelector('.station-header');
const dynContent = document.querySelector('.dyn-content');

//onLogin
document.querySelector('.login-btn').onclick = e => {
    e.preventDefault();
    connectionHandler.login(document.querySelector('input[name="wache"]:checked').value);
    loginElement.style.display = 'none';
    contentElement.style.display = 'block';
    const role = window.localStorage.getItem('station');

    headerElement.innerHTML = `Deine Rolle <b>${role}</b>`;
    if(role === 'Leitstelle') {
        dynContent.innerHTML = renderLeitstelle();
        document.querySelector('.task-creation').onclick = e => {
            console.log('clicked')
            e.preventDefault();
            connectionHandler.socket.emit('new-task', {stations: ["Rettungsdienst"]});
            onTaskSubmit();
        }
        return;
    }
    
}

//onTaskSubmit
function onTaskSubmit() {
    console.log('called!')

}

//Define socket events
connectionHandler.socket.on('new-task-created', function(task) { console.log('task'+task) })