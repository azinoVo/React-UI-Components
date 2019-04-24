// Similar to HogwartsStudents
import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';

const App = () => {
  return (
    <div className='calculator'>

          <div className='top-display'>
            <CalculatorDisplay/>
          </div>

          <div className='bottom-display'>
            {/* <NumberButton /> */}
            <div className='number-button'>
              <NumberButton buttonType='clear' buttonText='Clear' />
              <div className='non-zero'>
                <NumberButton buttonType='non-zero-box' buttonText='7' />
                <NumberButton buttonType='non-zero-box' buttonText='8' />
                <NumberButton buttonType='non-zero-box' buttonText='9' />
                <NumberButton buttonType='non-zero-box' buttonText='4' />
                <NumberButton buttonType='non-zero-box' buttonText='5' />
                <NumberButton buttonType='non-zero-box' buttonText='6' />
                <NumberButton buttonType='non-zero-box' buttonText='1' />
                <NumberButton buttonType='non-zero-box' buttonText='2' />
                <NumberButton buttonType='non-zero-box' buttonText='3' />
                <NumberButton buttonType='non-zero-box' buttonText='10' />
                <NumberButton buttonType='non-zero-box' buttonText='11' />
                <NumberButton buttonType='non-zero-box' buttonText='12' />

              </div>
              <NumberButton buttonType='zero' buttonText='0' />
            </div>

            <div className='action-button'>
              <ActionButton buttonOperator='operator' buttonSign='÷' />
              <ActionButton buttonOperator='operator' buttonSign='x' />
              <ActionButton buttonOperator='operator' buttonSign='-' />
              <ActionButton buttonOperator='operator' buttonSign='+' />
              <ActionButton buttonOperator='operator' buttonSign='=' />
              <ActionButton buttonOperator='operator' buttonSign='^' />
            </div>
            {/* <ActionButton /> */}
          </div>
          
    </div>
  );
};

export default App;
