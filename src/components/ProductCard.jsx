import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'; // Import Link from React Router
import { useCart } from './CartContext';

function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <Link to={`/product/${product.id}`}>
      <Card
        style={{ width: '18rem', marginBottom: '20px' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Card.Img variant="top" src={product.imageUrl} alt={product.name} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
            Price: ${product.price.toFixed(2)}
          </Card.Text>
          {isHovered && (
            <div>
              <Card.Text>Description: {product.description}</Card.Text>
              <Button variant="primary" onClick={handleAddToCart}>Add to Cart</Button>
            </div>
          )}
        </Card.Body>
      </Card>
    </Link>
  );
}

export default ProductCard;
