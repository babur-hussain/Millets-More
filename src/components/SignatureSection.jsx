import './SignatureSection.css';
import bgVideo from '../assets/Luxury_Dessert_Video_Generation_Request.webm';

function SignatureSection() {
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
                <h2 className="signature-title fade-in delay-1">Crafted to Indulge</h2>
                <div className="signature-divider fade-in delay-2"></div>
                <div className="signature-text-container">
                    <p className="signature-text fade-in delay-3">Handcrafted in small batches.</p>
                    <p className="signature-text fade-in delay-4">Premium millets.</p>
                    <p className="signature-text fade-in delay-5">Pure ingredients.</p>
                </div>
            </div>
        </section>
    );
}

export default SignatureSection;
