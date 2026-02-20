import ProductCard from './ProductCard';
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
    }
];

function FeaturedProducts() {
    return (
        <section className="featured section-padding" id="featured">
            <div className="container">
                <div className="showcase-header fade-in">
                    <p className="text-label">Shop Editor's Pick</p>
                    <h2 className="showcase-title heading-underline">Featured Products</h2>
                </div>

                <div className="showcase-grid">
                    {featuredProducts.map((product, index) => (
                        <ProductCard
                            key={product.id}
                            title={product.title}
                            description={product.description}
                            price={product.price}
                            image={product.image}
                            delayClass={`delay-${(index % 5) + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FeaturedProducts;
