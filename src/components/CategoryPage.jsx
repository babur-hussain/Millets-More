import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useHaptics } from '../hooks/useHaptics';
import Header from './Header';
import Footer from './Footer';
import './CategoryPage.css';
import imgMilletCake from '../assets/Images/enhanced_millet_cake.png';
import imgChunkyCookies from '../assets/Images/enhanced_chunky_cookies.png';
import imgCookiePie from '../assets/Images/enhanced_cookie_pie.png';
import imgPlainCookie from '../assets/Images/enhanced_plain_cookie.png';
import imgPistachioCookies from '../assets/Images/enhanced_pistachio_cookies.png';

import imgDoubleCookie from '../assets/Images/studio_double_cookie.png';
import imgHazelnutCookie from '../assets/Images/studio_hazelnut_cookie.png';
import imgRedVelvetCookie from '../assets/Images/studio_red_velvet_cookie.png';
import imgClassicNutty from '../assets/Images/studio_classic_nutty_cookie.png';
import imgFruitNut from '../assets/Images/studio_fruit_nut_cookie.png';
import imgPistachioGem from '../assets/Images/studio_pistachio_gem_cookie.png';

// Mock data (in a real app, this would come from an API or context)
const categoryData = {
    1: { title: 'Millet Tea Cakes', description: 'Perfect companions for your evening brew.' },
    2: { title: 'New York Style Millet Cookies', description: 'Chunky, chewy, and deeply satisfying.' },
    3: { title: 'Eggless Butter Cakes', description: 'Classic indulgence, elevated with premium ingredients.' },
    4: { title: 'Whole Wheat Cookie Pies', description: 'A decadent fusion of pie and cookie.' },
    5: { title: 'Center Filled Muffins', description: 'Soft crumb with a molten heart.' }
};

