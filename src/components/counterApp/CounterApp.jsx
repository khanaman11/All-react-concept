import React, { useState } from 'react'
import "./CounterApp.css"

const CounterApp = () => {
    const [count , setCount] = useState(0);

    const handleInc = ()=>{
        setCount(count + 1)
    }

    const handleDec = ()=>{
        setCount(count - 1)
    }

    const handleReset = ()=>{
        setCount(0)
    }

  return (
    <div className='CounterApp_cnt'>
        <h1>CounterApp</h1>
        <h1>Count : {count}</h1>
        <button onClick={handleInc} className='Inc_btn'>Increase</button>
        <button onClick={handleDec} className='Dec_btn'>Decrease</button>
        <button onClick={handleReset} className='Reset_btn'>Reset</button>
    </div>
  )
}

export default CounterApp;

// 🧠 What is State?
// state ek special variable hota hai jisko React track karta hai.
// Jab bhi state change hoti hai, React automatically UI ko update kar deta hai.
// State banane ke liye use karte hain: useState Hook.


// Syntax of useState
// const [value, setValue] = useState(initialValue);
// value: current state
// setValue: function to update the state
// useState(...): hook that gives us both