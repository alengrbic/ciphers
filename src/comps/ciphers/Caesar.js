import React, {useState} from 'react'
import Output from '../Output'

export default function Caesar() {

    const [input, setInput] = useState([])
    
    const ENGLISH = "abcdefghijklmnopqrstuvwxyz".split("");
    
    const toRender = input.map(el => {
        if(el === " "){
            return " "
        }
        else if(el.charCodeAt() - 100 < 23 && el.charCodeAt() - 94 <= 25){
            return ENGLISH[el.charCodeAt() - 94]
        }
        else if(el === 'z'){
            return ENGLISH[2]
        }
        else if(el === 'y'){
            return ENGLISH[1]
        }
        else if(el === 'x'){
            return ENGLISH[0]
        }
        else{
            return null
        }
        })
    

    return (
        <div>
            <h1>Caesar Cipher</h1>
            <p>Enter text to encode:</p>
            <input onChange={(e) => {
                setInput([...e.target.value])
            }} type="text" name="" id=""/>
            <h1>Plaintext:</h1>
            <h2>{input}</h2>
            

            <Output val={toRender} />
        </div>
    )
}