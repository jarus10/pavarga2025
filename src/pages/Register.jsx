import React from "react";

export default function Register() {
  return (
    <main className="register-page" style={{ padding: "120px 20px", textAlign: "center" }}>
      <h1 className="section-title">Time and Venue </h1>
      <p className="section-subtitle">
        Welcome to <strong>PAVARGA 2025!</strong>  
      
      </p>

      <div className="register-container" style={{ marginTop: "40px" }}>
        <a
          href="https://forms.gle/vWQbk94i1aBwkRjo6"
          target="_blank"
          rel="noopener noreferrer"
          className="btn primary"
          style={{
            padding: "12px 24px",
            borderRadius: "10px",
            fontWeight: "700",
            background: "linear-gradient(90deg, #00e5ff, #8a2be2)",
            color: "#021",
            textDecoration: "none",
            boxShadow: "0 5px 15px rgba(138, 43, 226, 0.3)",
            transition: "all 0.25s ease",
            display: "inline-block",
          }}
          onMouseOver={(e) => (e.target.style.transform = "translateY(-3px)")}
          onMouseOut={(e) => (e.target.style.transform = "translateY(0)")}
        >
          View Here
        </a>
      </div>

      <section className="guidelines-preview" style={{ marginTop: "80px" }}>
        <h2 style={{ color: "#00e5ff", marginBottom: "20px" }}>General Guidelines</h2>
        <ul style={{ listStyle: "none", padding: 0, lineHeight: "1.8", color: "rgba(255,255,255,0.85)" }}>
           <li> No Refunds After Regestrations. </li>
          <li>📘 All participants must carry their college ID card.</li>
          <li>🕒 Arrive at least 30 minutes before your event.</li>
          <li>🎯 Follow all event-specific rules shared by coordinators.</li>
          <li>🚫 Any form of misconduct will lead to disqualification.</li>
          <li>🏆 Judges’ and organizers’ decisions are final and binding.</li>
        </ul>
      </section>
    </main>
  );
}
