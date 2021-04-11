import React, { useState } from 'react';
import './App.css';
// import Header from './components/Header';
import Calculator from './components/Calculator';
// import Input from './components/Input';

function App() {

  const [input, setInput] = useState('');

  const addTo = val => {
    // if(val === "="){
    //   calc();
    // }
    setInput( input + val )
    console.log(input);
  }

  // const calc = () => {
  //   setInput(eval(input));
  // }

  return (
    <div className="App">
      {/* <Header/> */}
      {/* <Input input={input}/> */}
      <Calculator
      input={input}
      handleBtn={addTo}
      />
    </div>
  );
}

export default App;
