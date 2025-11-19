import './header.css';
import headerlogo from './headerlogo.png';
import arrowicon from './right.png'

export default function Header() {
  return (
    <header className="header">
        <div className="header-container">
        <div className="logo">
            <img src={headerlogo} alt="Logo" className="logo-image"/>
        </div>
        <nav className="nav">
          <ul>
            <li> <a href="#home">Home</a></li>
            <li>Features
            <div>
                <ul className="dropdown">
                    <li><a href="#feature1">Feature 1</a></li>
                    <li><a href="#feature2">Feature 2</a></li>
                    <li><a href="#feature3">Feature 3</a></li>
                </ul>
              </div>
              </li>
            <li> <a href="#community">Community</a></li>
            <li> <a href="#blog">Blog</a></li>
            <li> <a href="#contact">Pricing</a></li>
            <li> <a href="#register" className="login-button">Register Now<span><img src={arrowicon}/></span></a></li>
          </ul>
        </nav>  
    </div>
    </header>
  );
}