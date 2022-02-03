import React from 'react';
import spa from './spa.png';


function Nav() {
  return (
  <div className="nav">
    <h1>Gif_Spa</h1>
    <img src={spa} alt="Spa Icon" />
    <div className="sub-nav">
        <a href>Profile</a>
    </div>

  </div>
  );
}

export default Nav;
