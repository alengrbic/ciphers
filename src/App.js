import React, {useState} from 'react';
import Card from './comps/Card'
import Caesar from './comps/ciphers/Caesar'
import Vigenere from './comps/ciphers/Vigenere'
import AlphabeticalSubstitution from './comps/ciphers/AlphabeticalSubstitution'
import './App.css';

function App() {
  const [cardProps, setCardProps] = useState([{
    name: 'Caesar Cipher',
    description: 'Shifts letter by 3 spots (a -> d)'
  },{
    name: 'Vigenere Cipher',
    description: 'Shifts letter by 3 spots (a -> d)'
  },{
    name: 'Alphabetical Substitution',
    description: 'Shifts letter by 3 spots (a -> d)'
  }])
  const [display, setDisplay] = useState()

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
    else if(display === 'Vigenere Cipher'){
      return <Vigenere/>
    }
    else if(display === 'Alphabetical Substitution'){
      return <AlphabeticalSubstitution/>
    }
    else{
        return (
          <div>
            {cardProps.map(el => <Card clickHandler={clickHandler} name={el.name} description={el.description}/>)}
          </div>
          
        )
      
    }
  }

  return (
    <div className="App">
     <button onClick={goBack}>Back</button>
      {toRender()}
      <div>
        
      </div>
    </div>
  );
}

export default App;
