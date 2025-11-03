import React, { useState } from 'react';

export default function Nav({ navigate }) {
  const [open, setOpen] = useState(false);
  const go = (p) => {
    setOpen(false);
    navigate(p);
  };

  return (
    <header className="site-header" style={{ position: 'relative', zIndex: 3 }}>
      <div className="container header-inner">
        <a
          className="brand"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            go('/');
          }}
        >
          Pavarga<span className="accent">2025</span>
        </a>

        <nav className={open ? 'nav nav-open' : 'nav'}>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              go('/');
            }}
          >
            Home
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              go('/events');
            }}
          >
            Events
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              go('/registration');
            }}
          >
            Register Here
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              go('/contact');
            }}
          >
            Contact
          </a>
        </nav>

        <div className="nav-controls">
          <button
            className="cta hide-mobile"
            onClick={() => go('/registration')}
          >
            Register Here
          </button>
          <button
            className="hamb"
            aria-label="menu"
            onClick={() => setOpen((v) => !v)}
          >
            <svg viewBox="0 0 24 24" width="22" height="22">
              <path
                d="M3 6h18M3 12h18M3 18h18"
                stroke="#cfe"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

