// Similar to HogwartsStudents
import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';

const App = () => {
  return (
    <div className='calculator'>
          <div className='top-display'><CalculatorDisplay/></div>
          <div className='bottom-display'>
            <NumberButton />
            <ActionButton />
          </div>
    </div>
  );
};

export default App;
