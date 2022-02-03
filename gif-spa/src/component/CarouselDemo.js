import React from 'react';
import {Carousel} from "@giphy/react-components";
import { GiphyFetch } from '@giphy/js-fetch-api';

const gf = new GiphyFetch('igaRFIMGiLr2rgB8zvX69GQENnBC80VG')

function CarouselDemo(props) {

  const searchTerm = props.favstring


    const fetchGifs = (offset: number) =>
      gf.search('dogs', { offset, limit: 6 });
    return <Carousel fetchGifs={fetchGifs} gifHeight={300} gutter={5} />;
  } 
 

export default CarouselDemo;
