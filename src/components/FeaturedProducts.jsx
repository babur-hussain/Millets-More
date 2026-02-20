import { useState } from 'react';
import ProductCard from './ProductCard';
import { useHaptics } from '../hooks/useHaptics';
import './ProductShowcase.css'; /* Added missing CSS import */
import imgMilletCake from '../assets/Images/enhanced_millet_cake.png';
import imgCookiePie from '../assets/Images/enhanced_cookie_pie.png';
import imgPistachioCookies from '../assets/Images/enhanced_pistachio_cookies.png';

const featuredProducts = [
    {
        id: 1,
        title: 'Saffron Pearl Eclair',
        description: 'Millet craquelin with delicate saffron cream.',
        price: '₹ 800',
        image: imgPistachioCookies
    },
    {
        id: 2,
        title: 'Rosewater Pistachio Slice',
        description: 'Sorghum sponge embedded with roasted pistachios.',
        price: '₹ 1,200',
        image: imgCookiePie
    },
    {
        id: 3,
        title: 'Dark Chocolate Amaranth Tart',
        description: 'Crisp amaranth shell, 70% dark chocolate ganache.',
        price: '₹ 1,500',
        image: imgMilletCake
    },
    {
        id: 4,
        title: 'Classic Nutty Cookie',
        description: 'Signature cookie with roasted nuts and sea salt.',
        price: '₹ 550',
        image: imgPistachioCookies
    },
    {
        id: 5,
        title: 'Pistachio Gem Cookie',
        description: 'Vibrant green pistachio cookie with white chocolate chunks.',
        price: '₹ 600',
        image: imgCookiePie
    },
    {
        id: 6,
        title: 'Red Velvet Cookie',
        description: 'Rich cocoa and buttermilk base with a cream cheese center.',
        price: '₹ 650',
        image: imgMilletCake
    },
    {
        id: 7,
        title: 'Fruit & Nut Cookie',
        description: 'Loaded with dried fruits, roasted nuts, and a hint of spice.',
        price: '₹ 580',
        image: imgPistachioCookies
    },
    {
        id: 8,
        title: 'Plain Classic Cookie',
        description: 'The perfectly baked, buttery classic vanilla cookie.',
        price: '₹ 450',
        image: imgCookiePie
    },
    {
        id: 9,
        title: 'Double Chocolate Cookie',
        description: 'Intensely chocolatey cookie with dark chocolate chips.',
        price: '₹ 600',
        image: imgMilletCake
    },
    {
        id: 10,
        title: 'Hazelnut Bliss Cookie',
        description: 'Roasted hazelnuts blended into a soft, chewy cookie dough.',
        price: '₹ 680',
        image: imgPistachioCookies
    }
];

function FeaturedProducts() {
    const { triggerHaptic } = useHaptics();
    const [pressedId, setPressedId] = useState(null);

    const handleOrder = (product) => {
        triggerHaptic([20]); // firm tap for order
        const message = encodeURIComponent(`Hi, I'm interested in ordering the Editor's Pick: ${product.title} (${product.price})`);
        window.open(`https://wa.me/9111451111?text=${message}`, '_blank');
    };

    return (
        <section className="featured section-padding" id="featured">
            <div className="container">
                <div className="showcase-header fade-in">
                    <p className="text-label">Shop Editor's Pick</p>
                    <h2 className="showcase-title heading-underline">Featured Spotlight</h2>
                </div>

                <div className="spotlight-list">
                    {featuredProducts.map((product) => (
                        <div key={product.id} className="spotlight-container fade-in delay-2">
                            <div className="spotlight-image-wrapper">
                                <img src={product.image} alt={product.title} className="spotlight-img" />
                            </div>
                            <div className="spotlight-info">
                                <h3 className="spotlight-title">{product.title}</h3>
                                <p className="spotlight-desc">{product.description}</p>
                                <p className="text-label" style={{ marginTop: 'var(--spacing-xs)', marginBottom: 'var(--spacing-xs)' }}>Made in small batches.</p>
                                <span className="spotlight-price">{product.price}</span>
                                <button
                                    className={`btn-premium spotlight-action ${pressedId === product.id ? 'btn-pressed' : ''}`}
                                    onClick={() => handleOrder(product)}
                                    onPointerDown={() => setPressedId(product.id)}
                                    onPointerUp={() => setPressedId(null)}
                                    onPointerLeave={() => setPressedId(null)}
                                >
                                    Order Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FeaturedProducts;
