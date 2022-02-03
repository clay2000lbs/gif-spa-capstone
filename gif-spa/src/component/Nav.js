import React from 'react';
// import spa from './spa.png';


function Nav() {
  return (
  <div className="nav">
    <h1>Gif_Spa</h1>
    {/* <img src={spa} alt="Spa Icon" /> */}
    <div className="sub-nav">
      <h3>Profile</h3>
      <h3>Login</h3>
      <h3>Sign Up</h3>
    </div>

  </div>
  );
}

export default Nav;
