//function
//Example
// import React from 'react';

// const Temperature = () => {
//     return (
//       <div className="temperature">
//         <p>76°F</p>
//       </div>
//     );
//   };
  
//   export default Temperature;

import React from 'react';
import './Header.css';


const HeaderTitle = function() {
    return (
        <div className='header-title'>
            <p>
                <strong>Lambda School:</strong> @LambdaSchool * 26 jan
            </p>
        </div>
    );
};


export default HeaderTitle;
