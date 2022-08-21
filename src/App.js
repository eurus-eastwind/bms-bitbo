
import React from 'react';
import './App.css';
import Navbar from './components/exterior/navbar';
import Home from './pages/exterior/home';
import Service from './pages/exterior/service';
import RouterPage from './pages/exterior/RouterPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Service />
      {/* <RouterPage/> */}
    </div>
  );
}

export default App;
