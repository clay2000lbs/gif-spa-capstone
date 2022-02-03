import React from 'react';
import Content from './Content';
import Nav from './Nav'
import Search from './Search'

function Home() {
  return (
       <div>
           <Nav />
           <Search />
           <Content />
       </div>
       );
      
}

export default Home;
