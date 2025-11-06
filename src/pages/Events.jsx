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
      date: "13th Sept",
      //time: "10 AM onwards",
      location: "KLE SNC",
      entryFees: "₹700 per team",
      prize1: "₹6,000\n",
      prize2: "₹3,000",
      rules: [
        "Teams must consist of 4 members.",
        "Only mobile devices allowed.",
        "Use of emulators or cheats leads to disqualification.",
      ],
      coordinators: [
        "Vinay M: +91 8904162546",
        "Gagan C: +91 7019021959",
      ],
      registerLink: "https://forms.gle/q9nQrNzzTsxZFef49",
    },
    {
      id: 2,
      name: "Escape Enclave",
      category: "Logic & Mystery",
      date: "13th Sept",
      //time: "11 AM onwards",
      location: "KLE SNC",
      entryFees: "₹200 per team",
      prize1: "₹2,000\n",
      prize2: "₹1,000",
      rules: [
        "Each team can have up to 3 members.",
        "Solve puzzles and escape within the given time limit.",
        "Hints reduce total score.",
      ],
      coordinators: [
        "Abhishek R: +91 7676611925",
        "Dorothy M: +91 9880214717",
      ],
      registerLink: "https://forms.gle/7nxKpn9eSDH1KsXU8",
    },
    {
      id: 3,
      name: "The Ultimate Makeover Competition",
      category: "Fashion & Creativity",
      date: "13th Sept",
      //time: "12 PM onwards",
      location: "KLE SNC",
      entryFees: "₹200 per participant",
      prize1: "₹2,000\n",
      prize2: "₹1,000",
      rules: [
        "Participants must bring their own materials.",
        "Time limit: 90 minutes.",
        "Judging based on creativity and presentation.",
        "Theme: Futuristic Esque.",
      ],
      coordinators: ["Yashaswini N: +91 8904694129 "],
      registerLink: "https://forms.gle/kwURDfKRhebkig5K7",
    },
    {
      id: 4,
      name: "Clever Chef",
      category: "Cooking",
      date: "13th Sept",
      //time: "10 AM onwards",
      location: "KLE SNC",
      entryFees: "₹200 per team (2 members)",
      prize1: "₹2000\n",
      prize2: "₹1,000",
      rules: [
        "Dish theme will be revealed on the spot.",
        "Bacis Ingredients will be provided.",
        "No electrical appliances allowed.",
        "Time limit: 2.30 hrs.",
      ],
      coordinators: [
        "Kissan : +91 9916214922",
       
      ],
      registerLink: "https://forms.gle/MJJ2UhmsrLJsYxKG9",
    },
    {
      id: 5,
      name: "Ad-Venture",
      category: "Marketing & Creativity",
      date: "13th Sept",
      //time: "11 AM onwards",
      location: "KLE SNC",
      entryFees: "₹200 per team (2–5 members)",
      prize1: "₹2,000\n",
      prize2: "₹1,000",
      rules: [
        "Prepare an advertisement for a surprise product.",
        "Performance time: 3–5 minutes.",
        "Exceeding time may result in Negative Marking.",
      ],
      coordinators: [
        "Shiva B : +91 9019542427",
        
      ],
      registerLink: "https://forms.gle/TozskjggCSWmUpva9",
    },
    {
      id: 6,
      name: "Dance-a-thon",
      category: "Cultural",
      date: "13th Sept",
      //time: "2 PM onwards",
      location: "KLE SNC",
      entryFees: "₹500 per team",
      prize1: "₹3,500\n",
      prize2: "₹2,000",
      rules: [
        "Theme: Fusion Dance.",
        "Time limit: 3+1 minutes per performance.",
        "Props are allowed but must be safe.",
      ],
      coordinators: [
        "Vedhashya: +91 9980719404",
      
      ],
      registerLink: "https://forms.gle/5ziX3V1Uyw7vUwVs6",
    },
    {
      id: 7,
      name: "Fashion Show",
      category: "Cultural",
      date: "13th Sept",
      //time: "4 PM onwards",
      location: "KLE SNC",
      entryFees: "₹800 per participant",
      prize1: "₹5,000\n",
      prize2: "₹3,000",
      rules: [
        "Theme: Open theme.",
        "Time limit: 3 minutes per team including setup and theme and performance.",
        "Judging based on Attiude, Costume , Theme , Walking stance.",
      ],
      coordinators: [
        "Nokia: +91 9900146371",
       
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
