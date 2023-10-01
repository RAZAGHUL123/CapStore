import React, { useEffect, useState } from 'react';

const UserDashboard = ({ username }) => {
  const [userActivities, setUserActivities] = useState([]);
  const [userFavorites, setUserFavorites] = useState([]);
  const [userOrders, setUserOrders] = useState([]);
  const [userMessages, setUserMessages] = useState([]);
  const [recommendedProducts, setRecommendedProducts] = useState([]);
  // Add state for user profile, wishlist, and address book

  useEffect(() => {
    // Fetch user activities based on username
    fetch(`https://fakestoreapi.com/users?username=${username}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          // Assume the API provides user-related data structure
          const user = data[0];

          setUserActivities(user.activities);
          setUserFavorites(user.favorites);
          setUserOrders(user.orders);
          setUserMessages(user.messages);
          // Set state for user profile, wishlist, and address book based on user data

          // Simulate recommended products based on user's activities
          const viewedProducts = user.activities.map((activity) => activity.product);
          const recommended = getRecommendedProducts(viewedProducts);
          setRecommendedProducts(recommended);
        }
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, [username]);

  // Function to simulate product recommendation logic
  const getRecommendedProducts = () => {
    // In a real application, this logic would involve recommendations based on user behavior.
    // For simplicity, let's return a few random products here.
    const randomProductIds = [1, 2, 3, 4, 5]; // Replace with actual product IDs
    const recommended = randomProductIds.map((productId) => {
      // Fetch recommended products based on productId
      // This is a placeholder and should be replaced with an API call to fetch actual product data.
      return fetch(`https://fakestoreapi.com/products/${productId}`)
        .then((response) => response.json())
        .then((data) => data)
        .catch((error) => {
          console.error('Error fetching recommended product:', error);
        });
    });
    return Promise.all(recommended);
  };

  return (
    <div className="container mt-5">
      <div className="jumbotron">
        <h1 className="display-4">Welcome back, {username}!</h1>
        <p className="lead">Here's a summary of your activities.</p>
        <hr className="my-4" />
      </div>
      <div className="row">
        {/* Existing user activity sections */}
        {/* ... */}
        <div className="col-md-3">
          <div className="card">
            <div className="card-header">Recommended Products</div>
            <ul className="list-group list-group-flush">
              {recommendedProducts.map((product, index) => (
                <li key={index} className="list-group-item">
                  {product.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
