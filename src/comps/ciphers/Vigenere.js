import React, {useState} from 'react'
import Input from '../Input'
import Output from '../Output'

export default function Vigenere() {
    //vigenere is moving to the right
    const [input, setInput] = useState([])
    const [cipherKey, setCipherKey] = useState('vig')
    const ENGLISH = "abcdefghijklmnopqrstuvwxyz".split("");

    //make the keytext
    const keyText = () => {
        let password = ''
        let count = 0
        for(let i = 0; i < input.length; i++){
            if(input[i] === " "){
                password += " "
                if(count >= cipherKey.length){
                    count = 0
                }
            }
            else {
                password += cipherKey[count]
                count++
                if(count >= cipherKey.length){
                    count = 0
                }
            }
            
            
        }
        return password
    }

    const password = keyText()

    const toRender = input.map((el, idx) => {
        if(el === " "){
            return " "
        }
        else if((el.charCodeAt() - 97) + (password[idx].charCodeAt() - 97) > 26){
            
            //calculate the difference from 26 to the letter
            let negIndex =(el.charCodeAt() - 97) + (password[idx].charCodeAt() - 97) - 26
            //subtract that difference from the value to add
            //add value from zero
            return ENGLISH[negIndex]
        }
        else{
            return ENGLISH[(el.charCodeAt() - 97) + (password[idx].charCodeAt() - 97)]
        }
        
    })

        //function to take in the value from the input
        const handleInput = (val) => {
            setInput([...val])
        }

    

    return (
        <div>
            <h1>Vigenere Cipher</h1>
            <Input handleInput={handleInput}/>
            <p>Key:</p>
            <input onChange={(e) => {
                setCipherKey(e.target.value)
            }} onBlur={keyText} placeholder={cipherKey} type="text" name="" id=""/>
            

            <Output val={toRender} />
        </div>
    )
}



//  string : a - 0
//           b - 1
//           z

// we need to subtract 0 - 1 = -1 === letter number 25
// we need to make an -1 and add lenght of the alphabet which is 26


