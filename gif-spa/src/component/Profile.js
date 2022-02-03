import React from 'react';
import CarouselDemo from './CarouselDemo';


function Profile() {

  return (
    <div>
      <container>
        <div>
          <h2>Favorite Searches</h2>
          <li>
            Dogs
          </li>
        </div>
      </container>
      <div className="carouselContainer"> 
        <CarouselDemo />
      </div>
    </div>
  );
}

export default Profile;
