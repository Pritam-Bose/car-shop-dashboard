import React from 'react';
import { useFavorites } from '../context/FavoritesContext';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Favorites: React.FC = () => {
  const { favorites, toggleFavorite } = useFavorites();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  if (favorites.length === 0) {
    return (
      <div className="empty-page">
        <div className="empty-icon">❤️</div>
        <h2>No saved cars yet</h2>
        <p>Click the heart on any car to save it here!</p>
        <button className="view-all-btn" onClick={() => navigate('/')}>Browse Cars</button>
      </div>
    );
  }

  return (
    <div className="container page-content">
      <h1 className="page-title">❤️ Favorites <span className="count-badge">{favorites.length}</span></h1>
      <div className="car-grid">
        {favorites.map(car => (
          <div key={car.id} className="car-card fav-card">
            <div className="car-card-image-wrapper">
              <img
                src={car.image}
                alt={car.name}
                onError={e => { (e.target as HTMLImageElement).src = `https://placehold.co/400x240/1a1a2e/007aff?text=${encodeURIComponent(car.name)}`; }}
                onClick={() => navigate(`/car/${car.id}`)}
              />
              <button className="fav-btn active" onClick={() => toggleFavorite(car)}>❤️</button>
              <div className="car-brand-badge">{car.brand}</div>
            </div>
            <div className="car-info">
              <h3 onClick={() => navigate(`/car/${car.id}`)}>{car.name}</h3>
              <p className="price">{car.price}</p>
              <button className="add-cart-btn" onClick={() => addToCart(car)}>🛒 Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
