import React from 'react';
import { Countdown } from './components/countdown/countdown';
import './App.css';
import {ReactComponent as Time} from './time.svg';

function App() {
  return (
    <div className="App">
      <div className="glass">
        <Countdown/>
      </div>
      <div className='figure1'></div>
      <div className='figure2'></div>
      <Time/>
    </div>
  );
}

export default App;
