export class JsonFileHandler {

    constructor() {
        this.baseExternalPath = __dirname + '/../../../extraResources';
        console.log(this.baseExternalPath);
        this.fs = require('fs');
    }

    loadFile(fileName, isExtraResource = false, path= '') {
        if(isExtraResource) {
            path = this.baseExternalPath;
        }
        let buffer = this.fs.readFileSync(path+'/'+fileName);
        const content = JSON.parse(buffer);
        this.content = content;
        return;
    }

    saveFile(fileName, isExtraResource = false, path= '') {
        if(isExtraResource) {
            path = this.baseExternalPath;
        }
        this.fs.writeFileSync(path+'/'+fileName, JSON.stringify(this.getContent()));
        return;
    }

    getContent() {
        return this.content;
    }

    setContent(content) {
        this.content = content;
    }

    addContent(content) {
        this.content.push(content);
    }
}