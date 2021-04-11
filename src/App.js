import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Calculator from './components/Calculator';
import Footer from './components/Footer';

function App() {

  const [result, setResult] = useState('');
  const [prvNum, setPrvNum] = useState('');
  const [currNum, setCurrNum] = useState('');
  const [operator, setOperator] = useState('');

  const addTo = val => {
    setResult( result + val );
  }

  const sum = () => {
    setPrvNum( result );
    setResult( "" );
    setOperator( "plus" );
  };

  const sub = () => {
    setPrvNum( result );
    setResult( "" );
    setOperator( "subtract" );
  };

  const multi = () => {
    setPrvNum( result );
    setResult( "" );
    setOperator( "multiply" );
  };

  const div = () => {
    setPrvNum( result );
    setResult( "" );
    setOperator( "divide" );
  };

  const evaluate = () => {
    setCurrNum( result );
    if( operator === "plus" ) {
      setResult( parseInt(prvNum) + parseInt(currNum) );
    }
    else if( operator === "subtract" ) {
      setResult( parseInt(prvNum) - parseInt(currNum) );
    }
    else if( operator === "multiply" ) {
      setResult( parseInt(prvNum) * parseInt(currNum) );
    }
    else if( operator === "divide" ) {
      setResult( parseInt(prvNum) / parseInt(currNum) );
    }
  }

  return (
    <div className="App">
      <Header/>
      <Calculator
      sum={sum}
      sub={sub}
      multi={multi}
      div={div}
      eval={evaluate}
      result={result}
      handleBtn={addTo}
      />
      <Footer/>
    </div>
  );
}

export default App;
