import React, { useState, useEffect } from 'react';
import { GOOGLE_FORM_URL } from '../config';

export default function Registration() {
  const [msg, setMsg] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (GOOGLE_FORM_URL && GOOGLE_FORM_URL !== 'file_here') {
      window.open(GOOGLE_FORM_URL, '_blank');
      setMsg('Opening Google Form...');
      return;
    }

    const data = Object.fromEntries(new FormData(e.target).entries());
    localStorage.setItem('participant-draft', JSON.stringify(data));
    setMsg('No Google Form configured. Draft saved locally.');
  };

  return (
    <section className="form-hero neon-section">
      <div className="container">
        <h2 className="section-title">Register for PAVARGA 2025</h2>
        <p className="muted">
          Fill the form below. Your submission will be sent to the Google Form (when configured).
        </p>

        <form className="form-card" id="participant-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label className="float-label">
              Full Name
              <input name="name" type="text" placeholder="Your full name" required />
            </label>

            <label className="float-label">
              Email
              <input name="email" type="email" placeholder="example@email.com" required />
            </label>
          </div>

          <div className="form-row">
            <label className="float-label">
              Phone
              <input
                name="phone"
                type="tel"
                pattern="[0-9]{10}"
                placeholder="10-digit number"
                required
              />
            </label>

            <label className="float-label">
              College
              <input name="college" type="text" placeholder="Your college name" required />
            </label>
          </div>

          <div className="form-row">
            <label className="float-label">
              Choose Event
              <select name="event" required>
                <option value="">Select an event</option>
                <option value="Hackathon">Hackathon</option>
                <option value="Debate">Debate</option>
                <option value="Music Night">Music Night</option>
                <option value="Dance Battle">Dance Battle</option>
                <option value="Quiz">Quiz</option>
              </select>
            </label>
          </div>

          <div className="form-actions">
            <button
              className="btn ghost"
              type="button"
              onClick={() => {
                const data = Object.fromEntries(
                  new FormData(document.getElementById('participant-form')).entries()
                );
                localStorage.setItem('participant-draft', JSON.stringify(data));
                alert('✅ Draft saved locally!');
              }}
            >
              Save Draft
            </button>

            <button className="btn primary" type="submit">
              Submit
            </button>
          </div>

          {msg && <div className="small muted status-text">{msg}</div>}
        </form>
      </div>
    </section>
  );
}
