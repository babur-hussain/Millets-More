import ProductCard from './ProductCard';
import './ProductShowcase.css';

const products = [
    {
        id: 1,
        title: 'The Noor Eclair',
        description: 'Pearl millet craquelin, infused saffron diplomat cream, 24k gold leaf.',
        price: '₹ 1,200',
        image: 'https://images.unsplash.com/photo-1549144498-8df0dfbb76a1?q=80&w=1200&auto=format&fit=crop',
        isLimited: true
    },
    {
        id: 2,
        title: 'Amrita Tart',
        description: 'Foxtail millet sable, dark chocolate ganache, candied rose petals.',
        price: '₹ 2,400',
        image: 'https://images.unsplash.com/photo-1514517521153-1be72277b32f?q=80&w=1200&auto=format&fit=crop'
    },
    {
        id: 3,
        title: 'Aura Mystique',
        description: 'Sorghum sponge, cardamom espresso buttercream, delicate caramel shard.',
        price: '₹ 3,500',
        image: 'https://images.unsplash.com/photo-1629828453412-68e3768ac064?q=80&w=1200&auto=format&fit=crop'
    }
];

function ProductShowcase() {
    return (
        <section className="showcase bg-ivory section-padding" id="collections">
            <div className="container">
                <div className="showcase-header fade-in">
                    <h2 className="showcase-title">Signature Collections</h2>
                    <p className="showcase-subtitle">The epitome of edible elegance</p>
                </div>

                <div className="showcase-grid">
                    {products.map(product => (
                        <ProductCard
                            key={product.id}
                            title={product.title}
                            description={product.description}
                            price={product.price}
                            image={product.image}
                            isLimited={product.isLimited}
                        />
                    ))}
                </div>

                <div className="showcase-footer fade-in">
                    <button className="hero-button">View Full Catalogue</button>
                </div>
            </div>
        </section>
    );
}

export default ProductShowcase;
