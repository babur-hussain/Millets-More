import ProductCard from './ProductCard';
import './BestSellers.css';

const bestSellers = [
    {
        id: 1,
        title: 'Saffron Pearl Eclair',
        description: 'Millet craquelin with delicate saffron cream.',
        price: '₹ 800',
        image: 'https://images.unsplash.com/photo-1549144498-8df0dfbb76a1?q=80&w=1200&auto=format&fit=crop'
    },
    {
        id: 2,
        title: 'Rosewater Pistachio Slice',
        description: 'Sorghum sponge embedded with roasted pistachios.',
        price: '₹ 1,200',
        image: 'https://images.unsplash.com/photo-1514517521153-1be72277b32f?q=80&w=1200&auto=format&fit=crop'
    }
];

function BestSellers() {
    return (
        <section className="best-sellers section-padding" id="best-sellers">
            <div className="container">
                <div className="best-sellers-header fade-in">
                    <h2 className="showcase-title heading-underline" style={{ fontSize: '2rem' }}>Quick Best Sellers</h2>
                </div>

                <div className="best-sellers-grid">
                    {bestSellers.map(product => (
                        <ProductCard
                            key={product.id}
                            title={product.title}
                            description={product.description}
                            price={product.price}
                            image={product.image}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default BestSellers;
