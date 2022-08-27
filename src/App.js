
import React from 'react';
import './App.css';
import Navbar from './components/exterior/navbar';
import Home from './pages/exterior/home';
import Service from './pages/exterior/service';
import About from './pages/exterior/about';
import Faq from './pages/exterior/faq';
import Footer from './components/exterior/footer';
import Contact from './pages/exterior/contact';

import RouterPage from './pages/exterior/RouterPage';
import IHealthAdminSidebar from './pages/interior/users_ihealth/admin/components/sidebar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Service />
      <About />
      <Faq />
      <Contact />
      <Footer />
      <RouterPage />
      <IHealthAdminSidebar/>
    </div>
  );
}

export default App;
