import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import './App.css'
import Header from './components/header'
import Intro from './components/intro'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Intro />
      </BrowserRouter>
    </div>
  );
}

export default App