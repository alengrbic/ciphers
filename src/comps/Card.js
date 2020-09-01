import React from 'react'

export default function Card(props) {
    const sendBack = (val) => {
        props.clickHandler(val)
    }

    return (
        <div onClick={() => sendBack(props.name)}>
            <h1>{props.name}</h1>
            <p>{props.description}</p>
        </div>
    )
}
