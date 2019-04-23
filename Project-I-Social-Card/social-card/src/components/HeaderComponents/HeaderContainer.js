//Example Header
// import React from 'react';
// import WeatherIcon from './WeatherIcon';
// import Location from './Location';
// import Temperature from './Temperature';
// import Date from './Date';
// import './card.scss';

// const CardContainer = () => {
//   return (
//     <div className="card-container">
//       <WeatherIcon />
//       <Location />
//       <Temperature />
//       <Date />
//     </div>
//   );
// };

// export default CardContainer;

import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';
import HeaderTitle from './HeaderTitle';
import ImageThumbnail from './ImageThumbnail';

const HeaderContainer = () => {
    return (
        <div className='header-container'>
            <ImageThumbnail />
            <HeaderTitle />
            <HeaderContent />
        </div>

    );
};

export default HeaderContainer;







