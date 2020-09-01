import React, {useState} from 'react';
import Dropdown from './comps/Dropdown'
import Caesar from './comps/ciphers/Caesar'
import Vigenere from './comps/ciphers/Vigenere'
import AlphabeticalSubstitution from './comps/ciphers/AlphabeticalSubstitution'
import './App.css';

function App() {
  const [dropdownProps, setDropdownProps] = useState(['Caesar Cipher', 'Vigenere', 'Alphabetical Substitution'])
  const [display, setDisplay] = useState()

  const goBack = () => {
    setDisplay('Select Your Cipher')
  }

  const handleDataFromChild = (val) => {
    setDisplay(val)
  }

  const toRender = () => {
    if(display === 'Caesar Cipher'){
      return <Caesar/>
    }
    else if(display === 'Vigenere'){
      return <Vigenere/>
    }
    else if(display === 'Alphabetical Substitution'){
      return <AlphabeticalSubstitution/>
    }
    else{
      return (
        <div>
          
          <Dropdown handleDisplay={handleDataFromChild} title={dropdownProps}/>
          
        </div>
      )
    }
  }

  return (
    <div className="App">
     <button onClick={goBack}>Back</button>
      {toRender()}
    </div>
  );
}

export default App;
