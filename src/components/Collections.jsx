import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSwipeZoom } from '../hooks/useSwipeZoom';
import './Collections.css';
import imgMilletCake from '../assets/Images/enhanced_millet_cake.png';
import imgChunkyCookies from '../assets/Images/enhanced_chunky_cookies.png';
import imgCookiePie from '../assets/Images/enhanced_cookie_pie.png';
import imgPlainCookie from '../assets/Images/enhanced_plain_cookie.png';
import imgPistachioCookies from '../assets/Images/enhanced_pistachio_cookies.png';

const categories = [
    { id: 1, title: 'Millet Tea Cakes', image: imgMilletCake },
    { id: 2, title: 'New York Style Millet Cookies', image: imgChunkyCookies },
    { id: 3, title: 'Eggless Butter Cakes', image: imgCookiePie },
    { id: 4, title: 'Whole Wheat Cookie Pies', image: imgPlainCookie },
    { id: 5, title: 'Center Filled Muffins', image: imgPistachioCookies }
];

function Collections() {
    const { carouselRef } = useSwipeZoom();

    // Helper component to isolate state for each image
    const CollectionCard = ({ cat, index }) => {
        const [imageLoaded, setImageLoaded] = useState(false);

        return (
            <Link to={`/category/${cat.id}`} className="collection-card" style={{ textDecoration: 'none' }}>
                <div className={`collection-image-wrapper ${!imageLoaded ? 'shimmer' : ''}`}>
                    <img
                        src={cat.image}
                        alt={cat.title}
                        className={`collection-img ${imageLoaded ? 'loaded' : 'loading'}`}
                        onLoad={() => setImageLoaded(true)}
                    />
                    <div className="collection-overlay">
                        <span className="collection-action">Discover</span>
                    </div>
                </div>
                <h3 className="collection-name">{cat.title}</h3>
            </Link>
        );
    };

    return (
        <section className="collections section-padding" id="collections">
            <div className="container">
                <div className="collections-header fade-in">
                    <h2 className="collections-title heading-underline">Signature Collections</h2>
                    <div className="collections-divider"></div>
                </div>

                <div className="collections-grid" ref={carouselRef}>
                    {categories.map((cat, index) => (
                        <CollectionCard key={cat.id} cat={cat} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Collections;
