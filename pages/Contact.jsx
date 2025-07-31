function Contact() {
  return (
    <div className="container">
      <div className="contact-content">
        <h1 className="section-title text-center">Get In Touch</h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-light)', marginBottom: '2rem' }}>
          I'm always interested in discussing AWS security challenges, collaboration opportunities, 
          and how we can work together to secure cloud environments. Feel free to reach out!
        </p>
        
        <div className="contact-info">
          <a 
            href="mailto:your.email@example.com" 
            className="contact-item"
          >
            <span className="contact-icon">📧</span>
            <div>
              <strong>Email</strong>
              <div>your.email@example.com</div>
            </div>
          </a>
          
          <a 
            href="https://linkedin.com/in/yourprofile" 
            className="contact-item"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contact-icon">💼</span>
            <div>
              <strong>LinkedIn</strong>
              <div>Connect with me professionally</div>
            </div>
          </a>
          
          <a 
            href="https://github.com/yourusername" 
            className="contact-item"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contact-icon">🐙</span>
            <div>
              <strong>GitHub</strong>
              <div>Check out my open source projects</div>
            </div>
          </a>
        </div>
        
        <div style={{ marginTop: '3rem', padding: '2rem', backgroundColor: 'var(--bg-light)', borderRadius: '8px' }}>
          <h3 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>Available for:</h3>
          <ul style={{ listStyle: 'none', color: 'var(--text-light)' }}>
            <li>🔒 AWS Security Consulting</li>
            <li>🛠️ Security Architecture Reviews</li>
            <li>📚 Training & Workshops</li>
            <li>🤝 Speaking Engagements</li>
            <li>💡 Open Source Collaboration</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Contact