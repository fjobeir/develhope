import { useState } from 'react';
import './App.css';
import Post from './components/Post';

function App() {
  const [showPost, setShowPost] = useState(true);
  const [by, setBy] = useState('Feras')
  const togglePost = () => {
    setShowPost(!showPost)
    setBy(by + ' a')
  }
  return (
    <>
      {showPost && <Post by={by} />}
      <button onClick={togglePost}>Toggle Post</button>
    </>
  )
}

export default App;
