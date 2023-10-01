import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'; 
import { useCart } from './CartContext';

function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = (event) => {
    event.preventDefault(); 
    addToCart(product);
  };

  return (
    <Card
      style={{ 
        width: '250px', 
        height: '400px',
        marginBottom: '15px', 
        overflow: 'hidden'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <Card.Img 
          variant="top" 
          src={product.image} 
          alt={product.title}
          style={{
            width: '50%',
            height: '60%',
            objectFit: 'cover',
            objectPosition: 'center'
          }} 
        />
        <Card.Body style={{ padding: '10px' }}>
          <Card.Title style={{ fontSize: '16px', marginBottom: '5px' }}>{product.title}</Card.Title>
          <Card.Text style={{ marginBottom: '5px' }}>
            Price: ${product.price.toFixed(2)}
          </Card.Text>
          {isHovered && (
            <div>
              <Card.Text 
                style={{ 
                  fontSize: '12px', 
                  overflow: 'hidden', 
                  textOverflow: 'ellipsis', 
                  whiteSpace: 'nowrap',
                  marginBottom: '5px'
                }}
              >
                Description: {product.description}
              </Card.Text>
              <Button variant="primary" size="sm" onClick={handleAddToCart}>Add to Cart</Button>
            </div>
          )}
        </Card.Body>
      </Link>
    </Card>
  );
}

export default ProductCard;
