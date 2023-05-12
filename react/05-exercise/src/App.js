import { useState } from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
import Timeline from './components/Timeline/Timeline';
import { Route, Routes } from 'react-router-dom';

// load the posts
// load the products
// load the users
// load the services

function App() {
  const [counter, setCounter] = useState(0)
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Timeline />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
      {counter}
      <button onClick={() => {
        setCounter((mostRecentValue) => mostRecentValue + 1) // safer
        setCounter(counter + 1)
      }}>Increase</button>
    </>
  );
}

export default App;
