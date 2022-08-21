import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from './home';
import Service from './service';

export default function RouterPage() {
  return (
    <Router>
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/service" element={<Service />} />
      </Routes>
    </Router>
  )
}
