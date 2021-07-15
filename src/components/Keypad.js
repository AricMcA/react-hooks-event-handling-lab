// Code Keypad Component Here
import React from 'react'

function Keypad() {
    function changeIt(event) {
        console.log('Entering password...')
    }
    return (
        <input type="password" onChange={changeIt}/>
    )
}

export default Keypad