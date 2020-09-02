import React, {useState} from 'react'
import Input from '../Input'
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

    //function to take in the value from the input
    const handleInput = (val) => {
        setInput([...val])
    }

    return (
        <div>
            <h1>Alphabetical Substitution</h1>
            <div className="row justify-content-md-center mt-5 mr-0 ml-0">
                <div className="col-sm">
                <Input handleInput={handleInput}/>
                </div>
                <div className="col-sm">
                <p>Plaintext Alphabet</p>
                <input placeholder={plaintextAlphabet.join("")} type="text" name="" id=""/>
            
                <p className="mt-3">Ciphertext Alphabet</p>
                <input placeholder={cipherAlphabet.join("")} type="text" name="" id=""/>
                    
                </div>
                <div className="col-sm">
                <Output val={toRender} />
                </div>

            </div>
            
            
            
           
        </div>
    )
}
