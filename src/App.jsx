import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav.jsx";
import Home from "./pages/Home.jsx";
import Events from "./pages/Events.jsx";
import Register from "./pages/Register.jsx";
import Contact from "./pages/Contact.jsx";
import "./styles.css";

function App() {
  return (
    <Router>
      <Nav />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <footer className="footer">
        © {new Date().getFullYear()} Pavarga 2025 — All rights reserved.
      </footer>
    </Router>
  );
}

export default App;
