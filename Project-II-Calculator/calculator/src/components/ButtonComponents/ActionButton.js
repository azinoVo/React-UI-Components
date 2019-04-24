// actionbuttons = all operators

import React from 'react';
import './Button.css';

const ActionButton = () => {
    return (
        //actionbutton buttons
        <div className='action-button'>
            <button className='operator'><p>÷</p></button>
            <button className='operator'><p>X</p></button>
            <button className='operator'><p>-</p></button>
            <button className='operator'><p>+</p></button>
            <button className='operator'><p>=</p></button>
        </div>

    );
};

export default ActionButton;
