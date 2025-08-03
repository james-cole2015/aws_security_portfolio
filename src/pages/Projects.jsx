import { useState } from 'react'

function Projects() {
  const [activeProject, setActiveProject] = useState(null)

  // GhostCam state management
  const [ghostCamTab, setGhostCamTab] = useState('upload')
  const [sightings, setSightings] = useState([])
  const [loading, setLoading] = useState(false)
  const [uploadStatus, setUploadStatus] = useState('')
  const [formData, setFormData] = useState({
    image: null,
    location: '',
    description: '',
    witnessName: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      image: e.target.files[0]
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setUploadStatus('')

    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      const newSighting = {
        id: Date.now(),
        ...formData,
        imageUrl: formData.image ? URL.createObjectURL(formData.image) : null,
        timestamp: new Date().toISOString()
      }
      
      setSightings(prev => [newSighting, ...prev])
      setFormData({ image: null, location: '', description: '', witnessName: '' })
      setUploadStatus('success')
      
      setTimeout(() => setGhostCamTab('feed'), 1000)
    } catch (error) {
      setUploadStatus('error')
    } finally {
      setLoading(false)
    }
  }

  const awsProjects = [
    {
      id: 'security-hub',
      title: 'AWS Security Hub Automation',
      description: 'Automated security findings remediation using Lambda functions and EventBridge. Reduces manual security tasks by 80% and ensures rapid response to critical findings.',
      viewLink: 'https://your-project-demo.com',
      sourceLink: 'https://github.com/yourusername/security-hub-automation'
    },
    {
      id: 'iam-governance',
      title: 'Multi-Account IAM Governance',
      description: 'Centralized identity and access management system across 50+ AWS accounts using AWS Organizations, SSO, and custom policy templates.',
      viewLink: 'https://your-project-demo.com',
      sourceLink: 'https://github.com/yourusername/iam-governance'
    },
    {
      id: 'cloudtrail-analysis',
      title: 'CloudTrail Log Analysis Pipeline',
      description: 'Real-time security event processing using Kinesis, Lambda, and ElasticSearch. Provides automated threat detection and forensic capabilities.',
      viewLink: 'https://your-project-demo.com',
      sourceLink: 'https://github.com/yourusername/cloudtrail-analysis'
    },
    {
      id: 'compliance-dashboard',
      title: 'AWS Config Compliance Dashboard',
      description: 'Custom compliance dashboard built with React and AWS APIs. Tracks security posture across multiple accounts and generates executive reports.',
      viewLink: 'https://your-project-demo.com',
      sourceLink: 'https://github.com/yourusername/compliance-dashboard'
    },
    {
      id: 'guardduty-response',
      title: 'GuardDuty Threat Response',
      description: 'Automated incident response system that isolates compromised instances, captures forensic data, and notifies security teams via Slack integration.',
      viewLink: 'https://your-project-demo.com',
      sourceLink: 'https://github.com/yourusername/guardduty-response'
    },
    {
      id: 'vpc-scanner',
      title: 'VPC Security Scanner',
      description: 'Terraform-based security scanner that identifies misconfigured security groups, NACLs, and route tables across AWS environments.',
      viewLink: 'https://your-project-demo.com',
      sourceLink: 'https://github.com/yourusername/vpc-security-scanner'
    }
  ]

  const ghostCamProject = {
    id: 'ghostcam',
    title: '👻 GhostCam',
    description: 'A paranormal sighting upload and sharing platform built with React. Demonstrates full-stack development skills with file uploads, state management, and responsive design.',
    type: 'interactive',
    sourceLink: 'https://github.com/yourusername/ghostcam'
  }

  return (
    <div className="container">
      <h1 className="section-title text-center">Projects Portfolio</h1>
      <p className="text-center mb-3" style={{ fontSize: '1.1rem', color: 'var(--text-light)', maxWidth: '600px', margin: '0 auto 3rem' }}>
        A collection of security automation tools, compliance frameworks, and creative applications 
        showcasing both professional expertise and development skills.
      </p>
      
      {/* AWS Security Projects */}
      <div className="projects-section">
        <h2 className="projects-subsection-title">AWS Security Projects</h2>
        <div className="projects-grid">
          {awsProjects.map((project, index) => (
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

      {/* Creative Projects */}
      <div className="projects-section">
        <h2 className="projects-subsection-title">Creative Projects</h2>
        
        {/* GhostCam Interactive Project Card */}
        <div className="ghostcam-project-container">
          <div className="project-card ghostcam-card">
            <div className="ghostcam-header-section">
              <div className="ghostcam-icon-large">👻</div>
              <h3 className="project-title ghostcam-title">GhostCam</h3>
              <p className="project-description">{ghostCamProject.description}</p>
              
              <div className="project-actions">
                <button 
                  className={`project-link ${activeProject === 'ghostcam' ? 'secondary' : 'primary'}`}
                  onClick={() => setActiveProject(activeProject === 'ghostcam' ? null : 'ghostcam')}
                >
                  {activeProject === 'ghostcam' ? 'Close Demo' : 'Try Live Demo'}
                </button>
                <a 
                  href={ghostCamProject.sourceLink} 
                  className="project-link secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source Code
                </a>
              </div>
            </div>

            {/* Interactive GhostCam Demo */}
            {activeProject === 'ghostcam' && (
              <div className="ghostcam-demo">
                <div className="disclaimer-banner">
                  ⚠️ Demo Application - For entertainment and portfolio showcase purposes only
                </div>

                {/* Tab Navigation */}
                <div className="tab-nav">
                  <button 
                    className={`tab ${ghostCamTab === 'upload' ? 'active' : ''}`}
                    onClick={() => setGhostCamTab('upload')}
                  >
                    📤 Upload Sighting
                  </button>
                  <button 
                    className={`tab ${ghostCamTab === 'feed' ? 'active' : ''}`}
                    onClick={() => setGhostCamTab('feed')}
                  >
                    👁️ View Sightings ({sightings.length})
                  </button>
                </div>

                {/* Upload Tab */}
                {ghostCamTab === 'upload' && (
                  <div className="upload-form">
                    {uploadStatus === 'success' && (
                      <div className="success-message">
                        ✅ Sighting uploaded successfully! Check the feed to see your submission.
                      </div>
                    )}
                    {uploadStatus === 'error' && (
                      <div className="error-message">
                        ❌ Upload failed. Please try again.
                      </div>
                    )}

                    <form onSubmit={handleSubmit}>
                      <div className="form-group">
                        <label>Evidence Photo/Video</label>
                        <input
                          type="file"
                          accept="image/*,video/*"
                          onChange={handleFileChange}
                          className="file-input"
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label>Location</label>
                        <input
                          type="text"
                          name="location"
                          value={formData.location}
                          onChange={handleInputChange}
                          placeholder="Where did this occur?"
                          className="text-input"
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label>Description</label>
                        <textarea
                          name="description"
                          value={formData.description}
                          onChange={handleInputChange}
                          placeholder="Describe what you witnessed..."
                          className="textarea-input"
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label>Witness Name (optional)</label>
                        <input
                          type="text"
                          name="witnessName"
                          value={formData.witnessName}
                          onChange={handleInputChange}
                          placeholder="Your name or 'Anonymous'"
                          className="text-input"
                        />
                      </div>

                      <button type="submit" className="submit-btn" disabled={loading}>
                        {loading ? '👻 Uploading...' : '📤 Share Sighting'}
                      </button>
                    </form>
                  </div>
                )}

                {/* Feed Tab */}
                {ghostCamTab === 'feed' && (
                  <div className="feed-container">
                    {loading && <div className="loading">Loading sightings...</div>}
                    
                    {!loading && sightings.length === 0 && (
                      <div className="no-sightings">
                        👻 No sightings yet. Be the first to upload an encounter!
                      </div>
                    )}

                    <div className="sightings-grid">
                      {sightings.map(sighting => (
                        <div key={sighting.id} className="sighting-card">
                          {sighting.imageUrl ? (
                            <img 
                              src={sighting.imageUrl} 
                              alt="Paranormal sighting" 
                              className="sighting-image"
                            />
                          ) : (
                            <div className="image-placeholder">👻</div>
                          )}
                          
                          <div className="sighting-content">
                            <div className="sighting-location">📍 {sighting.location}</div>
                            <div className="sighting-description">{sighting.description}</div>
                            <div className="sighting-meta">
                              <span className="witness-name">
                                By: {sighting.witnessName || 'Anonymous'}
                              </span>
                              <span>{new Date(sighting.timestamp).toLocaleDateString()}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects