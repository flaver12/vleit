export class Vehicles {

    constructor() {
        this.stations = require('electron').remote.getGlobal('wachen').locations;
    }

    loadVehicles(role, station) {
        let vehicles;
        if(this.stations[role]) {
            for(let currentStation in this.stations[role]) {
                let stationSelected = this.stations[role][currentStation];
                if(stationSelected.id === station) {
                    vehicles = stationSelected.vehicles;
                }
            }
        }
        return vehicles;
    }
}