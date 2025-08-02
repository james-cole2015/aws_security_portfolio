import { Link } from 'react-router-dom'

function Home() {
  const skills = [
    {
      icon: '🛡️',
      title: 'AWS Security',
      description: 'Expert in AWS security services including IAM, GuardDuty, Security Hub, and CloudTrail'
    },
    {
      icon: '☁️',
      title: 'Cloud Architecture',
      description: 'Designing secure, scalable cloud infrastructures with defense-in-depth principles'
    },
    {
      icon: '🔍',
      title: 'Threat Detection',
      description: 'Implementing automated threat detection and incident response workflows'
    },
    {
      icon: '🚨',
      title: 'Compliance',
      description: 'Ensuring AWS environments meet SOC2, PCI-DSS, and other regulatory standards'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">AWS Security Specialist</h1>
          <p className="hero-subtitle">Securing Cloud Infrastructure at Scale</p>
          <p className="hero-description">
            I help organizations build and maintain secure AWS environments through 
            automated security controls, compliance frameworks, and proactive threat detection.
          </p>
          <Link to="/projects" className="cta-button">
            View My Work
          </Link>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills">
        <div className="container">
          <h2 className="section-title text-center">Core Expertise</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-icon">{skill.icon}</div>
                <h3 className="mb-1">{skill.title}</h3>
                <p>{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container">
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 className="section-title">About Me</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-light)' }}>
            With over 5 years of experience in cloud security, I specialize in designing and 
            implementing comprehensive security solutions for AWS environments. My expertise 
            spans from identity and access management to advanced threat detection and 
            automated incident response. I'm passionate about helping organizations achieve 
            security excellence while maintaining operational efficiency in the cloud.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Home