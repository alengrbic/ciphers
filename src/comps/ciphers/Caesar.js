import React, {useState} from 'react'
import Input from '../Input'
import Output from '../Output'

export default function Caesar() {

    const [input, setInput] = useState([])
    
    const ENGLISH = "abcdefghijklmnopqrstuvwxyz".split("");

    //keep track of the key

    //add second alphabet that will be used as a map to the plain text

    //increment input value by key index in the map alphabet
    
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

        //function to take in the value from the input
    const handleInput = (val) => {
        setInput([...val])
    }
    

    return (
        <div>
            <h1>Caesar Cipher</h1>
            <div className="row justify-content-md-center mt-5 mr-0 ml-0">
                <div className="col-sm">
                <Input handleInput={handleInput}/>
                </div>
                <div className="col-sm">
                <Output val={toRender} />
                </div>
                
            </div>
            
            
            

            
        </div>
    )
}
