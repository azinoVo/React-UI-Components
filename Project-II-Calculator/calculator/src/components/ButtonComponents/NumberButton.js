//numberbuttons = all numbers and the clear

// - Create a `<NumberButton />` component that can accept `props` and display any 
// number/symbol passed down as `text`.
// - Example your component should be able to render a dynamic prop called text:
// - Your button button should also be able to accept dynamic props `buttonStyle` 
//   for styling

import React from 'react';
import './Button.css';

const NumberButton = () => {
    return (
        //number buttons
        <div className='number-button'>
            <div className='clear'></div>
            <div className='non-zero'>
                
            </div>
            <div className='zero'></div>
        </div>

    );
};


export default NumberButton;



