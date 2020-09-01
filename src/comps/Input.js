import React from 'react'

export default function Input(props) {

    const sendBack = (val) => {
        props.handleInput(val)
    }

    return (
        <div>
            <textarea onChange={(e) => {
                sendBack(e.target.value)
            }} placeholder="Enter text to encipher" name="" id="" cols="30" rows="10"></textarea>
        </div>
    )
}
