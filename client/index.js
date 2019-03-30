const vehicles = {
    RW1: ["1 NEF-1", "1 RTW-1", "1 KTW-1"],
    RW2: ["2 NEF-1", "2 RTW-1", "2 RTW-2"],
    RW3: ["3 NEF-1", "3 RTW-1", "3 RTW-2", "3 KTW-1"],
    RW4: ["4 ITW-1"],
    RW5: ["5 NEF-1", "5 RTW-1", "5 RTW-2","1 SEG Transport-1", "1 SEG BH-1", "1-LNA-1"],

    FuRW1: ["1 ELW 1-1", "1 HLF 20-1", "1 DLK 23-1", "1 HLF 20-2", "1 RTW-2", "KLAF 1", "1 GWA-1", "FWK-1", "WLF-1", "ABGefahr", "ABMulde"],
    FuRW2: ["2 ELW 1-1", "2 HLF 20-1", "2 DLK 23-1", "2 HLF 20-2", "2 RTW-1", "2 TLF4000 1", "2 RW-L-1","WLF-2 / AB MANV"],
    FFW3: ["3 LF-20-1", "3 TLF4000-1", "3 HLF-20-1", "3 Decon-1"],
    FFW4: ["4 ABC-ERK-KW-1", "4 HLF-10-1"],
    FFW5: ["5 MTF-1", "5 TLF4000-1", "5 LF-20-1", "5 SW2001"],
    FFW6: ["6 KDOW-1", "6 TLF4000-1", "6 LF-20-1", "6 GWL-1"],

    POL1: ["1 STW-1", "1 STW-2", "1 MTW-3", "1 MTW-4", "1 MTW-5 VK", "1 KRAD-6", "1-ZSTW-7", "1 GRUKW-8", "1 GRUKW-9", "1 MTW-10 BAB"],
    POL2: ["2 MTW-1", "2 MTW-2 DHF", "2 KRAD-3"],
    BEPO: ["3 GRUKW-1", "3 HKW-2", "3 GefB-1", "3 WAW-10-1", "3 SW-4-1", "3 KMRD-1"],

    Stadtwerke: ["Bauhoffahrzeug", "Bauhoffahrzeug prische", "Stadtwerke-Linien Buss"],
};

const station = document.querySelector('.station-name')
const situation = document.querySelector('.situation')
const description = document.querySelector('.description')
const locations = document.querySelector('.location')
const mainForm = document.querySelector('.main-form')
const vehiclesAv = document.querySelector('.vehicles')
const tasks = document.querySelector('.list')
const currentRunningTasks = [];

let selectedVehicles = [];

function endTask(o) {
    var p=o.parentNode.parentNode;
    p.parentNode.removeChild(p);
}

