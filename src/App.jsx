import React, { useState } from 'react';
import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Events from './pages/Events.jsx';
import Registration from './pages/Registration.jsx';
import Team from './pages/Team.jsx';
import Contact from './pages/Contact.jsx';

export default function App() {
  const [route, setRoute] = useState(window.location.pathname || '/');

  window.onpopstate = () => setRoute(window.location.pathname);

  const navigate = (path) => {
    window.history.pushState({}, '', path);
    setRoute(path);
    window.scrollTo(0, 0);
  };

  return (
    <div className="app">
      <Nav navigate={navigate} />
      <main style={{ position: 'relative', zIndex: 2 }}>
        {route === '/' && <Home navigate={navigate} />}
        {route === '/events' && <Events navigate={navigate} />}
        {route === '/registration' && <Registration />}
        {route === '/team-registration' && <Team />}
        {route === '/contact' && <Contact />}
      </main>
      <Footer />
    </div>
  );
}

