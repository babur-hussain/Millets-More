import { useEffect } from 'react'
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

    // Intersection Observer for fade-in animations
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        const elements = document.querySelectorAll('.fade-in, .image-reveal');
        elements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <>
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
