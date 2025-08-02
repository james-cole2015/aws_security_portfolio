function Projects() {
  const projects = [
    {
      title: 'AWS Security Hub Automation',
      description: 'Automated security findings remediation using Lambda functions and EventBridge. Reduces manual security tasks by 80% and ensures rapid response to critical findings.',
      viewLink: 'https://your-project-demo.com',
      sourceLink: 'https://github.com/yourusername/security-hub-automation'
    },
    {
      title: 'Multi-Account IAM Governance',
      description: 'Centralized identity and access management system across 50+ AWS accounts using AWS Organizations, SSO, and custom policy templates.',
      viewLink: 'https://your-project-demo.com',
      sourceLink: 'https://github.com/yourusername/iam-governance'
    },
    {
      title: 'CloudTrail Log Analysis Pipeline',
      description: 'Real-time security event processing using Kinesis, Lambda, and ElasticSearch. Provides automated threat detection and forensic capabilities.',
      viewLink: 'https://your-project-demo.com',
      sourceLink: 'https://github.com/yourusername/cloudtrail-analysis'
    },
    {
      title: 'AWS Config Compliance Dashboard',
      description: 'Custom compliance dashboard built with React and AWS APIs. Tracks security posture across multiple accounts and generates executive reports.',
      viewLink: 'https://your-project-demo.com',
      sourceLink: 'https://github.com/yourusername/compliance-dashboard'
    },
    {
      title: 'GuardDuty Threat Response',
      description: 'Automated incident response system that isolates compromised instances, captures forensic data, and notifies security teams via Slack integration.',
      viewLink: 'https://your-project-demo.com',
      sourceLink: 'https://github.com/yourusername/guardduty-response'
    },
    {
      title: 'VPC Security Scanner',
      description: 'Terraform-based security scanner that identifies misconfigured security groups, NACLs, and route tables across AWS environments.',
      viewLink: 'https://your-project-demo.com',
      sourceLink: 'https://github.com/yourusername/vpc-security-scanner'
    }
  ]

  return (
    <div className="container">
      <h1 className="section-title text-center">AWS Security Projects</h1>
      <p className="text-center mb-3" style={{ fontSize: '1.1rem', color: 'var(--text-light)', maxWidth: '600px', margin: '0 auto 3rem' }}>
        A collection of security automation tools, compliance frameworks, and threat detection 
        systems I've built to enhance AWS security posture.
      </p>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image">
              Screenshot Coming Soon
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-links">
                <a 
                  href={project.viewLink} 
                  className="project-link primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
                <a 
                  href={project.sourceLink} 
                  className="project-link secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects