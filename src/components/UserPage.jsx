// components/UserPage.jsx
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function UserPage() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Here you'd typically fetch the user data from an API, but for this example, 
    // I'll just use the data you provided
    const fetchedData = {
      address: {
        geolocation: {},
        city: 'kilcoole',
        street: 'new road',
        number: 7682,
        zipcode: '12926-3874'
      },
      email: "john@gmail.com",
      id: 1,
      name: { firstname: 'john', lastname: 'doe' },
      password: "m38rmF$",
      phone: "1-570-236-7033",
      username: "johnd"
    };

    setUserData(fetchedData);
  }, []);

  return (
    <div className="container mt-4">
      <h2>User Profile</h2>
      {userData && (
        <div>
          <p><strong>Name:</strong> {userData.name.firstname} {userData.name.lastname}</p>
          <p><strong>Username:</strong> {userData.username}</p>
          <p><strong>Email:</strong> {userData.email}</p>
          <p><strong>Phone:</strong> {userData.phone}</p>
          <p><strong>Address:</strong> {userData.address.street} {userData.address.number}, {userData.address.city}, {userData.address.zipcode}</p>
        </div>
      )}
    </div>
  );
}

export default UserPage;
