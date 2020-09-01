import React, {useState} from 'react'
import Output from '../Output'

export default function AlphabeticalSubstitution() {
    //make a dictionary using a map
    //output the value of the key letter
    const ENGLISH = "abcdefghijklmnopqrstuvwxyz".split("");
    const CIPHERALPHABET = 'zyxwvutsrqponmlkjihgfedcba'.split("")
    const [plaintextAlphabet, setPlaintextAlphabet] = useState(ENGLISH)
    const [cipherAlphabet, setCipherAlphabet] = useState(CIPHERALPHABET)

    const [input, setInput] = useState([])

    const toRender = input.map((el, idx) => {
        if(el === " "){
            return " "
        }
        else{
            return cipherAlphabet[plaintextAlphabet.indexOf(el)]
        }
        
    })

    return (
        <div>
            <h1>Alphabetical Substitution</h1>
            <p>Plaintext Alphabet</p>
            <input placeholder={plaintextAlphabet.join("")} type="text" name="" id=""/>
            <p>Ciphertext Alphabet</p>
            <input placeholder={cipherAlphabet.join("")} type="text" name="" id=""/>
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
