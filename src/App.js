import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Calculator from './components/Calculator';
import Footer from './components/Footer';

function App() {

  const [result, setResult] = useState('');
  const [prvNum, setPrvNum] = useState('');
  const [operator, setOperator] = useState('');

  const addTo = val => {
    let results = result + val;
    setResult( results );
  }

  const addZero = (val) => {
    if ( result !== "" ) {
      val = 0;
      let display = result + val;
      setResult( display );
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
    setPrvNum( "" );
    setOperator( "" );
  }

  const sum = () => {
    setPrvNum( result  );
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

  const rmdr = () => {
    setPrvNum( result );
    setResult( "" );
    setOperator( "reminder" );
  };

  const evaluate = () => {
    if( operator === "plus" ) {
      setResult( parseInt(prvNum) + parseInt(result) );
    }
    else if( operator === "subtract" ) {
      setResult( parseInt(prvNum) - parseInt(result) );
    }
    else if( operator === "multiply" ) {
      setResult( parseInt(prvNum) * parseInt(result) );
    }
    else if( operator === "divide" ) {
      setResult( parseInt(prvNum) / parseInt(result) );
    }
    else if( operator === "reminder" ) {
      setResult( parseInt(prvNum) % parseInt(result) );
    }
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
      rmdr={rmdr}
      eval={evaluate}
      result={result}
      handleBtn={addTo}
      />
      <Footer/>
    </div>
  );
}

export default App;
