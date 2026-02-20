import { useEffect } from 'react';
import './Hero.css';
import heroVideo from '../assets/Luxury_Dessert_Video_Generation_Request.webm';

function Hero() {
    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY;
            const heroImage = document.querySelector('.hero-img');
            if (heroImage) {
                heroImage.style.transform = `translateY(${scrolled * 0.2}px)`;
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <section className="hero">
            <div className="hero-content">
                <h1 className="hero-title fade-in delay-1">Kavya Kapoor</h1>
                <p className="text-label fade-in delay-2" style={{ marginBottom: 'var(--spacing-md)' }}>Artisanal Millet & Luxury Tea Cakes</p>
                <p className="hero-description fade-in delay-3" style={{ letterSpacing: '0.05em', fontStyle: 'normal', fontSize: '1rem' }}>
                    Handcrafted. Eggless. Premium. Made to Order.
                </p>
                <button className="btn-premium fade-in delay-4" style={{ marginTop: 'var(--spacing-md)' }}>Order Now</button>
            </div>
            <div className="hero-image-container image-reveal">
                <video src={heroVideo} autoPlay loop muted playsInline className="hero-img" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                <div className="hero-image-overlay"></div>
            </div>
        </section>
    );
}

export default Hero;
