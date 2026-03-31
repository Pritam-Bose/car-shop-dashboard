import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { cars } from '../data/cars';
import { useCart } from '../context/CartContext';
import { useFavorites } from '../context/FavoritesContext';

const CarDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();
  const car = cars.find(c => c.id === Number(id));
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  if (!car) {
    return (
      <div className="container" style={{ padding: '100px 0', textAlign: 'center' }}>
        <div style={{ fontSize: '4rem' }}>🚫</div>
        <h2 style={{ marginTop: '20px' }}>Car not found</h2>
        <button onClick={() => navigate('/')} className="back-btn" style={{ marginTop: '20px' }}>Back to Home</button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(car);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 1800);
  };

  const fallbackImage = `https://placehold.co/800x500/1a1a2e/007aff?text=${encodeURIComponent(car.name)}`;

  return (
    <div className="container car-detail">
      <button onClick={() => navigate('/')} className="detail-back-btn">← Back</button>
      <div className="detail-content">
        <div className="detail-image">
          {!imgLoaded && (
            <div className="img-skeleton detail-skeleton">
              <div className="skeleton-shimmer" />
            </div>
          )}
          <img
            src={imgError ? fallbackImage : car.image}
            alt={car.name}
            onLoad={() => setImgLoaded(true)}
            onError={() => { setImgError(true); setImgLoaded(true); }}
            style={{ opacity: imgLoaded ? 1 : 0, transition: 'opacity 0.4s' }}
          />
        </div>

        <div className="detail-info">
          <div className="detail-brand">{car.brand}</div>
          <h1>{car.name}</h1>
          <p className="price">{car.price}</p>
          <p className="detail-description">{car.description}</p>

          {car.specs && (
            <div className="specs-grid">
              <div className="spec-item">
                <span className="spec-label">Engine</span>
                <span className="spec-value">{car.specs.engine}</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Power</span>
                <span className="spec-value">{car.specs.power}</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">0-60 mph</span>
                <span className="spec-value">{car.specs.acceleration}</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Top Speed</span>
                <span className="spec-value">{car.specs.topSpeed}</span>
              </div>
            </div>
          )}

          <div className="detail-actions">
            <button className={`add-cart-btn-lg ${addedToCart ? 'added' : ''}`} onClick={handleAddToCart}>
              {addedToCart ? '✓ Added to Cart!' : '🛒 Add to Cart'}
            </button>
            <button
              className={`fav-btn-lg ${isFavorite(car.id) ? 'active' : ''}`}
              onClick={() => toggleFavorite(car)}
            >
              {isFavorite(car.id) ? '❤️ Saved' : '🤍 Save'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetail;
