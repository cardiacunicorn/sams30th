import React from 'react';
import logo from './sambo.png';
import house from './house-sideview.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <title>Sam's 30th</title>
      <link href="https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap" rel="stylesheet"></link>
      <header className="grid-container">
        <div class="grid-item item1"><img src={logo} className="App-logo sam" alt="logo" /></div>
        <div class="grid-item item2"><h1>Sam's 30th Birthday House Party!</h1></div>
        <div class="grid-item item3"><img src={logo} className="App-logo sam" alt="logo" /></div>
      </header>
      <body className="App-body">
        <div className="housegrid">
          <a href="https://zoom.com">
          <div class="grid-item houseitem1">click me</div></a>
          <div class="grid-item houseitem2"></div>
          <div class="grid-item houseitem3"></div>
        </div>
      </body>
    </div>
  );
}

export default App;
