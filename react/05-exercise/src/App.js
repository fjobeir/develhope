import { useState } from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
import Timeline from './components/Timeline/Timeline';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';

// load the posts
// load the products
// load the users
// load the services

function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Timeline />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
