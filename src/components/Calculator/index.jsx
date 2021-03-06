import React from 'react';
import '../Calculator/index.css';

function Calculator (props){

    return (
        <div className="d-flex justify-content-center">
            <div className="calc-wrapper">
            <div className="row">
            <div className="result">{props.result}</div>
            </div>
            <div className="row">
            <button className="btn btnNum style" onClick={props.clearIndex} name="Clear">AC</button>
            <button className="btn  btnNum style" onClick={props.clearResult} name="Clear">C</button>
            <button className="btn  btnNum style" onClick={props.rmdr} name="Clear">%</button>
            <button className="btn  btnNum operator" onClick={props.div} name="/">÷</button>
            </div>
            <div className="row">
            <button className="btn  btnNum" onClick={e=>props.handleBtn(e.target.name)} name="7">7</button>
            <button className="btn  btnNum" onClick={e=>props.handleBtn(e.target.name)} name="8">8</button>
            <button className="btn  btnNum" onClick={e=>props.handleBtn(e.target.name)} name="9">9</button>
            <button className="btn  btnNum operator" onClick={props.multi} name="x">x</button>
            </div>
            <div className="row">
            <button className="btn  btnNum" onClick={e=>props.handleBtn(e.target.name)} name="4">4</button>
            <button className="btn  btnNum" onClick={e=>props.handleBtn(e.target.name)} name="5">5</button>
            <button className="btn  btnNum" onClick={e=>props.handleBtn(e.target.name)} name="6">6</button>
            <button className="btn  btnNum operator" onClick={props.sum} name="+">+</button>
            </div>
            <div className="row">
            <button className="btn  btnNum" onClick={e=>props.handleBtn(e.target.name)} name="1">1</button>
            <button className="btn  btnNum" onClick={e=>props.handleBtn(e.target.name)} name="2">2</button>
            <button className="btn  btnNum" onClick={e=>props.handleBtn(e.target.name)} name="3">3</button>
            <button className="btn  btnNum operator" onClick={props.sub} name="-">-</button>
            </div>
            <div className="row">
            <button className="btn  btnNum" id="clear-btn" onClick={props.addZero} name="0">0</button>
            <button className="btn  btnNum" onClick={props.addDecimal} name=".">.</button>
            <button className="btn  btnNum operator" onClick={e=>props.eval(e)} name="=">=</button>
            </div>
            </div>
        </div>
    )
}

export default Calculator;


