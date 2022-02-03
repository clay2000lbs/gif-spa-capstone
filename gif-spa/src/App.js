import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import Home from './component/Home.js';
import {Route, Routes} from 'react-router';
import Profile from './component/Profile.js';
import SignUp from './component/SignUp';
import Login from './component/Login';


function App() {

  const [fav, setFav] = useState([])

  useEffect(() => {
    axios.get('http://localhost:4000/api/favs').then((res) => {
      console.log(res.data)
      setFav(res.data)
    })
  },[]); 
  console.log(fav)

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile props={fav} />} />
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  )
}

export default App;
