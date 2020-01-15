import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Pdf from './Pdf.js';

function App() {
  return (
    <div className="App">
      <div>
        <h1 style={{marginTop: '40px'}}>我是头部</h1>
      </div>
      {/* <header className="App-header">
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
      </header> */}
     <div>
       <Pdf></Pdf>
     </div>
    </div>
  );
}

export default App;
