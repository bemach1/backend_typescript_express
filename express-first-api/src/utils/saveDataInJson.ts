import fs from 'fs';
import { IStudent } from '../interfaces/student';

const dataPath = './src/database/students.json';

function saveDataInJson(data: IStudent[]) {
    const dataString = JSON.stringify(data);
    return fs.writeFileSync(dataPath, dataString);
}

export default saveDataInJson;
