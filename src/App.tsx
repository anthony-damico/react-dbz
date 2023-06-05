import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainPage from './pages/mainPage';
import MainPageJson from './pages/mainPageJson';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MainPageJson />
      </header>
    </div>
  );
}

export default App;
