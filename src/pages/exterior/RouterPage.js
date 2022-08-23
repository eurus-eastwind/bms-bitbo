import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import LoginAdmin from '../exterior/login/admin';
import LoginPurokLeader from './login/purokleader';
import LoginResident from './login/resident';

export default function RouterPage() {
  return (
    <Router>
      <Routes>
        <Route path="/LoginAdmin" element={<LoginAdmin />} />
        <Route path="/LoginResident" element={<LoginResident />} />
        <Route path="/LoginPurokLeader" element={<LoginPurokLeader />} />
      </Routes>
    </Router>
  )
}
