import './Footer.css';

function Footer() {
    return (
        <footer className="footer" id="contact">
            <div className="footer-container">
                <div className="footer-brand">
                    <h2 className="footer-logo">Kavya Kapoor</h2>
                </div>

                <div className="footer-links-container">
                    <div className="footer-col">
                        <h4 className="footer-heading">Follow Us</h4>
                        <ul className="footer-links">
                            <li><a href="https://www.instagram.com/milletsnmore_/" target="_blank" rel="noopener noreferrer">@milletsnmore_</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4 className="footer-heading">Contact</h4>
                        <ul className="footer-links">
                            <li>+91 9111 451 111</li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4 className="footer-heading">Location</h4>
                        <ul className="footer-links">
                            <li>(Location Placeholder)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
