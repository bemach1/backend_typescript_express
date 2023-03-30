import { IStudent } from "../interfaces/student";

function getLastId(students: Array<IStudent>): number {
    let item = students[students.length - 1];
    return item.id;
}

export default getLastId;