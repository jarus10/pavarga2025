import React from 'react'
import logo from '../assets/logo.svg'

export default function Home({ navigate }){
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-left">
          <img src={logo} alt="Pavarga 2025" className="logo"/>
          <h1 className="hero-title">PAVARGA 2025</h1>
          <p className="lead">A National Inter-Collegiate Fest<br/>Hosted by KLE Society's S. Nijalingappa College</p>
          <div className="hero-actions">
            <button className="btn primary" onClick={()=>navigate('/events')}>See Events</button>
            <button className="btn ghost" onClick={()=>navigate('/registration')}>Register Here</button>
          </div>
        </div>
        <div className="hero-right">
          <div className="event-summary">
            <h3>Featured</h3>
            <p className="muted">30+ events across technical, cultural, and sports categories.</p>
            <ul className="summary-list">
              <li>Hackathon • Sept 23</li>
              <li>Debate • Sept 24</li>
              <li>Music Night • Sept 25</li>
            </ul>
            <a className="small-link" href="#" onClick={(e)=>{e.preventDefault(); navigate('/events')}}>View all events</a>
          </div>
        </div>
      </div>
    </section>
  )
}