station.onchange = () => {
 const text = station.options[station.selectedIndex].text
 let html = ``;
 vehiclesAv.innerHTML = '';
 if(text !== '------------------') {
    switch(text) {
        //TODO: FIX ME!!
        case 'RW 1':
            vehicles.RW1.forEach(e => {
                html += `<input type="checkbox" name="${e}" value="${e}" class="veh-av">${e}<br>`;
            })
            selectedVehicles = vehicles.RW1;
            vehiclesAv.innerHTML = html;
            break;
        case 'RW 2':
            vehicles.RW2.forEach(e => {
                html += `<input type="checkbox" name="${e}" value="${e}" class="veh-av">${e}<br>`;
            })
            selectedVehicles = vehicles.RW2;
            vehiclesAv.innerHTML = html;
            break;
        case 'RW 3':
            vehicles.RW3.forEach(e => {
                html += `<input type="checkbox" name="${e}" value="${e}" class="veh-av">${e}<br>`;
            })
            selectedVehicles = vehicles.RW3;
            vehiclesAv.innerHTML = html;
            break;
        case 'RW 4':
            vehicles.RW4.forEach(e => {
                html += `<input type="checkbox" name="${e}" value="${e}" class="veh-av">${e}<br>`;
            })
            selectedVehicles = vehicles.RW4;
            vehiclesAv.innerHTML = html;
            break;
        case 'RW 5':
            vehicles.RW5.forEach(e => {
                html += `<input type="checkbox" name="${e}" value="${e}" class="veh-av">${e}<br>`;
            })
            selectedVehicles = vehicles.RW5;
            vehiclesAv.innerHTML = html;
            break;


        case 'FuRW 1':
            vehicles.FuRW1.forEach(e => {
                html += `<input type="checkbox" name="${e}" value="${e}" class="veh-av">${e}<br>`;
            })
            selectedVehicles = vehicles.FuRW1;
            vehiclesAv.innerHTML = html;
            break;
        case 'FuRW 2':
            vehicles.FuRW2.forEach(e => {
                html += `<input type="checkbox" name="${e}" value="${e}" class="veh-av">${e}<br>`;
            })
            selectedVehicles = vehicles.FuRW2;
            vehiclesAv.innerHTML = html;
            break;
        case 'FFW 3':
            vehicles.FFW3.forEach(e => {
                html += `<input type="checkbox" name="${e}" value="${e}" class="veh-av">${e}<br>`;
            })
            selectedVehicles = vehicles.FFW3;
            vehiclesAv.innerHTML = html;
            break;
        case 'FFW 4':
            vehicles.FFW4.forEach(e => {
                html += `<input type="checkbox" name="${e}" value="${e}" class="veh-av">${e}<br>`;
            })
            selectedVehicles = vehicles.FFW4;
            vehiclesAv.innerHTML = html;
            break;
        case 'FFW 5':
            vehicles.FFW5.forEach(e => {
                html += `<input type="checkbox" name="${e}" value="${e}" class="veh-av">${e}<br>`;
            })
            selectedVehicles = vehicles.FFW5;
            vehiclesAv.innerHTML = html;
            break;
        case 'FFW 6':
            vehicles.FFW6.forEach(e => {
                html += `<input type="checkbox" name="${e}" value="${e}" class="veh-av">${e}<br>`;
            })
            selectedVehicles = vehicles.FFW6;
            vehiclesAv.innerHTML = html;
            break;

        case 'Pol 1':
            vehicles.POL1.forEach(e => {
                html += `<input type="checkbox" name="${e}" value="${e}" class="veh-av">${e}<br>`;
            })
            selectedVehicles = vehicles.POL1;
            vehiclesAv.innerHTML = html;
            break;
        case 'Pol 2':
            vehicles.POL2.forEach(e => {
                html += `<input type="checkbox" name="${e}" value="${e}" class="veh-av">${e}<br>`;
            })
            selectedVehicles = vehicles.POL2;
            vehiclesAv.innerHTML = html;
            break;
        
        case 'Bepo':
            vehicles.BEPO.forEach(e => {
                html += `<input type="checkbox" name="${e}" value="${e}" class="veh-av">${e}<br>`;
            })
            selectedVehicles = vehicles.BEPO;
            vehiclesAv.innerHTML = html;
            break;


        case 'Stadtwerke':
            vehicles.Stadtwerke.forEach(e => {
                html += `<input type="checkbox" name="${e}" value="${e}" class="veh-av">${e}<br>`;
            })
            selectedVehicles = vehicles.Stadtwerke;
            vehiclesAv.innerHTML = html;
            break;
    }
 }
}

mainForm.onsubmit = e => {
    e.preventDefault();
    let activatedVehicles =[];

    vehiclesAv.querySelectorAll('.veh-av').forEach(e => {
        if(e.checked) {
            activatedVehicles.push(e.value)   
        }
    })
    currentRunningTasks.push({
        title: situation.options[situation.selectedIndex].text,
        desc: description.value,
        location: locations.value,
        stations: station.options[station.selectedIndex].text,
        vehicles: activatedVehicles
    });

    console.log(currentRunningTasks);


    let activeVehicleForTask = '';
    
    activatedVehicles.forEach(e => {
        activeVehicleForTask += e + '<br>'
    })
    const row = tasks.insertRow(-1)
    let cSituation = row.insertCell(0)
    let cDescription = row.insertCell(1)
    let cDocations = row.insertCell(2)
    let cStation = row.insertCell(3)
    let cActiveVehicleForTask = row.insertCell(4)
    let cStatus = row.insertCell(5)

    cSituation.innerHTML = situation.options[situation.selectedIndex].text;
    cDescription.innerHTML = description.value;
    cDocations.innerHTML = locations.value;
    cStation.innerHTML = station.options[station.selectedIndex].text;
    cActiveVehicleForTask.innerHTML = activeVehicleForTask;
    cStatus.innerHTML = `<button onclick="endTask(this)">Ende</button>`;

    description.value = ''
    locations.value = ''
    vehiclesAv.innerHTML = ''
    station.options[0].selected = 'selected'
    situation.options[0].selected = 'selected'

}

