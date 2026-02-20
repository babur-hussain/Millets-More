import './About.css';

function About() {
    return (
        <section className="about container section-padding" id="about">
            <div className="about-content">
                <h2 className="about-title heading-underline fade-in delay-1">The Art of Indulgence</h2>
                <div className="about-divider fade-in delay-2"></div>
                <p className="about-text fade-in delay-3">
                    Our small-batch baking philosophy ensures that every creation is a masterpiece.
                    We are deeply millet-focused, marrying ancient grains with modern culinary techniques.
                </p>
                <p className="about-text fade-in delay-4">
                    Sourced from the finest origins, our premium ingredients are crafted with meticulous detail
                    to offer you a profoundly rich, luxurious experience in every bite.
                </p>
            </div>
        </section>
    );
}

export default About;
