//numberbuttons = all numbers and the clear

// - Create a `<NumberButton />` component that can accept `props` and display any 
// number/symbol passed down as `text`.
// - Example your component should be able to render a dynamic prop called text:
// - Your button should also be able to accept dynamic props `buttonStyle` 
//   for styling

// ```js
// <button className={props.buttonStyle}>{props.text}</button>
// ```

// - Create an `<ActionButton />` component that will be used for the `zero` character and the `clear` button.
// - Create a `<CalculatorDisplay />` component that will be used as the `calculator display`

import React from 'react';
import './Button.css';

const NumberButton = () => {
    return (
        //number buttons
        <div className='number-button'>
            <div className='clear'></div>
            <div className='non-zero'>
                <div className='non-zero-box'></div>
                <div className='non-zero-box'></div>
                <div className='non-zero-box'></div>
                <div className='non-zero-box'></div>
                <div className='non-zero-box'></div>
                <div className='non-zero-box'></div>
                <div className='non-zero-box'></div>
                <div className='non-zero-box'></div>
                <div className='non-zero-box'></div>
            </div>
            <div className='zero'></div>
        </div>

    );
};


export default NumberButton;



