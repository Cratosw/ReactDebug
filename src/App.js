import * as React from 'react';
import * as ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

function App() {
  debugger
  const [count, setCount] = React.useState(0)
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          {count}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
