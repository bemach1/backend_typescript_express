function findUser(students:any[], id:Number):boolean {
    let student = students.find(item => item.id == id)
    if(student) {
        return true
    }
    return false
}

export default findUser