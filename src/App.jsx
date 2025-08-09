
import './App.css';

const bags = [
  { name: 'Classic Leather Tote', price: '$120', img: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80' },
  { name: 'Urban Backpack', price: '$85', img: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=400&q=80' },
  { name: 'Elegant Handbag', price: '$150', img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80' },
  { name: 'Travel Duffel', price: '$110', img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80' },
  { name: 'Canvas Messenger', price: '$95', img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80' },
];

function App() {
  return (
    <div className="bags-store-container">
      <header className="bags-hero">
        <h1 className="bags-title">Bag Boutique</h1>
        <p className="bags-subtitle">Discover stylish bags for every occasion</p>
        <a href="#shop" className="bags-cta">Shop Now</a>
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
  );
}

export default App;
