import { useEffect } from 'react';
import './SignatureSection.css';
import bgVideo from '../assets/Luxury_Dessert_Video_Generation_Request.webm';

function SignatureSection() {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        const elements = document.querySelectorAll('.sig-fade-in');
        elements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section className="signature-section">
            <video
                src={bgVideo}
                autoPlay
                loop
                muted
                playsInline
                className="signature-video"
            />
            <div className="signature-overlay"></div>

            <div className="signature-content">
                <h2 className="signature-title sig-fade-in delay-1">Crafted to Indulge</h2>
                <div className="signature-divider sig-fade-in delay-2"></div>
                <div className="signature-text-container">
                    <p className="signature-text sig-fade-in delay-3">Handcrafted in small batches.</p>
                    <p className="signature-text sig-fade-in delay-4">Premium millets.</p>
                    <p className="signature-text sig-fade-in delay-5">Pure ingredients.</p>
                </div>
            </div>
        </section>
    );
}

export default SignatureSection;
