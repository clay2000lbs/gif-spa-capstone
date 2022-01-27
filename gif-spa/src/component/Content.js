import React from 'react';
import Gif from './Gifs'

//gif api, state, go here
import { Grid } from '@giphy/react-components'
import { GiphyFetch } from '@giphy/js-fetch-api'

// use @giphy/js-fetch-api to fetch gifs, instantiate with your api key
const gf = new GiphyFetch('igaRFIMGiLr2rgB8zvX69GQENnBC80VG')

// configure your fetch: fetch 10 gifs at a time as the user scrolls (offset is handled by the grid)
const fetchGifs = (offset: number) => gf.trending({ offset, limit: 10 })



function Content() {
  return (
  <div className="content">
      <container>
      <Grid width={800} columns={3} fetchGifs={fetchGifs} />, target
      </container>
  </div>
  );
}

export default Content;
