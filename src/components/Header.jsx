import { useState, useEffect } from 'react';
import './Header.css';

function Header() {
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.remove('light-mode');
        } else {
            document.body.classList.add('light-mode');
        }
    }, [isDarkMode]);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <header className="header">
            <div className="header-container">
                <div className="header-logo">
                    Millets & More
                </div>
                <nav className="header-nav">
                    <ul>
                        <li><a href="#about">Philosophy</a></li>
                        <li><a href="#collections">Collections</a></li>
                        <li><a href="#contact">Atelier</a></li>
                    </ul>
                </nav>
                <div className="header-actions">
                    <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
                        {isDarkMode ? '☼ Light' : '☾ Dark'}
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;
