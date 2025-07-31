import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const isActive = (path) => {
    return location.pathname === path ? 'active' : ''
  }

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <Link to="/" className="logo">
            AWS Security Portfolio
          </Link>
          
          <button 
            className="mobile-menu-btn"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            ☰
          </button>
          
          <ul className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
            <li>
              <Link 
                to="/" 
                className={isActive('/')}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/projects" 
                className={isActive('/projects')}
                onClick={() => setMobileMenuOpen(false)}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link 
                to="/resume" 
                className={isActive('/resume')}
                onClick={() => setMobileMenuOpen(false)}
              >
                Resume
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className={isActive('/contact')}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header