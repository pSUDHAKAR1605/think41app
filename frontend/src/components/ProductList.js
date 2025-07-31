// src/components/ProductList.js
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/products/')
      .then(res => setProducts(res.data))
      .catch(() => setError('Failed to fetch products'))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      {products.map(product => (
        <Link
          key={product.id}
          to={`/products/${product.id}`}
          style={{
            border: '1px solid #ccc',
            padding: '10px',
            width: '200px',
            textDecoration: 'none',
            color: 'black'
          }}
        >
          <h4>{product.name}</h4>
          <p>₹{product.price}</p>
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
