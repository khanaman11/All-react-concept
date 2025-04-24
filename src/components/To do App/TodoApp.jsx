import React, { useState } from 'react';
import "./TodoApp.css";

const TodoApp = () => {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [editIndex, setEditIndex] = useState(null);

    const handleChange = (e) => {
        setTask(e.target.value);
    };

    const handleClick = (e) => {
        e.preventDefault();
        if (task.trim() !== "") {
            setTasks([...tasks, task]);
            setTask('');
        } else {
            alert("Please enter your task");
        }
    };

    const handleDelete = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };

    const handleEdit = (index) => {
        setTask(tasks[index]);
        setIsEditing(true);
        setEditIndex(index);
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        if (task.trim() !== "") {
            const updatedTasks = [...tasks];
            updatedTasks[editIndex] = task;
            setTasks(updatedTasks);
            setTask('');
            setIsEditing(false);
            setEditIndex(null);
        } else {
            alert("Please enter updated task");
        }
    };

    return (
        <div className='todo-cnt'>
            <h1>Todo App</h1>
            <form>
                <div className='input-cnt'>
                    <input
                        type="text"
                        value={task}
                        placeholder='Enter Todo'
                        onChange={handleChange}
                    />
                    {
                        isEditing ? (
                            <button className='Add-todo-btn' onClick={handleUpdate}>Update</button>
                        ) : (
                            <button className='Add-todo-btn' onClick={handleClick}>Add Todo</button>
                        )
                    }
                </div>
            </form>
            <ul className='list-cnt'>
                {
                    tasks.map((todo, index) => (
                        <li key={index}>
                            {todo}
                            <div>
                                <button onClick={() => handleDelete(index)}>Delete</button>
                                <button onClick={() => handleEdit(index)} className='edit-btn'>Edit</button>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default TodoApp;
