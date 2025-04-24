import React, { useState } from 'react'
import "./StudentsList.css"

const StudentsList = () => {
    const [students, setStudents] = useState(
        [
            { id: 1, name: "Amanullah", age: 22, city: "Patna" },
            { id: 2, name: "Asim", age: 24, city: "Delhi" },
            { id: 3, name: "Zoya", age: 21, city: "Mumbai" },
        ]
    )

    const handleDelete = (id) => {
        const filtered = students.filter((student) => student.id !== id);
        setStudents(filtered);
    };

    const addStudent = () => {
        const newStudent = {
            id: new Date().getTime(),
            name: "New Student",
            email: "new@student.com"
        };
        setStudents([...students, newStudent]);
    }


    return (
        <div className='student-cnt'>
            <h1>Students List</h1>

            {
                students.map((boys, index) => {
                    return (
                        <ul key={index}>
                            <li>
                                <strong>{boys.name}</strong> ({boys.age} years old) - {boys.city}
                                <button onClick={() => handleDelete(boys.id)}>Delete</button>
                                <button onClick={addStudent}>Add Student</button>
                            </li>

                        </ul>
                    )
                })
            }

        </div>
    )
}

export default StudentsList