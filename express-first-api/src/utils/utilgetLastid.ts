import { IStudent } from "../interfaces/student";

function getLastId(students: Array<IStudent>): number {
    let item = students[students.length - 1]
    if(item) {
        return item.id + 1
    }
    return 1
}

export default getLastId;