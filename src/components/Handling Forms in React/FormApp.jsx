import React, { useState } from 'react'
import "./FormApp.css"

const FormApp = () => {
    const [data, setData] = useState({
        name: '',
        email: ''
    });
    const [submitted, setSubmittedName] = useState('')
    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setData({ ...data, [name]: value })

    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmittedName(data)
        setData({name:"", email:""})

    }
    return (
        <div className='form-cnt'>
            <h1>FormApp</h1>
            <form action="" onSubmit={handleSubmit}>
                <p>
                    <label htmlFor="">Username: </label>
                    <input type="text" name='name' value={data.name} onChange={handleChange} /><br />
                </p>
                <p>
                    <label htmlFor="">Email: </label>
                    <input type="email" name='email' value={data.email} onChange={handleChange} /><br />
                </p>
                <button type='submit'>Submit</button>
            </form>
            {/* ✅ Ye line fix ki gayi hai */}
            {submitted.name && (
                <h2>Welcome: {submitted.name} ({submitted.email})</h2>
            )}
        </div>
    )
}

export default FormApp;

// 🔑 Why This is Important?
// Kisi bhi web app me form bahut common hota hai — chahe login ho, signup, contact form ya search box — React me form handle karna thoda different hota hai plain HTML se.
// React me forms ka data manage karne ke liye state + event handling dono ka use hota hai.

// 🧠 What You'll Learn:
// How to create a controlled input field
// How to handle form submission
// How to use onChange and onSubmit events