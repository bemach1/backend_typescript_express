import fs from 'fs';

function createDataInJson(data:any){
    try {
        const file = require('../database/students.json');
        if(file) {
            return file
        }
    } catch (error) {
        const fileJson = JSON.stringify(data)
        return fs.writeFile('./src/database/students.json', fileJson, (err) => {
            if(err) {
                console.log(err)
            } else {
                console.log('Alunos cadastrados com sucesso!')
            }
        })
    }
}

export default createDataInJson;
