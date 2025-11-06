import React, { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ Thank you for your message! We’ll get back to you soon.");
  };

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>
          We’d love to hear from you! Reach out to us for any inquiries or
          assistance regarding{" "}
          <strong>Pavarga 2025</strong> at{" "}
          <strong>KLE Society’s S. Nijalingappa College</strong>.
        </p>
      </section>

      <section className="contact-content">
        <div className="contact-card">
          <h3>📍 College Address</h3>
          <p>
            2nd Block, XHW3+F7V, 1040, 28th Cross Road, Rajajinagar, Bengaluru,
            Karnataka 560010, India
          </p>

          <p>
            ☎️ <a href="tel:+918884880296">+91 8884880296</a> <br />
            📧 <a href="mailto:info@klesnc.org">info@klesnc.org</a>
          </p>

          <iframe
            title="KLE College Map"
            src="https://www.google.com/maps?q=KLE%20Society's%20S.%20Nijalingappa%20College,%20Rajajinagar,%20Bengaluru,%20India&output=embed"
            width="100%"
            height="300"
            style={{
              border: "none",
              borderRadius: "14px",
              marginTop: "20px",
              boxShadow: "0 0 20px rgba(0,229,255,0.15)",
            }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        <div className="contact-form-card">
          <h2>💬 Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="form-box">
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
            ></textarea>
            <button type="submit" className="btn primary">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
