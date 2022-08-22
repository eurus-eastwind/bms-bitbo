import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import LoginAdmin from '../exterior/login/admin';

export default function RouterPage() {
  return (
    <Router>
      <Routes>
        <Route path="/LoginAdmin" element={<LoginAdmin />} />
      </Routes>
    </Router>
  )
}
