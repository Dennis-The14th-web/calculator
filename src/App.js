import React, { useState } from 'react';
import './App.css';
// import Header from './components/Header';
import Calculator from './components/Calculator';
// import Input from './components/Input';

function App() {

  const [result, setResult] = useState('');
  const [prvNum, setPrvNum] = useState('');
  const [currNum, setCurrNum] = useState('');
  const [operator, setOperator] = useState('');

  const handleChange = e => {
    setResult( e.target.value );
  }

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
      let results =  parseInt(prvNum) + parseInt(currNum);
      setResult( results );
      console.log( results );
      return result;
    }
    else if( operator === "subtract" ) {
      let results =  parseInt(prvNum) - parseInt(currNum);
      setResult( results );
      console.log( results );
      return result;
    }
    else if( operator === "multiply" ) {
      let results =  parseInt(prvNum) * parseInt(currNum);
      setResult( results );
      console.log( results );
      return result;
    }
    else if( operator === "divide" ) {
      let results =  parseInt(prvNum) / parseInt(currNum);
      setResult( results );
      console.log( results );
      return result;
    }
  }

  return (
    <div className="App">
      <Calculator
      handleChange={handleChange}
      sum={sum}
      sub={sub}
      multi={multi}
      div={div}
      eval={evaluate}
      result={result}
      handleBtn={addTo}
      />
    </div>
  );
}

export default App;
