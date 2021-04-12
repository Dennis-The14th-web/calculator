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
    let results = result + val;
    setResult( results );
    console.log(results);
  }

  const addZero = (val) => {
    if ( result !== "" ) {
      val = 0;
      setResult( result + val );
    }
  }

  const addDecimal = val => {
    if (result.indexOf(".") === -1) {
      val = ".";
      setResult( result + val)
    }
  }

  const clearResultIndex = () => {
    setResult( result.slice(0, -1));
  }

  const clearResult = () => {
    setResult( "" );
  }

  const sum = () => {
    setPrvNum( result );
    setCurrNum( result );
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
      let num1 = parseInt(prvNum);
      let num2 = parseInt(currNum);
      let results = num1 + num2;
      setResult( results );
      console.log("num1: ", num1);
      console.log("num2: ", num2);
      console.log( results );
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
    // setCurrNum( result );
  }

  return (
    <div className="App">
      <Header/>
      <Calculator
      addZero={addZero}
      addDecimal={addDecimal}
      clearResult={clearResult}
      clearIndex={clearResultIndex}
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
