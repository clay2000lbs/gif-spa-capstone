import React, {useEffect, useState} from 'react';
import axios from 'axios';
import CarouselDemo from './CarouselDemo';


function Profile() {

  // const [fav, setFav] = useState([])

  // useEffect(()=> {
  //   axios.get('http://localhost:4000/api/favs').then((res) => {
  //     console.log(res.data)
  //     setFav(res.data)
  //   })
  // },[]); 
  // console.log(fav)
  
  return (
    <div className="carouselContainer"> 
      <CarouselDemo />
    </div>
  );
}

export default Profile;
