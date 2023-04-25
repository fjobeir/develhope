import logo from './logo.svg';
import './App.css';
import MyComponent from './components/MyComponent';

function App() {
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <label htmlFor="myname">Name</label>
          <input id='myname' />
        </header>
      </div>
      <MyComponent name="Sildi" country="Albania" />
      <MyComponent name="Onurcan" country="Turkey" />
    </div>
  );
}

export default App;
