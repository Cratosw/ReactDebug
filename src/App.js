import * as React from 'react';
import * as ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = React.useState(0)
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          {count}
        </p>
        <button onClick={()=>{setCount(()=>count+1)}}>加1</button>
      </header>
    </div>
  );
}

export default App;
