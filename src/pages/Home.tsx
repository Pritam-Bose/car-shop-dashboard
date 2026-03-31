import React, { useState, useMemo } from 'react';
import { cars } from '../data/cars';
import CarCard from '../components/CarCard';

const Home: React.FC = () => {
    const [query, setQuery] = useState('');

    const filtered = useMemo(() => {
        const q = query.toLowerCase().trim();
        if (!q) return cars;
        return cars.filter(c =>
            c.name.toLowerCase().includes(q) ||
            c.brand.toLowerCase().includes(q) ||
            c.price.toLowerCase().includes(q)
        );
    }, [query]);

    return (
        <div>
            <section className="hero">
                <div className="container">
                    <h1>Experience Luxury</h1>
                    <p>Discover our exclusive collection of high-performance vehicles designed for those who demand excellence.</p>
                </div>
            </section>

            <div className="container">
                {/* Search bar */}
                <div className="search-wrapper">
                    <span className="search-icon">🔍</span>
                    <input
                        className="search-input"
                        type="text"
                        placeholder="Search by name, brand or price…"
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                    />
                    {query && (
                        <button className="search-clear" onClick={() => setQuery('')}>✕</button>
                    )}
                </div>

                <div className="section-header">
                    <div>
                        <h2>Our Fleet</h2>
                        <p>
                            {filtered.length === cars.length
                                ? `${cars.length} premium vehicles available`
                                : `${filtered.length} of ${cars.length} vehicles`}
                        </p>
                    </div>
                </div>

                {filtered.length === 0 ? (
                    <div className="no-results">
                        <div style={{ fontSize: '3rem' }}>🚗</div>
                        <p>No cars match "<strong>{query}</strong>"</p>
                        <button className="view-all-btn" onClick={() => setQuery('')}>Clear Search</button>
                    </div>
                ) : (
                    <div className="car-grid">
                        {filtered.map(car => (
                            <CarCard key={car.id} car={car} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;
