import React, { useState, useEffect } from 'react';
import { useCart } from '../CartContext'; // Adjust the path as per your project structure

const Home = () => {
  const [products, setProducts] = useState([
    {
      id: 1, 
      name: 'Stads', 
      price: 10000, 
      stock: 1, 
      image: '/images/pic1.jpg' 
    },
    { 
      id: 2, 
      name: 'Silver pieces', 
      price: 15000, 
      stock: 5, 
      image: '/images/pic2.jpg' 
    },
    { 
      id: 3, 
      name: 'Gold stads', 
      price: 10000, 
      stock: 8, 
      image: '/images/pic3.jpg' 
    },
    { 
      id: 4, 
      name: 'Gold stads', 
      price: 10000, 
      stock: 8, 
      image: '/images/pic3.jpg' 
    },
    { 
      id: 5, 
      name: 'Danglers', 
      price: 10000, 
      stock: 1, 
      image: '/images/pic4.jpg' 
    },
    { 
      id: 6, 
      name: 'Bronches', 
      price: 25000, 
      stock: 1, 
      image: '/images/pic5.jpg' 
    },
  ]); // Initialize as an empty array
  const { addToCart } = useCart(); // Destructure addToCart from useCart

  const handleAddToCart = (product) => {
    addToCart(product); // Add product to cart
    alert("Product added to cart!"); // Show plain alert message
  };

  return (
    <div className="home">
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        gap: '1rem', 
        padding: '1px', 
      }}>
        {products.length > 0 ? (
          products.map((product) => (
            <div
              key={product.id}
              style={{
                border: '1px solid rgb(214, 154, 91)', // Keeping border for the entire block (image + description)
                width: '30%',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                padding: '1rem',
                alignItems: 'center',
                borderRadius: '0.5rem',
                backgroundColor: 'rgb(221, 202, 184)', // Set a background color for the whole block
              }}
            >
              {/* Uniform Size for Image */}
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: '100%',
                  height: '300px', // Set a fixed height for uniform size
                  objectFit: 'cover', // Ensures the image fits the box without stretching
                  borderRadius: '0.5rem', // Rounded corners for the image
                  marginBottom: '0.5rem', // Reduced space between image and description
                }}
              />
              <div
                style={{
                  width: '100%', // Ensure the description container takes full width
                  padding: '0.5rem', // Reduced padding inside the description
                  color: 'white',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start', // Keeps the content packed at the top
                }}
              >
                <h2 style={{ marginBottom: '0.25rem' }}>{product.name}</h2> {/* Reduced space between name and price */}
                <p style={{ marginBottom: '0.25rem' }}>Price: {Math.round(product.price)}</p> {/* Reduced space between price and button */}
                <p style={{ marginBottom: '0.25rem' }}>Stock: {product.stock}</p> {/* Reduced space */}
                <button
                  style={{
                    width: '100%',
                    padding: '0.5rem', // Reduced padding
                    backgroundColor: '#ca8d5b',
                    color: 'white',
                    border: 'none',
                    borderRadius: '0.25rem',
                    cursor: 'pointer',
                  }}
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
