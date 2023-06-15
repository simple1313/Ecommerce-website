import React from 'react';
import { Link } from 'react-router-dom';
import myImage from '../logo/14promax1.png';
function First() {
  const containerStyle = {
    transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
    transformStyle: 'preserve-3d',
    position: 'relative',
    zIndex: 1,
    marginTop: '0px',
    paddingRight: '50px',
    paddingLeft: '50px',
    justifyContent: 'space-between',
    backgroundImage: 'none',
    backgroundSize: 'auto',
    backgroundRepeat: 'repeat',
    '@media screen and (max-width: 991px)': {
      // Styles for max-width: 991px
      padding: '20px',
      justifyContent: 'center',
    },
  };
    return (
    <div  >
      <div data-w-id="05902d51-8334-e93b-b6b0-0fac8eb72571"  className="cc_v2_header_bar_container" style={containerStyle}>
        <h3 className="v2_header_text">Introducing the NEW Iphone 14 pro max</h3>
        <Link  to='/details?pid=647c7a6d4c4d0bdc79f7ed03' className="button-main video-cta black w-button">Shop now</Link>
        <img src={myImage} alt="My Image" class="first-image" />
      </div>
      

    </div>
  );
}

export default First;
