import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="navbar-inner">
        {/* Brand / Logo */}
        <Link className="brand" to="/" onClick={closeMenu}>
          Pavarga<span className="accent">2025</span>
        </Link>

        {/* Mobile Menu Toggle (Hamburger) */}
        <button
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* Navigation Links */}
        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/events" onClick={closeMenu}>Events</Link>
          <Link to="/register" onClick={closeMenu}>Register</Link>
          <Link to="/contact" onClick={closeMenu}>Contact</Link>
        </nav>
      </div>
    </header>
  );
}
