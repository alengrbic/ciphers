import React from 'react'

export default function Output(props) {
    return (
        <div>
            <h1>Encoded:</h1>
    <textarea value={props.val.join("")} name="" id="" cols="30" rows="10"></textarea>
        </div>
    )
}
