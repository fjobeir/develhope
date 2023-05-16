import { useContext, useState } from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
import Timeline from './components/Timeline/Timeline';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Signout from './components/Signout/Signout';
import { AuthContext } from './contexts/Auth';
import Notfound from './components/Notfound';

// load the posts
// load the products
// load the users
// load the services

function App() {

  const { token } = useContext(AuthContext)

  return (
    <>
      <Routes>
        {
          token && (
            <>
              <Route path='/' element={<Timeline />} />
              <Route path='/logout' element={<Signout />} />
              <Route path='/profile' element={<Profile />} />
            </>
          )
        }
        <Route path='/login' element={<Login />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
