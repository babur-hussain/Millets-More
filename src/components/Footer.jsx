import './Footer.css';

function Footer() {
    return (
        <footer className="footer" id="contact">
            <div className="container">
                <div className="footer-top">
                    {/* Left: Logo */}
                    <div className="footer-logo">
                        <span className="logo-text">Kavya Kapoor</span>
                    </div>

                    {/* Center: Philosophy, Collections, Atelier */}
                    <nav className="footer-nav">
                        <a href="#about" className="footer-nav-link">PHILOSOPHY</a>
                        <a href="#collections" className="footer-nav-link">COLLECTIONS</a>
                        <a href="#atelier" className="footer-nav-link">ATELIER</a>
                    </nav>

                    {/* Right: Theme Toggle */}
                    <div className="footer-theme">
                        <button className="btn-theme-toggle">
                            <span className="icon-sun">☼</span> LIGHT
                        </button>
                    </div>
                </div>

                <div className="footer-divider"></div>

                <div className="footer-bottom">
                    <div className="footer-bottom-col">
                        <span className="footer-bottom-label">Follow Us</span>
                        <a href="https://www.instagram.com/milletsnmore_/" target="_blank" rel="noopener noreferrer" className="footer-bottom-link">@milletsnmore_</a>
                    </div>

                    <div className="footer-bottom-col">
                        <span className="footer-bottom-label">Contact</span>
                        <a href="tel:+919111451111" className="footer-bottom-link">+91 9111 451 111</a>
                    </div>

                    <div className="footer-bottom-col">
                        <span className="footer-bottom-label">Location</span>
                        <span className="footer-bottom-link">(Location Placeholder)</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
