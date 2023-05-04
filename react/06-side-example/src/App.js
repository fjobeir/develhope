import logo from './logo.svg';
import './App.css';
import Parent from './Parent';
import { useEffect, useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0)
  useEffect(() => {
    console.log('counter changed: ', counter)
  }, [counter])
  return (
    <>
    Counter Value is {counter}
    <Parent setCounter={setCounter} />
    </>
  );
}

export default App;
