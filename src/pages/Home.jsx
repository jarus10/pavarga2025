import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const featuredEvents = [
    { name: "War of Glory", desc: "BGMI Mobile Tournament — ₹9000 in prizes" },
    { name: "Escape Enclave", desc: "Team Puzzle Challenge — Think & Escape!" },
    { name: "Dance-a-Thon", desc: "Group Dance — Fusion Theme Performance" },
  ];

  return (
    <main className="home-page">
      {/* =========================
          HERO SECTION
      ========================== */}
      <section className="hero">
        <div className="hero-grid">
          <div className="hero-left">
            <h1 className="hero-title">PAVARGA 2025</h1>
            <p className="lead">
              A National Inter-Collegiate Fest hosted by{" "}
              <strong>KLE Society’s S. Nijalingappa College</strong>
            </p>

            <div className="hero-actions">
              <button className="btn primary" onClick={() => navigate("/events")}>
                Explore Events
              </button>
              <button className="btn ghost" onClick={() => navigate("/register")}>
                Register Now
              </button>
            </div>
          </div>

          <div className="hero-right">
            <div className="event-summary">
              <h3>Festival Highlights</h3>
              <p className="muted">Events across Tech, Culture & Sports.</p>
              <ul className="summary-list">
                {featuredEvents.map((item, index) => (
                  <li key={index}>
                    <strong>{item.name}</strong> — {item.desc}
                  </li>
                ))}
              </ul>
              <a
                className="small-link"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/events");
                }}
              >
                View All Events →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          FEATURE PREVIEWS
      ========================== */}
      <section className="preview-sections">
        <div className="preview-card" onClick={() => navigate("/events")}>
          <h4>🎯 Explore Events</h4>
          <p>
            Dive into exciting competitions including War of Glory, Clever Chef,
            Escape Enclave, and more.
          </p>
        </div>

        <div className="preview-card" onClick={() => navigate("/register")}>
          <h4>📝 Registration</h4>
          <p>
            Register easily for your favorite events — quick online submission.
          </p>
        </div>

        <div className="preview-card" onClick={() => navigate("/contact")}>
          <h4>📞 Contact Us</h4>
          <p>
            Have questions? Reach out to our student coordinators for help or
            event details.
          </p>
        </div>
      </section>

      {/* =========================
          GENERAL GUIDELINES PREVIEW
      ========================== */}
      <section className="guidelines-preview">
        <h2>General Guidelines</h2>
        <ul>
          <li>All participants must carry their college ID card.</li>
          <li>Report at least 30 minutes before your event.</li>
          <li>Follow event-specific rules shared by coordinators.</li>
          <li>Respect campus property and maintain decorum.</li>
          <li>Organizers’ decisions are final and binding.</li>
        </ul>
        <button className="btn ghost" onClick={() => navigate("/register")}>
          Read More & Register →
        </button>
      </section>

      {/* =========================
          FOOTER
      ========================== */}
      <footer className="footer">
        © 2025 Pavarga Fest · KLE Society’s S. Nijalingappa College
      </footer>
    </main>
  );
}
