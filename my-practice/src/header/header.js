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
            <a href="#home">Home</a>
            <a href="#features">Features</a>
            <a href="#community">Community</a>
            <a href="#blog">Blog</a>
            <a href="#contact">Pricing</a>
            <a href="#register" className="login-button">Register Now<span><img src={arrowicon}/></span></a>
        </nav>  
    </div>
    </header>
  );
}