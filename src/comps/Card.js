import React from 'react'


export default function Card(props) {
    const sendBack = (val) => {
        props.clickHandler(val)
    }

    return (
        <div className="card m-auto" style={{width:'20rem'}} onClick={() => sendBack(props.name)}>
            <div className="card-body">
            <h3 className="font-weight-bold">{props.name}</h3>
            <p>{props.description}</p>
            </div>
            
        </div>
    )
}
