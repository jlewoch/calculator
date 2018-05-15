import React from 'react';
import './Calculator.css';

const Calculator = ({ click, value }) => {


    return (
        <div className='buttonDisplay'>

            <input className='disp' readOnly='true' type='text' value={value}></input>


            <div className='dispSep'>
                <div className='topDisp'>
                    <button onClick={click} value='clear'>c</button>
                    <button onClick={click} value='/'>/</button>
                    <button onClick={click} value='multiply'>x</button>
                    <button onClick={click} value='-'>-</button>
                </div>

                <div className='numDisp'>

                    <button className='numBt' onClick={click} value='1'>1</button>
                    <button className='numBt' onClick={click} value='2'>2</button>
                    <button className='numBt' onClick={click} value='3'>3</button>
                    <button className='numBt' onClick={click} value='4'>4</button>
                    <button className='numBt' onClick={click} value='5'>5</button>
                    <button className='numBt' onClick={click} value='6'>6</button>
                    <button className='numBt' onClick={click} value='7'>7</button>
                    <button className='numBt' onClick={click} value='8'>8</button>
                    <button className='numBt' onClick={click} value='9'>9</button>
                </div>
                <div className='botDisp'>
                    <button className='longBt' onClick={click} value='0'>0</button>
                    <button onClick={click} value='.'>.</button>
                </div>
            </div>

            <div className='funcDisp'>
                <button className='tallBt' onClick={click} value='+'>+</button>
                <button className='tallBt' onClick={click} value='='>=</button>
            </div>
        </div>
    );
}

export default Calculator;