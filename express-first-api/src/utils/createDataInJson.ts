import fs from 'fs';

function createDataInJson(data: any) {
    try {
        const file = require('../../database/students.json');
        if (file) {
            return file;
        }
    } catch (error) {
        const fileJson = JSON.stringify(data);
        fs.writeFileSync('./database/students.json', fileJson);

        return data;
    }
}

export default createDataInJson;
