import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';
import '../App.css';

function StorePage() {
  // ... (Rest of the state and hooks)
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Effect to fetch products and categories
  useEffect(() => {
    async function fetchData() {
      try {
        const productsResponse = await fetch('https://fakestoreapi.com/products');
        const productsData = await productsResponse.json();
        setProducts(productsData);

        const categoriesResponse = await fetch('https://fakestoreapi.com/products/categories');
        const categoriesData = await categoriesResponse.json();
        setCategories(categoriesData);

        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  // Effect to filter products based on selected category and search term
  useEffect(() => {
    let filtered = [...products];

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, searchTerm, products]); 
  // ... (rest of your code for states and effects)

  const handleCategoryClick = category => {
    setSelectedCategory(category);
  };

  const getProductsByCategory = category => {
    return products.filter(product => product.category === category);
  };

  return (
    <div className="store-container">
      <h1>Welcome to the Fake Store - Store Page</h1>
      <div className="store-content">
        <div className="filter-sidebar">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
          <button
            className={selectedCategory === 'All' ? 'selected' : ''}
            onClick={() => handleCategoryClick('All')}
          >
            All
          </button>
          {categories.map(category => (
            <button
              key={category}
              className={selectedCategory === category ? 'selected' : ''}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="product-display-area">
          {loading ? <p>Loading...</p> : null}
          {error ? <p>Error loading products. Please try again later.</p> : null}

          {!loading && !error && categories.map(category => (
            <div key={category} className="category-section">
              <h2>{category}</h2>
              <div className="products-row">
                {getProductsByCategory(category).map(product => (
                  <Link key={product.id} to={`/product/${product.id}`} className="product-card-link">
                    <ProductCard product={product} />
                  </Link>
                ))}
              </div>
            </div>
          ))}

          {!loading && !error && selectedCategory !== 'All' && (
            <div className="products-row">
              {filteredProducts.map(product => (
                <Link key={product.id} to={`/product/${product.id}`} className="product-card-link">
                  <ProductCard product={product} />
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default StorePage;
