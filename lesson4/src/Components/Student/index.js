import { useState } from "react";


function StudentFC () {
    const [student, setStudent] = useState({name: 'Nguyen Minh Duc', age: 19})
    const clickStudent = () => {
        setStudent({...student, age: student.age+1})
    }
    return (
        <div className="Student">
            <h4>Name: {student.name}. Age: {student.age}</h4>
            <button onClick={clickStudent}>Click me</button>
        </div>
    )
}

export default StudentFC