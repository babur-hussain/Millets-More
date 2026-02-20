import { useEffect, useState } from 'react';
import './IntroAnimation.css';

function IntroAnimation() {
    const [isVisible, setIsVisible] = useState(true);
    const [shouldRender, setShouldRender] = useState(true);

    useEffect(() => {
        // Trigger fade out after 2.5 seconds to complete at exactly 3 seconds
        const fadeOutTimer = setTimeout(() => {
            setIsVisible(false);
        }, 2500);

        // Remove from DOM completely after transition ends
        const unmountTimer = setTimeout(() => {
            setShouldRender(false);
        }, 3500);

        return () => {
            clearTimeout(fadeOutTimer);
            clearTimeout(unmountTimer);
        };
    }, []);

    if (!shouldRender) return null;

    return (
        <div className={`intro-overlay ${!isVisible ? 'fade-out' : ''}`}>
            <div className="intro-content">
                <div className="intro-line"></div>
                <h1 className="intro-text">Kavya Kapoor</h1>
            </div>
        </div>
    );
}

export default IntroAnimation;
