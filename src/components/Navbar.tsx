import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { useFavorites } from '../context/FavoritesContext';

const Navbar: React.FC = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const { cartCount } = useCart();
  const { favoritesCount } = useFavorites();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="container nav-content">
        <Link to="/" className="logo">CAR BRAND</Link>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/favorites" className="nav-icon-link">
            ❤️ <span className={`badge ${favoritesCount > 0 ? 'visible' : ''}`}>{favoritesCount}</span>
          </Link>
          <Link to="/cart" className="nav-icon-link">
            🛒 <span className={`badge ${cartCount > 0 ? 'visible' : ''}`}>{cartCount}</span>
          </Link>

          {isAuthenticated ? (
            <div className="user-menu">
              <button className="user-avatar" onClick={() => setMenuOpen(o => !o)}>
                {user?.name?.charAt(0).toUpperCase()}
              </button>
              {menuOpen && (
                <div className="user-dropdown">
                  <div className="user-dropdown-header">
                    <strong>{user?.name}</strong>
                    <small>{user?.email}</small>
                  </div>
                  <Link to="/dashboard" onClick={() => setMenuOpen(false)}>📊 Dashboard</Link>
                  <button onClick={handleLogout}>🚪 Logout</button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login" className="login-link">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
