import React, { useState } from 'react'
import "./CounterApp.css"

const CounterApp = () => {
    const [count , setCount] = useState(0);
    const handleInc = ()=>{
        setCount(count + 1)
    }
    const handleDcre = ()=>{
        setCount(count - 1)
    }
    const handleReset = ()=>{
        setCount(0)
    }
  return (
    <div className='container'>
        <div className="counter-wrapper">
            <h1>Counter App</h1>
            <h2>Count:{count}</h2>
            <div className="btn-box">
                <button onClick={handleInc} className='Inc-btn'>Increment</button>
                <button onClick={handleDcre} className='Dec-btn'>Decrement</button>
                <button onClick={handleReset} className='reset-btn'>Reset</button>
            </div>
        </div>

    </div>
  )
}

export default CounterApp