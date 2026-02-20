import { useState } from 'react';
import { useHaptics } from '../hooks/useHaptics';
import './CTASection.css';

function CTASection() {
    const { triggerHaptic } = useHaptics();
    const [isPressed, setIsPressed] = useState(false);

    const handleWhatsApp = () => {
        triggerHaptic([25]); // boldest tap for final huge CTA
        const message = encodeURIComponent("Hi, I would like to place an order for Kavya Kapoor desserts.");
        window.open(`https://wa.me/9111451111?text=${message}`, '_blank');
    };

    return (
        <section className="cta-section section-padding">
            <div className="container cta-container fade-in">
                <h2 className="cta-title">Experience handcrafted indulgence.</h2>
                <div className="cta-grid">
                    <div className="cta-column">
                        <span className="text-label" style={{ marginBottom: 'var(--spacing-md)' }}>QUICK ORDER</span>
                        <button
                            className={`btn-gold-outline ${isPressed ? 'btn-pressed' : ''}`}
                            onClick={handleWhatsApp}
                            onPointerDown={() => setIsPressed(true)}
                            onPointerUp={() => setIsPressed(false)}
                            onPointerLeave={() => setIsPressed(false)}
                        >
                            Order via WhatsApp
                        </button>
                    </div>

                    <div className="cta-divider">
                        <span className="cta-or text-label">OR</span>
                    </div>

                    <div className="cta-column cta-form-column">
                        <span className="text-label" style={{ marginBottom: 'var(--spacing-md)' }}>REQUEST ORDER CALLBACK</span>
                        <form className="cta-form" onSubmit={(e) => e.preventDefault()}>
                            <input type="text" className="cta-input" placeholder="Your Name" required />
                            <input type="email" className="cta-input" placeholder="Your Email" required />
                            <button type="submit" className="btn-gold-outline">
                                Submit Request
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CTASection;
