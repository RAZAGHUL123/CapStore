import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const UserDashboard = () => {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch user data on component mount
    const fetchUserData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/users/1');
        if (!response.ok) throw new Error('Failed to fetch user data');

        const data = await response.json();
        setUserData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleProfileUpdate = async (event) => {
    event.preventDefault();
    // Implement API call to update user data here...
  };

  return loading ? (
    <p>Loading...</p>
  ) : (
    <Container style={{ backgroundColor: '#f8f9fa', padding: '20px' }}>
      <Row>
        <Col>
          <h1 style={{ color: '#007bff' }}>Welcome, {userData.name.firstname}!</h1>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <h2 style={{ color: '#007bff' }}>Profile Settings</h2>
          <Form onSubmit={handleProfileUpdate}>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" defaultValue={userData.email} />
            </Form.Group>
            <Form.Group controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" defaultValue={userData.username} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Update Profile
            </Button>
          </Form>
        </Col>
        <Col md={6}>
          <h2 style={{ color: '#007bff' }}>Address</h2>
          <p>{userData.address.street}, {userData.address.number}</p>
          <p>{userData.address.city}, {userData.address.zipcode}</p>
          <p>Location: {userData.address.geolocation.lat}, {userData.address.geolocation.long}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default UserDashboard;
