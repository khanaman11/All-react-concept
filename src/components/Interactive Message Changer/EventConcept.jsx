import React, { useState } from 'react'
import "./EventConcept.css"

const EventConcept = () => {
    const [massage, setMassage] = useState("Hello! 👋")

    const handleChangeMassage = () => {
        setMassage("You just clicked the button! 🚀")
    }

    const ResetMassage = ()=>{
        setMassage("Hello! 👋")
    }

    const handleGoodBye = ()=>{
        setMassage("GoodBye")
    }
    return (
        <div className='event_cnt'>
            <h1>EventConcept</h1>
            <p>Change Massage: {massage}</p>
            <button onClick={handleChangeMassage}>Click Me</button>
            <button onClick={ResetMassage}>Reset Massage</button>
            <button onClick={handleGoodBye}>GoodBye</button>
        </div>
    )
}

export default EventConcept