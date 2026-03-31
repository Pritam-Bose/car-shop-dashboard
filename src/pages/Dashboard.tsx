import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { useFavorites } from '../context/FavoritesContext';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const { user, logout } = useAuth();
  const { cartItems, cartTotal, cartCount } = useCart();
  const { favorites } = useFavorites();
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <div className="container">
        <div className="dashboard-header">
          <div>
            <h1>Welcome back, {user?.name} 👋</h1>
            <p className="dashboard-subtitle">{user?.email}</p>
          </div>
          <button className="logout-btn" onClick={() => { logout(); navigate('/'); }}>
            🚪 Logout
          </button>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">🛒</div>
            <div className="stat-value">{cartCount}</div>
            <div className="stat-label">Items in Cart</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">❤️</div>
            <div className="stat-value">{favorites.length}</div>
            <div className="stat-label">Saved Cars</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">💰</div>
            <div className="stat-value">{cartTotal}</div>
            <div className="stat-label">Cart Value</div>
          </div>
        </div>

        {cartItems.length > 0 && (
          <div className="dashboard-section">
            <h2>Your Cart</h2>
            <div className="dashboard-list">
              {cartItems.map(item => (
                <div key={item.id} className="dashboard-list-item">
                  <span className="dli-name">{item.name}</span>
                  <span className="dli-qty">×{item.quantity}</span>
                  <span className="dli-price">{item.price}</span>
                </div>
              ))}
            </div>
            <button className="view-all-btn" onClick={() => navigate('/cart')}>View Cart →</button>
          </div>
        )}

        {favorites.length > 0 && (
          <div className="dashboard-section">
            <h2>Your Favorites</h2>
            <div className="dashboard-list">
              {favorites.map(car => (
                <div key={car.id} className="dashboard-list-item" onClick={() => navigate(`/car/${car.id}`)}>
                  <span className="dli-name">{car.name}</span>
                  <span className="dli-price">{car.price}</span>
                </div>
              ))}
            </div>
            <button className="view-all-btn" onClick={() => navigate('/favorites')}>View Favorites →</button>
          </div>
        )}

        {cartItems.length === 0 && favorites.length === 0 && (
          <div className="dashboard-empty">
            <div style={{ fontSize: '4rem' }}>🏎️</div>
            <p>Start exploring our fleet to add cars to your cart or favorites!</p>
            <button className="view-all-btn" onClick={() => navigate('/')}>Browse Cars →</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
