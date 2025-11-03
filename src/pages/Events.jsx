import React from 'react'
import { PER_EVENT_FORM } from '../config'

const EVENTS = [
  { slug: 'hackathon', title: 'Hackathon', date: 'Sept 23', short: '24-hour coding sprint to build innovative solutions.' },
  { slug: 'debate', title: 'Debate', date: 'Sept 24', short: 'Inter-college debate competition.' },
  { slug: 'music', title: 'Music Night', date: 'Sept 25', short: 'Bands and solo performances.' },
  { slug: 'dance', title: 'Dance Battle', date: 'Sept 25', short: 'Solo & group dance competitions.' },
  { slug: 'quiz', title: 'Quiz', date: 'Sept 24', short: 'General knowledge & tech quiz.' }
]

export default function Events({ navigate }){
  return (
    <section className="events-section container">
      <h2 className="section-title">Events</h2>
      <div className="events-grid">
        {EVENTS.map(e=> (
          <article key={e.slug} className="event-card">
            <div className="event-card-head">
              <h3>{e.title}</h3>
              <div className="event-date">{e.date}</div>
            </div>
            <p className="muted">{e.short}</p>
            <div className="event-actions">
              <button className="btn ghost" onClick={()=>{ alert(e.title + '\\\
\\\
' + e.short + '\\\
\\\
Date: ' + e.date) }}>View Details</button>
              <button className="btn primary" onClick={()=>{ const url = PER_EVENT_FORM[e.slug]; if(url && url!=='file_here'){ window.open(url,'_blank'); return } navigate('/registration') }}>Register Here</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

