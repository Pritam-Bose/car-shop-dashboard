import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Cart: React.FC = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, cartTotal, cartCount } = useCart();
  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return (
      <div className="empty-page">
        <div className="empty-icon">🛒</div>
        <h2>Your cart is empty</h2>
        <p>Add some cars to get started!</p>
        <button className="view-all-btn" onClick={() => navigate('/')}>Browse Cars</button>
      </div>
    );
  }

  return (
    <div className="container page-content">
      <h1 className="page-title">🛒 Your Cart <span className="count-badge">{cartCount}</span></h1>

      <div className="cart-layout">
        <div className="cart-items">
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-img"
                onError={e => { (e.target as HTMLImageElement).src = `https://placehold.co/120x80/1a1a2e/007aff?text=${encodeURIComponent(item.name)}`; }}
              />
              <div className="cart-item-info">
                <h3 onClick={() => navigate(`/car/${item.id}`)}>{item.name}</h3>
                <p className="cart-item-brand">{item.brand}</p>
                <p className="cart-item-price">{item.price}</p>
              </div>
              <div className="cart-item-qty">
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>−</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
              </div>
              <button className="remove-btn" onClick={() => removeFromCart(item.id)}>✕</button>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h2>Order Summary</h2>
          <div className="summary-row"><span>Items ({cartCount})</span><span>{cartTotal}</span></div>
          <div className="summary-row"><span>Delivery</span><span>Free</span></div>
          <div className="summary-total"><span>Total</span><span>{cartTotal}</span></div>
          <button className="checkout-btn">Proceed to Checkout →</button>
          <button className="clear-cart-btn" onClick={clearCart}>Clear Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
