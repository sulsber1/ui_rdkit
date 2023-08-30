import React from 'react'
import { useState } from 'react'  
import './App.css'



function Molecules({id, smile, score}) {
    const [buttonValue, setButtonValue] = useState(smile)
    const [checkValue, setcheckValue] = useState({ rdkit : false, cartridge : false, other : false})
    
    let handleClick = () => {
        const value = buttonValue
        alert(value)
    }
    
    // console.log(smile)
    return (
        <div className='container' onClick={handleClick}>
            <h1>{smile}</h1>
            <div>{score}</div>
        </div>
    )
}

export default Molecules