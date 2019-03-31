export class ConnetionHandler {

    constructor() {
        this.socket = io('http://localhost:3000');
        this.socket.on('message', function(msg) {
          console.log('message: '+msg);
        });
    }

    login(id) {
        //FAKE LOGIN
        window.localStorage.setItem("station", id);
        this.socket.emit('login', id);
        return true;
    }
}