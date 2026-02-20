import { useState } from 'react';
import './CTASection.css';

function CTASection() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '' });

    const handleWhatsApp = () => {
        const message = encodeURIComponent("Hi, I would like to place an order for Kavya Kapoor desserts.");
        window.open(`https://wa.me/9111451111?text=${message}`, '_blank');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Mock submission
        setIsSubmitted(true);
    };

    return (
        <section className="cta-section section-padding">
            <div className="container cta-container fade-in">
                <h2 className="cta-title">Experience handcrafted indulgence.</h2>

                <div className="order-options">
                    <div className="order-option whatsapp-option fade-in delay-1">
                        <p className="text-label">Quick Order</p>
                        <button className="btn-premium whatsapp-btn" onClick={handleWhatsApp}>
                            Order via WhatsApp
                        </button>
                    </div>

                    <div className="order-divider fade-in delay-2">
                        <span>OR</span>
                    </div>

                    <div className="order-option form-option fade-in delay-3">
                        <p className="text-label">Request Order Callback</p>
                        {isSubmitted ? (
                            <div className="thank-you-message fade-in">
                                <h3 className="thank-you-title">Thank you for choosing Kavya Kapoor.</h3>
                                <p style={{ opacity: 0.8 }}>Our team will contact you shortly to confirm your exquisite selection.</p>
                            </div>
                        ) : (
                            <form className="luxury-form fade-in" onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    required
                                    className="luxury-input"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    required
                                    className="luxury-input"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                                <button type="submit" className="btn-premium submit-btn">Submit Request</button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CTASection;
