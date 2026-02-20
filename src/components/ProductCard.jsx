import './ProductCard.css';

function ProductCard({ image, title, description, price, delayClass = '' }) {
    const handleOrder = () => {
        const message = encodeURIComponent(`Hi, I'm interested in ordering: ${title} (${price})`);
        window.open(`https://wa.me/9111451111?text=${message}`, '_blank');
    };

    return (
        <div className={`product-card fade-in ${delayClass}`}>
            <div className="product-image-container">
                <img src={image} alt={title} className="product-image" />
                <div className="product-overlay">
                    <button className="btn-premium product-action" onClick={handleOrder}>Order Now</button>
                </div>
            </div>
            <div className="product-info">
                <h3 className="product-title">{title}</h3>
                <p className="product-desc">{description}</p>
                <span className="product-price">{price}</span>
            </div>
        </div>
    );
}

export default ProductCard;
