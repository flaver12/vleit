export class ConnetionHandler {

    constructor() {
        this.socket = io('http://165.227.163.225:3000');
        this.socket.on('message', function(msg) {
          console.log('message: '+msg);
        });
    }

    login(object) {
        //FAKE LOGIN
        window.localStorage.setItem("station", object);
        this.socket.emit('login', object);
        return true;
    }
}