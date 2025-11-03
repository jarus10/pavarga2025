import React, { useEffect } from 'react'
export default function Contact(){
  useEffect(()=>{ window.scrollTo(0,0) },[])
  return (
    <section className="form-hero neon-section">
      <div className="container">
        <h2>Contact Us</h2>
        <p className="muted">We’d love to hear from you! Reach out to us for any inquiries or assistance.</p>
        <div className="contact-grid">
          <div className="contact-info">
            <h3>KLE Society's S. Nijalingappa College</h3>
            <p><strong>Address:</strong> 2nd Block, XHW3+F7V, 1040, 28th Cross Road, Rajajinagar, Bengaluru, Karnataka 560010, India</p>
            <p><strong>Phone:</strong> <a href="tel:+910000000000">+91 0000000000</a></p>
            <p><strong>Email:</strong> <a href="mailto:info@klesnc.org">info@klesnc.org</a></p>
          </div>
          <div className="map-embed">
            <iframe src="https://www.google.com/maps?q=KLE%20Society's%20S.%20Nijalingappa%20College%202nd%20Block,%20XHW3+F7V,%201040,%2028th%20Cross%20Road,%202nd%20Block,%20Rajajinagar,%20Bengaluru,%20Karnataka%20560010,%20India&output=embed" width="100%" height="300" style={{border:0,borderRadius:'12px'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="College location"></iframe>
          </div>
        </div>

        <form className="form-card" onSubmit={(e)=>{ e.preventDefault(); alert('Thank you for your message! We will get back to you soon.') }}>
          <label className="float-label">Your Name<input name="name" type="text" required/></label>
          <label className="float-label">Your Email<input name="email" type="email" required/></label>
          <label className="float-label">Message<textarea name="message" rows="4" required/></label>
          <div className="form-actions"><button className="btn primary" type="submit">Send Message</button></div>
        </form>
      </div>
    </section>
  )
}

