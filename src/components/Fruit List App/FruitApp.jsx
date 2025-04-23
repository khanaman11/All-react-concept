import React from 'react'
import "./FruitApp.css"

const FruitApp = () => {
    const fruits = ["Apple", "Banana", "Mango", "Orange"];
    return (
        <div className='fruit-cnt'>
            <h1>FruitApp</h1>
            <ol type='A'>
                {
                    fruits.map((fruits, index) => {
                        return (
                            <li key={index}>{fruits}</li>
                        )
                    })
                }
            </ol>
        </div>
    )
}

export default FruitApp