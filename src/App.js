import React, {useState} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Card from './comps/Card'
import Caesar from './comps/ciphers/Caesar'
import Vigenere from './comps/ciphers/Vigenere'
import AlphabeticalSubstitution from './comps/ciphers/AlphabeticalSubstitution'
import './App.css';

function App() {
  const [cardProps, setCardProps] = useState([{
    name: 'Caesar Cipher',
    description: 'Method in which each letter in the plaintext is replaced by a letter some fixed number of positions down the alphabet. The method is named after Julius Caesar, who used it in his private correspondence.'
  },{
    name: 'Vigenére Cipher',
    description: "Method of encrypting alphabetic text by using a series of interwoven Caesar ciphers based on the letters of a keyword. Though the 'chiffre indéchiffrable' is easy to understand and implement, for three centuries it resisted all attempts to break it."
  },{
    name: 'Alphabetical Substitution',
    description: 'A monoalphabetical substitution cipher uses a fixed substitution over the entire message. The ciphertext alphabet may be a shifted, reversed, mixed or deranged version of the plaintext alphabet.'
  }])
  const [display, setDisplay] = useState('Select Your Cipher')

  const goBack = () => {
    setDisplay('Select Your Cipher')
  }

  const clickHandler= (val) => {
    setDisplay(val)
  }

  const toRender = () => {
    if(display === 'Caesar Cipher'){
      return <Caesar/>
    }
    else if(display === 'Vigenére Cipher'){
      return <Vigenere/>
    }
    else if(display === 'Alphabetical Substitution'){
      return <AlphabeticalSubstitution/>
    }
    else{
        return (
          <div className="row justify-content-center mt-5 mr-0 ml-0">
            {cardProps.map(el => <Card className="col-sm" clickHandler={clickHandler} name={el.name} description={el.description}/>)}
          </div>
          
        )
      
    }
  }

  return (
    <div className="App">
     <h1 className="display-1 font-weight-bold font-size-6rem">Ciphers</h1>
      {toRender()}
      <div className="m-auto text-align-center">
        {display === 'Select Your Cipher' ? '' : <button className="mt-5" onClick={goBack}>Back</button>}
      
      </div>
    </div>
  );
}

export default App;
