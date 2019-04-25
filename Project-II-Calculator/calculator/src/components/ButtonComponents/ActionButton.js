// actionbuttons = all operators

import React from 'react';
import './Button.css';

const ActionButton = props => {
    return (
        //actionbutton buttons
        /* <div className='action-button'>
            <button className='operator'><p>÷</p></button>
            <button className='operator'><p>x</p></button>
            <button className='operator'><p>-</p></button>
            <button className='operator'><p>+</p></button>
            <button className='operator'><p>=</p></button>
        </div> */

        //using props
           <button className={props.buttonOperator}><p>{props.buttonSign}</p></button>
    );
};

export default ActionButton;
