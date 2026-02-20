import { useState, useEffect } from 'react';
import { useHaptics } from '../hooks/useHaptics';
import './Header.css';

function Header() {
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.remove('light-mode');
        } else {
            document.body.classList.add('light-mode');
        }
    }, [isDarkMode]);

    const { triggerHaptic } = useHaptics();

    const toggleTheme = () => {
        triggerHaptic([10]); // very light tap for theme
        setIsDarkMode(!isDarkMode);
    };

    const toggleMobileMenu = () => {
        triggerHaptic([15]); // standard light tap for menu
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="header">
            <div className="header-container">
                <button className="hamburger-btn" onClick={toggleMobileMenu} aria-label="Menu">
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                </button>

                <div className="header-logo">
                    Millets & More
                </div>

                <nav className={`header-nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
                    <ul>
                        <li><a href="#about" onClick={() => setIsMobileMenuOpen(false)}>Philosophy</a></li>
                        <li><a href="#collections" onClick={() => setIsMobileMenuOpen(false)}>Collections</a></li>
                        <li><a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Atelier</a></li>
                    </ul>
                </nav>

                <div className="header-actions">
                    <button className="theme-toggle-icon" onClick={toggleTheme} aria-label="Toggle Theme">
                        {isDarkMode ? '☼' : '☾'}
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;
