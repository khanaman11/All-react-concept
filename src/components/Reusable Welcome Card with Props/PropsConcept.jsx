import React from 'react';
import "./PropsConcept.css"

const PropsConcept = ({name, massage}) => {
  return (
    <div className='props_components_cnt'>
        <h1>{name}</h1>
        <h2>{massage}</h2>
    </div>
  )
}

export default PropsConcept;

// 1. What is a Component?
// 🔹 Component React ka building block hota hai.
// 🔹 Ye ek function hota hai jo JSX return karta hai.
// 🔹 Har part of UI (button, card, navbar) ko component bana ke reuse kar sakte hain.


// 2. What are Props?
// 🔹 Props ka matlab hota hai "properties"
// 🔹 Ye ek component ko data dene ka tareeka hai
// 🔹 Parent component child component ko props bhejta hai, jisse UI dynamic ban jata hai