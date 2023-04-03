import { IStudent } from "../interfaces/student"
function findUser(students:IStudent[], id:Number) {
    let student = students.find(item => item.id == id)
    if(student) {
        return student
    }
    return false
}

export default findUser