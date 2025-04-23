import React from 'react'
import "./Hello_react.css"

const Hello_react = () => {
  let name = "Amanullah khan";
  const massage = "Welcom to javascript it is very useful programimg language.!"

  name = "Aman khan"
  return (
    <div className='hello-react-cnt'>
      <h1>Hello: {name}</h1>
      <p>{massage}</p>
    </div>
  )
}

export default Hello_react

//  What is React?
// React ek JavaScript library hai jo UI (User Interface) banane ke liye use hoti hai.
// Isse hum web apps fast, reusable components ke saath build kar sakte hain.


// What is JSX?
// JSX ka matlab hai JavaScript + XML
// Ye ek syntax hai jisme hum HTML jaise code ko JavaScript ke andar likh sakte hain.
// React ke components ke andar hum JSX likhte hain.