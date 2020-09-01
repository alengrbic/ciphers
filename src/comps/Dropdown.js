import React, {useState} from 'react'
import '../styles/dropdown.css'


export default function Dropdown(props) {

    const sendBack = (e) => {
        props.handleDisplay(e)
    }

    const renderOptions = props.title.map(el => <li key={el + el}><button onClick={() => {
        sendBack(el)
    }}>{el}</button></li>)

    const [toggle, setToggle] = useState(false)

    const toggleList = () => {
        setToggle(!toggle)
    }

    return (
        <div>
            <div className="dropdown">
                
                <ul className="dropdown-list">
                <button onClick={toggleList}>Select your cipher</button>
                    {toggle ? renderOptions : ''}
                </ul>
            </div>
        </div>
    )
}