const categoryProducts = [
    // 1: Millet Tea Cakes
    { id: 101, categoryId: 1, title: 'Almond Mawa Millet Tea Cake', description: 'Rich mawa infused with ancient millets and toasted premium almonds.', price: '₹ 800', image: imgMilletCake },
    { id: 102, categoryId: 1, title: 'Jaggery Coconut Tea Cake', description: 'Earthy sweetness of palm jaggery paired with delicate coconut shred.', price: '₹ 750', image: 'https://images.unsplash.com/photo-1549144498-8df0dfbb76a1?q=80&w=1200' },
    { id: 103, categoryId: 1, title: 'Vanilla & Vanilla Tea Cake', description: 'Double infusion of Madagascar vanilla beans in a tender millet crumb.', price: '₹ 700', image: 'https://images.unsplash.com/photo-1519869325930-281384150729?q=80&w=1200' },
    { id: 104, categoryId: 1, title: 'Spiced Carrot Tea Cake', description: 'Warm autumn spices folded into a moist, refined carrot sponge.', price: '₹ 850', image: 'https://images.unsplash.com/photo-1557308536-ee471ef2c390?q=80&w=1200' },
    { id: 105, categoryId: 1, title: 'Butterscotch Tea Cake', description: 'Velvety butterscotch notes cascading through an artisanal loaf.', price: '₹ 800', image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?q=80&w=1200' },
    { id: 106, categoryId: 1, title: 'Banana Choco Chip Tea Cake', description: 'Ripe bananas and intense dark chocolate baked to luxurious perfection.', price: '₹ 850', image: 'https://images.unsplash.com/photo-1622896784083-cc051313dbab?q=80&w=1200' },
    { id: 107, categoryId: 1, title: 'Pineapple Upside Down Tea Cake', description: 'Caramelized pineapple crescents atop a delicate upside-down sponge.', price: '₹ 900', image: 'https://images.unsplash.com/photo-1542826438-bd32f43d626f?q=80&w=1200' },
    { id: 108, categoryId: 1, title: 'Apple Upside Down Tea Cake', description: 'Spiced tart apples glazed in a rich, buttery caramel base.', price: '₹ 900', image: 'https://images.unsplash.com/photo-1514517521153-1be72277b32f?q=80&w=1200' },
    { id: 109, categoryId: 1, title: 'Blueberry Loaf', description: 'Bursting with wild blueberries in every delicate slice.', price: '₹ 950', image: 'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?q=80&w=1200' },
    { id: 110, categoryId: 1, title: 'Strawberry Loaf', description: 'Infusion of fresh strawberry preserves in a melt-in-the-mouth texture.', price: '₹ 950', image: 'https://images.unsplash.com/photo-1464349153735-7db50ed83c84?q=80&w=1200' },
    { id: 111, categoryId: 1, title: 'Classic Marble Tea Cake', description: 'A flawless swirl of deep cocoa and pure vanilla bean.', price: '₹ 800', image: 'https://images.unsplash.com/photo-1550617931-e17a7b70dce2?q=80&w=1200' },
    { id: 112, categoryId: 1, title: 'Ghee Cardamom Tea Cake', description: 'An ode to Indian heritage with pure desi ghee and green cardamom.', price: '₹ 850', image: 'https://images.unsplash.com/photo-1606890737305-7caa6ebe6440?q=80&w=1200' },
    { id: 113, categoryId: 1, title: 'Date Walnut Tea Cake', description: 'Opulent Medjool dates paired with crunchy, roasted walnuts.', price: '₹ 900', image: 'https://images.unsplash.com/photo-1515286576852-c625cde640ab?q=80&w=1200' },
    { id: 114, categoryId: 1, title: 'Christmas Gingerbread Tea Cake', description: 'A festive symphony of warm ginger and molasses elegance.', price: '₹ 950', image: 'https://images.unsplash.com/photo-1549468057-0b1e19d4586d?q=80&w=1200' },
    { id: 115, categoryId: 1, title: 'Saffron Pistachio Tea Cake', description: 'Luxurious saffron threads meet finely ground jade pistachios.', price: '₹ 1,100', image: 'https://images.unsplash.com/photo-1514517521153-1be72277b32f?q=80&w=1200' },
    { id: 116, categoryId: 1, title: 'Dry Fruit Loaded Tea Cake', description: 'An extravagant mosaic of the finest hand-selected dried fruits.', price: '₹ 1,200', image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=1200' },

    // 2: NY Style Millet Cookies
    { id: 201, categoryId: 2, title: 'Classic NY Chocolate Chip Cookie', description: 'A timeless giant with pools of rich, molten Belgian chocolate.', price: '₹ 250', image: imgChunkyCookies },
    { id: 202, categoryId: 2, title: 'Double Chocolate Walnut Cookie', description: 'Intense cocoa batter studded with premium chocolate and toasted walnuts.', price: '₹ 300', image: imgDoubleCookie },
    { id: 203, categoryId: 2, title: 'Death by Hazelnut Chocolate Cookie', description: 'An outrageously decadent collision of roasted hazelnut and dark chunks.', price: '₹ 350', image: imgHazelnutCookie },
    { id: 204, categoryId: 2, title: 'Chunky Pistachio Cookie', description: 'Gourmet cookie elevated with large, vibrant green pistachio gems.', price: '₹ 350', image: imgPistachioGem },
    { id: 205, categoryId: 2, title: 'Fruit & Nuts Cookie', description: 'A sophisticated harmony of chewy fruits and premium roasted nuts.', price: '₹ 300', image: imgFruitNut },
    { id: 206, categoryId: 2, title: 'Classic Nutty Chocolate Chip Cookie', description: 'The grand classic reimagined with an exquisite crunch.', price: '₹ 300', image: imgClassicNutty },
    { id: 207, categoryId: 2, title: 'Red Velvet Cookie', description: 'Sumptuous, crimson velvet indulgence with white chocolate notes.', price: '₹ 350', image: imgRedVelvetCookie },

    // 3: Eggless Butter Cakes
    { id: 301, categoryId: 3, title: 'Eggless Vanilla Butter Cake', description: 'The purest, silkiest crumb infused with genuine vanilla pod extract.', price: '₹ 1,500', image: imgCookiePie },
    { id: 302, categoryId: 3, title: 'Eggless Chocolate Butter Cake', description: 'An intensely dark and fudgy masterpiece of artisanal cocoa.', price: '₹ 1,800', image: 'https://images.unsplash.com/photo-1542826438-bd32f43d626f?q=80&w=1200' },

    // 4: Whole Wheat Cookie Pies
    { id: 401, categoryId: 4, title: 'Coconut Phirni Cookie Pie', description: 'A magnificent homage combining crispy crust with creamy Indian phirni.', price: '₹ 1,200', image: imgPlainCookie },
    { id: 402, categoryId: 4, title: 'Pistachio Filling Cookie Pie', description: 'A deep-dish delight featuring a luscious core of pure pistachio butter.', price: '₹ 1,400', image: 'https://images.unsplash.com/photo-1514517521153-1be72277b32f?q=80&w=1200' },
    { id: 403, categoryId: 4, title: 'Chocolate Cookie Pie', description: 'Oversized, indulgent luxury pie brimming with molten artisan chocolate.', price: '₹ 1,200', image: 'https://images.unsplash.com/photo-1590080876403-9bbcdad45f9e?q=80&w=1200' },

    // 5: Center Filled Muffins
    { id: 501, categoryId: 5, title: 'Vanilla Chocolate Chip Muffins', description: 'Soft vanilla clouds enveloping intense dark chocolate hearts.', price: '₹ 300', image: imgPistachioCookies },
    { id: 502, categoryId: 5, title: 'Cranberry Chocolate Muffins', description: 'Tart ruby cranberries contrasting beautifully with chocolate warmth.', price: '₹ 350', image: 'https://images.unsplash.com/photo-1550993072-040f94a821e2?q=80&w=1200' },
    { id: 503, categoryId: 5, title: 'Banana Walnut Muffins', description: 'Classic comfort reimagined with a plush crumb and toasted nuts.', price: '₹ 300', image: 'https://images.unsplash.com/photo-1622896784083-cc051313dbab?q=80&w=1200' },
    { id: 504, categoryId: 5, title: 'Red Velvet Muffins', description: 'Elegant and velvety textured with a subtle cocoa finish.', price: '₹ 350', image: 'https://images.unsplash.com/photo-1612201142855-787db8754b52?q=80&w=1200' },
    { id: 505, categoryId: 5, title: 'Lemon Blueberry Muffins', description: 'A refreshing citrus profile studded with plump wild blueberries.', price: '₹ 350', image: 'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?q=80&w=1200' },
    { id: 506, categoryId: 5, title: 'Festive Elaichi Muffins', description: 'A fragrant touch of Indian elegance using ground cardamom.', price: '₹ 300', image: 'https://images.unsplash.com/photo-1606890737305-7caa6ebe6440?q=80&w=1200' },
    { id: 507, categoryId: 5, title: 'Coconut Burfi Muffins', description: 'An inspired creation bridging French patisserie and traditional Indian sweets.', price: '₹ 350', image: 'https://images.unsplash.com/photo-1549144498-8df0dfbb76a1?q=80&w=1200' },
    { id: 508, categoryId: 5, title: 'Kesar Pista Muffins', description: 'A majestic pairing of Himalayan saffron and roasted premium pistachios.', price: '₹ 450', image: 'https://images.unsplash.com/photo-1514517521153-1be72277b32f?q=80&w=1200' },
    { id: 509, categoryId: 5, title: 'Chocolate Peanut Muffins', description: 'A spectacular balance of sweet chocolate and roasted peanut crunch.', price: '₹ 350', image: 'https://images.unsplash.com/photo-1618923850107-010df042dcbd?q=80&w=1200' },
    { id: 510, categoryId: 5, title: 'Badam Chocolate Muffins', description: 'Luxurious notes of almond beautifully folded into deep cocoa.', price: '₹ 350', image: 'https://images.unsplash.com/photo-1515286576852-c625cde640ab?q=80&w=1200' },
    { id: 511, categoryId: 5, title: 'Banana Chocolate Muffins', description: 'The ultimate indulgence of sweet fruit and premium melted chocolate.', price: '₹ 350', image: 'https://images.unsplash.com/photo-1550993072-040f94a821e2?q=80&w=1200' }
];

function CategoryPage() {
    const { id } = useParams();
    const categoryId = parseInt(id, 10);
    const { triggerHaptic } = useHaptics();

    const info = categoryData[categoryId] || { title: 'Collection', description: 'Artisanal Selection' };
    const products = categoryProducts.filter(p => p.categoryId === categoryId);
    const displayProducts = products.length > 0 ? products : categoryProducts.slice(0, 4); // Fallback to show grid

    // Component to isolate image loading state per product
    const CategoryProductCard = ({ product, index }) => {
        const [imageLoaded, setImageLoaded] = useState(false);
        const [isPressed, setIsPressed] = useState(false);

        const handleOrder = (productTitle, productPrice) => {
            triggerHaptic([20]);
            const message = encodeURIComponent(`Hi, I'm interested in ordering: ${productTitle} (${productPrice})`);
            window.open(`https://wa.me/9111451111?text=${message}`, '_blank');
        };

        return (
            <div className={`cat-product-card fade-in delay-${(index % 5) + 1}`}>
                <div className={`cat-product-image-container ${!imageLoaded ? 'shimmer' : ''}`}>
                    <img
                        src={product.image}
                        alt={product.title}
                        className={`cat-product-image ${imageLoaded ? 'loaded' : 'loading'}`}
                        onLoad={() => setImageLoaded(true)}
                    />
                </div>
                <div className="cat-product-info">
                    <h3 className="cat-product-title">{product.title}</h3>
                    <p className="cat-product-desc">{product.description}</p>
                    <p className="cat-product-price">{product.price}</p>
                    <button
                        className={`btn-premium cat-product-order ${isPressed ? 'btn-pressed' : ''}`}
                        onClick={() => handleOrder(product.title, product.price)}
                        onPointerDown={() => setIsPressed(true)}
                        onPointerUp={() => setIsPressed(false)}
                        onPointerLeave={() => setIsPressed(false)}
                    >
                        Order
                    </button>
                </div>
            </div>
        );
    };

    useEffect(() => {
        window.scrollTo(0, 0);

        setTimeout(() => {
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
        }, 100);
    }, [id]);

    return (
        <div className="category-layout">
            <Header />

            <main className="category-main">
                <div className="container">
                    <Link to="/" className="back-link fade-in">&larr; Back to Atelier</Link>

                    <div className="category-header fade-in">
                        <h1 className="category-title heading-underline">{info.title}</h1>
                        <div className="category-divider"></div>
                        <p className="category-subtitle text-label" style={{ marginTop: 'var(--spacing-md)' }}>{info.description}</p>
                    </div>

                    <div className="category-grid">
                        {displayProducts.map((product, index) => (
                            <CategoryProductCard key={product.id} product={product} index={index} />
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default CategoryPage;
