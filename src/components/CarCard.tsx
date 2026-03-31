import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { type Car } from '../data/cars';
import { useCart } from '../context/CartContext';
import { useFavorites } from '../context/FavoritesContext';

interface CarCardProps {
  car: Car;
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(car);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 1500);
  };

  const handleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleFavorite(car);
  };

  const fallbackImage = `https://placehold.co/400x240/1a1a2e/007aff?text=${encodeURIComponent(car.name)}`;

  return (
    <div className="car-card" onClick={() => navigate(`/car/${car.id}`)}>
      <div className="car-card-image-wrapper">
        {!imgLoaded && !imgError && (
          <div className="img-skeleton">
            <div className="skeleton-shimmer" />
          </div>
        )}
        <img
          src={imgError ? fallbackImage : car.image}
          alt={car.name}
          onLoad={() => setImgLoaded(true)}
          onError={() => { setImgError(true); setImgLoaded(true); }}
          style={{ opacity: imgLoaded ? 1 : 0 }}
        />
        <button
          className={`fav-btn ${isFavorite(car.id) ? 'active' : ''}`}
          onClick={handleFavorite}
          title={isFavorite(car.id) ? 'Remove from favorites' : 'Add to favorites'}
        >
          {isFavorite(car.id) ? '❤️' : '🤍'}
        </button>
        <div className="car-brand-badge">{car.brand}</div>
      </div>

      <div className="car-info">
        <h3>{car.name}</h3>
        <p className="price">{car.price}</p>
        {car.specs && (
          <div className="car-specs-mini">
            <span>⚡ {car.specs.power}</span>
            <span>🏎️ {car.specs.acceleration}</span>
          </div>
        )}
        <button
          className={`add-cart-btn ${addedToCart ? 'added' : ''}`}
          onClick={handleAddToCart}
        >
          {addedToCart ? '✓ Added!' : '🛒 Add to Cart'}
        </button>
      </div>
    </div>
  );
};

export default CarCard;
