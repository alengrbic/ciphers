import React from 'react'

export default function Input(props) {

    const sendBack = (val) => {
        props.handleInput(val)
    }

    return (
        <div>
            <h1>Plaintext:</h1>
            <textarea onChange={(e) => {
                sendBack(e.target.value)
            }} placeholder="Enter text to encipher" name="" id="" cols="40" rows="10"></textarea>
        </div>
    )
}
