import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

const CardContainer = () => {
    return (
        <div className='bottom-content'>
            <a href='https://www.reactjs.org' class='bottom-link'>
                <CardBanner />
                <CardContent />
            </a>
        </div>
    );
};

export default CardContainer;

