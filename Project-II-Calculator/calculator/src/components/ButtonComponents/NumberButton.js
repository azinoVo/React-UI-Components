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
            <button className='clear'><p>Clear</p></button>
            <div className='non-zero'>
                <button className='non-zero-box'><p>1</p></button>
                <button className='non-zero-box'><p>2</p></button>
                <button className='non-zero-box'><p>3</p></button>
                <button className='non-zero-box'><p>4</p></button>
                <button className='non-zero-box'><p>5</p></button>
                <button className='non-zero-box'><p>6</p></button>
                <button className='non-zero-box'><p>7</p></button>
                <button className='non-zero-box'><p>8</p></button>
                <button className='non-zero-box'><p>9</p></button>
                {/* <div className='non-zero-box'><p>{props.text}</p></div>
                <div className='non-zero-box'><p>{props.text}</p></div>
                <div className='non-zero-box'><p>{props.text}</p></div>
                <div className='non-zero-box'><p>{props.text}</p></div>
                <div className='non-zero-box'><p>{props.text}</p></div>
                <div className='non-zero-box'><p>{props.text}</p></div>
                <div className='non-zero-box'><p>{props.text}</p></div>
                <div className='non-zero-box'><p>{props.text}</p></div> */}
            </div>
            <button className='zero'><p>0</p></button>
        </div>

    );
};


export default NumberButton;



