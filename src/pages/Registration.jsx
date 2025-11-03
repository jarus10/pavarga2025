import React, { useState, useEffect } from 'react';
import { GOOGLE_FORM_URL } from '../config';

export default function Registration() {
  const [msg, setMsg] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (GOOGLE_FORM_URL) {
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
        <h2>Individual Registration</h2>
        <p className="muted">
          Fill the form below. Submissions will go to your Google Form when configured.
        </p>

        <form className="form-card" id="participant-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label className="float-label">
              Full name
              <input name="name" type="text" required />
            </label>
            <label className="float-label">
              Email
              <input name="email" type="email" required />
            </label>
          </div>

          <div className="form-row">
            <label className="float-label">
              Phone
              <input name="phone" type="tel" pattern="[0-9]{10}" required />
            </label>
            <label className="float-label">
              College
              <input name="college" type="text" required />
            </label>
          </div>

          <div className="form-row">
            <label>Events (pick one)</label>
            <select name="event" required>
              <option value="">Choose an event</option>
              <option value="Hackathon">Hackathon</option>
              <option value="Debate">Debate</option>
              <option value="Music Night">Music Night</option>
              <option value="Dance Battle">Dance Battle</option>
              <option value="Quiz">Quiz</option>
            </select>
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
                alert('Draft saved locally');
              }}
            >
              Save draft
            </button>
            <button className="btn primary" type="submit">
              Submit
            </button>
          </div>

          <div className="small muted">{msg}</div>
        </form>
      </div>
    </section>
  );
}

