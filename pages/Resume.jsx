function Resume() {
  const certifications = [
    {
      name: 'AWS Certified Security - Specialty',
      organization: 'Amazon Web Services',
      year: '2024'
    },
    {
      name: 'AWS Certified Solutions Architect - Professional',
      organization: 'Amazon Web Services',
      year: '2023'
    },
    {
      name: 'AWS Certified DevOps Engineer - Professional',
      organization: 'Amazon Web Services',
      year: '2023'
    },
    {
      name: 'Certified Information Systems Security Professional (CISSP)',
      organization: 'ISC²',
      year: '2022'
    },
    {
      name: 'Certified Ethical Hacker (CEH)',
      organization: 'EC-Council',
      year: '2021'
    },
    {
      name: 'CompTIA Security+',
      organization: 'CompTIA',
      year: '2020'
    }
  ]

  const handleDownload = () => {
    // In a real implementation, this would download an actual PDF
    alert('PDF download functionality would be implemented here. You would typically store your resume PDF in the public folder and link to it.')
  }

  return (
    <div className="container">
      <div className="resume-header">
        <h1 className="section-title text-center">Resume</h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-light)', maxWidth: '600px', margin: '0 auto' }}>
          Download my complete resume or view my professional certifications below.
        </p>
        <button 
          onClick={handleDownload}
          className="cta-button download-btn"
        >
          📄 Download PDF Resume
        </button>
      </div>

      <div className="resume-section">
        <h2 className="section-title">Professional Summary</h2>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-light)' }}>
          Experienced AWS Security Specialist with 5+ years of expertise in cloud security architecture, 
          compliance frameworks, and automated threat detection. Proven track record of securing enterprise 
          AWS environments serving millions of users while maintaining operational efficiency. Skilled in 
          infrastructure as code, security automation, and incident response.
        </p>
      </div>

      <div className="resume-section">
        <h2 className="section-title">Core Competencies</h2>
        <div className="skills-list">
          <div className="skill-category">
            <h4>AWS Security Services</h4>
            <ul>
              <li>Identity and Access Management (IAM)</li>
              <li>AWS Security Hub & GuardDuty</li>
              <li>CloudTrail & Config</li>
              <li>WAF & Shield</li>
              <li>KMS & Secrets Manager</li>
            </ul>
          </div>
          <div className="skill-category">
            <h4>Security Frameworks</h4>
            <ul>
              <li>NIST Cybersecurity Framework</li>
              <li>ISO 27001/27002</li>
              <li>SOC 2 Type II</li>
              <li>PCI-DSS</li>
              <li>CIS Controls</li>
            </ul>
          </div>
          <div className="skill-category">
            <h4>Tools & Technologies</h4>
            <ul>
              <li>Terraform & CloudFormation</li>
              <li>Python & Boto3</li>
              <li>Docker & Kubernetes</li>
              <li>Splunk & ELK Stack</li>
              <li>Git & CI/CD Pipelines</li>
            </ul>
          </div>
          <div className="skill-category">
            <h4>Specializations</h4>
            <ul>
              <li>Zero Trust Architecture</li>
              <li>Incident Response</li>
              <li>Vulnerability Management</li>
              <li>Security Automation</li>
              <li>Risk Assessment</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="resume-section">
        <h2 className="section-title">Professional Certifications</h2>
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div key={index} className="certification-card">
              <div className="certification-name">{cert.name}</div>
              <div className="certification-org">{cert.organization}</div>
              <div className="certification-year">Earned: {cert.year}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Resume