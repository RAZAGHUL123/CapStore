import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';

// Assuming you have already implemented the EndlessCarousel as previously described:
import EndlessCarousel from './EndlessCarousel';

function StorePage() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const productsResponse = await fetch('https://fakestoreapi.com/products');
        const productsData = await productsResponse.json();
        setProducts(productsData);
        setFilteredProducts(productsData);

        const categoriesResponse = await fetch('https://fakestoreapi.com/products/categories');
        const categoriesData = await categoriesResponse.json();
        setCategories(categoriesData);

        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    let filtered = products;

    if (selectedCategory !== 'All') {
      filtered = filtered.filter((product) => product.category === selectedCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, searchTerm, products]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const getProductsByCategory = (category) => {
    return products.filter((product) => product.category === category);
  };

  return (
    <div>
      <h1>Welcome to the Fake Store - Store Page</h1>
      <div className="filter-bar">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className={selectedCategory === 'All' ? 'selected' : ''}
          onClick={() => handleCategoryClick('All')}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            className={selectedCategory === category ? 'selected' : ''}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="product-list">
        {loading && <p>Loading...</p>}
        {error && <p>Error loading products. Please try again later.</p>}

        {!loading && !error && selectedCategory === 'All' && categories.map(category => (
          <div key={category}>
            <h2>{category}</h2>
            <EndlessCarousel 
              items={getProductsByCategory(category).map(product => (
                <Link key={product.id} to={`/product/${product.id}`}>
                  <ProductCard
                    product={{
                      id: product.id,
                      name: product.title,
                      price: product.price,
                      imageUrl: product.image,
                    }}
                  />
                </Link>
              ))}
            />
          </div>
        ))}

        {!loading && !error && selectedCategory !== 'All' && (
          <EndlessCarousel 
            items={filteredProducts.map(product => (
              <Link key={product.id} to={`/product/${product.id}`}>
                <ProductCard
                  product={{
                    id: product.id,
                    name: product.title,
                    price: product.price,
                    imageUrl: product.image,
                  }}
                />
              </Link>
            ))}
          />
        )}

        {!loading && !error && filteredProducts.length === 0 && <p>No products found.</p>}
      </div>
    </div>
  );
}

export default StorePage;
