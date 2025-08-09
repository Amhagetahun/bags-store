

import './App.css';
import customBagImg from './assets/4954243041225452996.jpg';
import tiktokProfileImg from './assets/4954243041225453000.jpg';

const bags = [
  { name: 'Classic Leather Tote', price: '$120', img: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80' },
  { name: 'Urban Backpack', price: '$85', img: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=400&q=80' },
  { name: 'Elegant Handbag', price: '$150', img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80' },
  { name: 'Travel Duffel', price: '$110', img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80' },
  { name: 'Canvas Messenger', price: '$95', img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80' },
  { name: "Custom Bag", price: "$99", img: customBagImg },
];



function App() {
  return (
    <div className="bags-store-container" style={{ display: 'flex', flexDirection: 'row', minHeight: '100vh' }}>
      {/* TikTok Profile Sidebar - left side */}
      <div style={{
        position: 'relative',
        top: '-20rem',
        left: '2rem',
        background: 'rgba(255,246,249,0.95)',
        borderRadius: '2rem',
        boxShadow: '0 4px 24px 0 rgba(255, 182, 185, 0.18)',
        padding: '2rem 1rem',
        zIndex: 100,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minWidth: '340px',
        height: '100%',
        marginRight: '2rem',
        justifyContent: 'flex-start',
      }}>
        <img src={tiktokProfileImg} alt="TikTok Profile" style={{ width: 340, height: 560, borderRadius: '2rem', border: '7px solid #ffe066', boxShadow: '0 8px 32px #ffb6b9', objectFit: 'cover', marginBottom: '1rem', display: 'block' }} />
        <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer" style={{
          color: '#14213d',
          fontWeight: 700,
          textDecoration: 'none',
          fontSize: '1rem',
          marginTop: '0.5rem',
          padding: '1rem 2.5rem',
          background: 'linear-gradient(90deg, #ffe066 0%, #ffb6b9 100%)',
          borderRadius: '1.5rem',
          boxShadow: '0 2px 8px #ffb6b9',
          display: 'inline-block',
        }}>
          Visit TikTok
        </a>
      </div>

      {/* Main content shifted right */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* Custom Logo */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '2rem', marginBottom: '1rem' }}>
          <div style={{
            background: 'linear-gradient(90deg, #ffe066 0%, #ffb6b9 100%)',
            borderRadius: '2rem',
            boxShadow: '0 4px 24px 0 rgba(255, 182, 185, 0.13)',
            padding: '1.2rem 2.5rem',
            display: 'flex',
            alignItems: 'center',
            fontSize: '2.2rem',
            fontWeight: 900,
            color: '#14213d',
            letterSpacing: '2px',
          }}>
            <span role="img" aria-label="bag">👜</span>
            <span style={{ margin: '0 0.7rem' }}>Kido's Bag Boutique</span>
            <span role="img" aria-label="flower">🌸</span>
          </div>
        </div>

        <header className="bags-hero">
          <p className="bags-subtitle">Welcome, girls! <span role="img" aria-label="bag">👜</span> <span role="img" aria-label="heart">💖</span> <span role="img" aria-label="flower">🌷</span></p>
          <p style={{ fontSize: '1.1rem', color: '#d72660', fontWeight: 500, marginBottom: '1.5rem' }}>
            Explore a world of fun, color, and style! <span role="img" aria-label="flower">🌸</span> <span role="img" aria-label="flower">🌼</span> <span role="img" aria-label="flower">🌺</span> <br/>
            Find your perfect bag and let your personality bloom with our playful collection. Designed for kids and girls who love flowers, fashion, and fun!
          </p>
          <a href="#shop" className="bags-cta">Shop Now <span role="img" aria-label="flower">🌻</span></a>
        </header>

        <section className="bags-grid" id="shop">
          {bags.map((bag, idx) => (
            <div className="bag-card" key={idx}>
              <img src={bag.img} alt={bag.name} className="bag-img" />
              <h2 className="bag-name">{bag.name}</h2>
              <p className="bag-price">{bag.price}</p>
              <button className="bag-buy">Buy</button>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

export default App;
