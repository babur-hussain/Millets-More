import { useEffect, useState } from 'react';
import { useHaptics } from '../hooks/useHaptics';
import './Hero.css';
import heroVideo from '../assets/Luxury_Dessert_Video_Generation_Request.webm';

function Hero() {
    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const scrolled = window.scrollY;
                    const heroImage = document.querySelector('.hero-img');
                    if (heroImage) {
                        // Use translate3d for GPU hardware acceleration on mobile
                        heroImage.style.transform = `translate3d(0, ${scrolled * 0.15}px, 0)`;
                    }
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const { triggerHaptic } = useHaptics();
    const [isPressed, setIsPressed] = useState(false);

    const handleOrder = () => {
        triggerHaptic([20]); // slightly firmer tap for primary action
        const message = encodeURIComponent("Hi, I would like to explore the Kavya Kapoor collections.");
        window.open(`https://wa.me/9111451111?text=${message}`, '_blank');
    };

    return (
        <section className="hero">
            <div className="hero-content">
                <h1 className="hero-title fade-in delay-1">Kavya Kapoor</h1>
                <p className="hero-subtitle text-label fade-in delay-2" style={{ marginBottom: 'var(--spacing-xs)' }}>
                    Artisanal Millet & Luxury Tea Cakes
                </p>
                <p className="hero-subtitle text-label fade-in delay-2" style={{ marginBottom: 'var(--spacing-lg)', textTransform: 'capitalize', letterSpacing: '0.1em', opacity: 0.8 }}>
                    Handcrafted. Eggless. Premium. Made to Order❤️
                </p>
                <button
                    className={`btn-premium fade-in delay-3 ${isPressed ? 'btn-pressed' : ''}`}
                    onClick={handleOrder}
                    onPointerDown={() => setIsPressed(true)}
                    onPointerUp={() => setIsPressed(false)}
                    onPointerLeave={() => setIsPressed(false)}
                >
                    Order Now
                </button>
            </div>

            <div className="scroll-indicator fade-in delay-4">
                <span className="scroll-text">Discover</span>
                <div className="scroll-line"></div>
            </div>

            <div className="hero-image-container image-reveal">
                <video src={heroVideo} autoPlay loop muted playsInline className="hero-img" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                <div className="hero-image-overlay"></div>
            </div>
        </section>
    );
}

export default Hero;
