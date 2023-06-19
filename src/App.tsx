import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainPage from './pages/mainPage';
import MainPageJson from './pages/mainPageJson';
import { MainPageFinal } from './pages/mainPageFinal';
import { ServiceReader } from './component/serviceReader';
import { JsonReader } from './component/jsonReader';

function App() {
    const characterGetter = new ServiceReader(); // Create a new instance of ServiceReader  
    
  return (
    <div className="App">
      <header className="App-header">
        <MainPageFinal characterGetter={characterGetter} />
      </header>
    </div>
  );
}

export default App;
