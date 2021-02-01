import React from 'react';
import { Countdown } from './components/countdown/countdown';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="glass">
        <Countdown/>
      </div>
      <div className='figure1'></div>
      <div className='figure2'></div>
    </div>
  );
}

export default App;
