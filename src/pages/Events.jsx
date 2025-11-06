import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

console.log("✅ New Events.jsx Loaded!"); // DEBUG LINE

export default function Events() {
  const navigate = useNavigate();

  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    {
      id: 1,
      name: "War of Glory",
      category: "Gaming",
      date: "25th Sept",
      time: "10 AM onwards",
      location: "LH3",
      entryFees: "₹400 per team",
      prize1: "₹6,000",
      prize2: "₹4,000",
      rules: [
        "Teams must consist of 4 members.",
        "Only mobile devices allowed.",
        "Use of emulators or cheats leads to disqualification.",
      ],
      coordinators: [
        "Rahul: +91 98765 43210",
        "Ananya: +91 87654 32109",
      ],
      registerLink: "https://forms.gle/q9nQrNzzTsxZFef49",
    },
    {
      id: 2,
      name: "Escape Enclave",
      category: "Logic & Mystery",
      date: "25th Sept",
      time: "11 AM onwards",
      location: "Room 105",
      entryFees: "₹200 per team",
      prize1: "₹3,000",
      prize2: "₹1,500",
      rules: [
        "Each team can have up to 3 members.",
        "Solve puzzles and escape within the given time limit.",
        "Hints reduce total score.",
      ],
      coordinators: [
        "Suresh: +91 78901 23456",
        "Riya: +91 91234 56789",
      ],
      registerLink: "https://forms.gle/7nxKpn9eSDH1KsXU8",
    },
    {
      id: 3,
      name: "The Ultimate Makeover Competition",
      category: "Fashion & Creativity",
      date: "26th Sept",
      time: "12 PM onwards",
      location: "Auditorium",
      entryFees: "₹150 per participant",
      prize1: "₹2,500",
      prize2: "₹1,000",
      rules: [
        "Participants must bring their own materials.",
        "Time limit: 60 minutes.",
        "Judging based on creativity and presentation.",
      ],
      coordinators: ["Aisha: +91 78945 61230"],
      registerLink: "https://forms.gle/kwURDfKRhebkig5K7",
    },
    {
      id: 4,
      name: "Clever Chef",
      category: "Cooking",
      date: "26th Sept",
      time: "10 AM onwards",
      location: "Cafeteria",
      entryFees: "₹250 per team (2 members)",
      prize1: "₹3,500",
      prize2: "₹1,500",
      rules: [
        "Dish theme will be revealed on the spot.",
        "Ingredients will be provided.",
        "No electrical appliances allowed.",
      ],
      coordinators: [
        "Neha: +91 99988 77665",
        "Rohan: +91 98877 66554",
      ],
      registerLink: "https://forms.gle/MJJ2UhmsrLJsYxKG9",
    },
    {
      id: 5,
      name: "Ad-Venture",
      category: "Marketing & Creativity",
      date: "27th Sept",
      time: "11 AM onwards",
      location: "Seminar Hall",
      entryFees: "₹200 per team (2–3 members)",
      prize1: "₹4,000",
      prize2: "₹2,000",
      rules: [
        "Prepare an advertisement for a surprise product.",
        "Performance time: 5–7 minutes.",
        "Use of offensive content leads to disqualification.",
      ],
      coordinators: [
        "Arjun: +91 98770 11122",
        "Priya: +91 98760 22233",
      ],
      registerLink: "https://forms.gle/TozskjggCSWmUpva9",
    },
    {
      id: 6,
      name: "Dance-a-thon",
      category: "Cultural",
      date: "27th Sept",
      time: "2 PM onwards",
      location: "Auditorium",
      entryFees: "₹200 per participant / ₹400 per group",
      prize1: "₹5,000",
      prize2: "₹3,000",
      rules: [
        "Solo and group categories allowed.",
        "Time limit: 5 minutes per performance.",
        "Props are allowed but must be safe.",
      ],
      coordinators: [
        "Tanya: +91 98777 66655",
        "Kiran: +91 99988 44556",
      ],
      registerLink: "https://forms.gle/5ziX3V1Uyw7vUwVs6",
    },
    {
      id: 7,
      name: "Fashion Show",
      category: "Cultural",
      date: "28th Sept",
      time: "4 PM onwards",
      location: "Auditorium",
      entryFees: "₹300 per participant",
      prize1: "₹7,000",
      prize2: "₹4,000",
      rules: [
        "Theme: Fusion of Tradition & Trend.",
        "Time limit: 7 minutes per team.",
        "Judging based on creativity, costume, and confidence.",
      ],
      coordinators: [
        "Simran: +91 99880 55443",
        "Manoj: +91 91234 56789",
      ],
      registerLink: "https://forms.gle/xzoYd4RHxvxgYezh9",
    },
  ];

  return (
    <main className="events-page">
      <h1 className="section-title">Events</h1>
      <p className="section-subtitle">
        Explore all competitions of Pavarga 2025 — register now and join the fun!
      </p>

      <div className="events-grid">
        {events.map((event) => (
          <div key={event.id} className="event-card">
            <div className="event-header">
              <span className="event-category">{event.category}</span>
              <span className="event-date">{event.date}</span>
            </div>

            <h3 className="event-name">{event.name}</h3>

            <p>
              <strong>Time:</strong> {event.time}
              <br />
              <strong>Location:</strong> {event.location}
              <br />
              <strong>Entry Fees:</strong> {event.entryFees}
            </p>

            <p className="prize">
              🏆 <strong>Prizes:</strong> 1st – {event.prize1}, 2nd – {event.prize2}
            </p>

            <div className="event-actions">
              <button className="btn ghost" onClick={() => setSelectedEvent(event)}>
                View Details
              </button>
              <a
                href={event.registerLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn primary"
              >
                Register
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedEvent && (
        <div className="modal-backdrop" onClick={() => setSelectedEvent(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedEvent.name}</h2>
            <p><strong>Date:</strong> {selectedEvent.date}</p>
            <p><strong>Time:</strong> {selectedEvent.time}</p>
            <p><strong>Location:</strong> {selectedEvent.location}</p>
            <p><strong>Entry Fee:</strong> {selectedEvent.entryFees}</p>
            <p><strong>1st Prize:</strong> {selectedEvent.prize1}</p>
            <p><strong>2nd Prize:</strong> {selectedEvent.prize2}</p>

            <h4>Rules & Regulations</h4>
            <ul>
              {selectedEvent.rules.map((rule, index) => (
                <li key={index}>{rule}</li>
              ))}
            </ul>

            <h4>Student Coordinators</h4>
            <ul>
              {selectedEvent.coordinators.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>

            <button className="btn ghost" onClick={() => setSelectedEvent(null)}>
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
