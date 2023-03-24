import { IStudents } from "../interfaces/interfaces";

function getLastId(students: Array<IStudents>): number {
    let item = students[students.length - 1];
    return item.id;
}

export default getLastId;