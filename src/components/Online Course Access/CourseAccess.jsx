import React, { useState } from 'react'
import "./CourseAccess.css"

const CourseAccess = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleLoginLogout = ()=>{
        setIsLoggedIn(!isLoggedIn)
    }
  return (
    <div className='course-cnt'>
        <h1>Geniusgride Online Course</h1>
        {
            isLoggedIn ? (<p>Welcome back! You have access to the course content. 🎓</p>) : (<p>Please login to access the course. 🔒</p>)
        }
        <button onClick={handleLoginLogout}>{isLoggedIn ? "Logout" : "Login"}</button>
    </div>
  )
}

export default CourseAccess