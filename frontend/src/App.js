// src/App.js
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';
import ProductList from './components/ProductList';

function App() {
  return (
    <Router>
      <div style={{ padding: '20px' }}>
        <h1>E-commerce App</h1>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
