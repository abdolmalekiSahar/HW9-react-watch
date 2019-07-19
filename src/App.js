import React from 'react';
// import clock from './Clock';
import './App.css';

function App() {
  return (
    <div className="App">
      <div id="clock"><span>22</span>:<span>06</span>:<span>23</span></div>
      
      <div id="controller">
        <button>12/24</button>
        <button>StopWatch</button>
        <button>Timer</button>
      </div>
      
      
    </div>
  );
}

export default App;
