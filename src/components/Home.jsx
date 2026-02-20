import { useEffect } from 'react'
import IntroAnimation from './IntroAnimation'
import Header from './Header'
import Hero from './Hero'
import About from './About'
import Collections from './Collections'
import FeaturedProducts from './FeaturedProducts'
import SignatureSection from './SignatureSection'
import NoticeSection from './NoticeSection'
import CTASection from './CTASection'
import Footer from './Footer'
import '../index.css'

function Home() {

    // Intersection Observer for slow fade-in animations
    useEffect(() => {
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    obs.unobserve(entry.target); // Unobserve to prevent refiring
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

        const elements = document.querySelectorAll('.fade-in, .image-reveal');
        elements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <IntroAnimation />
            <Header />
            <Hero />
            <main>
                <About />
                <Collections />
                <FeaturedProducts />
                <SignatureSection />
                <NoticeSection />
                <CTASection />
            </main>
            <Footer />
        </>
    )
}

export default Home;
