import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

function CheckoutForm() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    paymentDetails: '',
    email: '',
  });

  const [formVisible, setFormVisible] = useState(false);
  const [formCompleted, setFormCompleted] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleToggleForm = () => {
    setFormVisible(!formVisible);
  };

  const handleProcessOrder = () => {
    // Perform the order processing logic here
    console.log('Order processed successfully with data:', formData);
    setFormCompleted(true);
  };

  if (formCompleted) {
    // Redirect to the order completed window after processing the order
    return <Navigate to="/order-completed" />;
  }

  return (
    <div className="container mt-4">
      <h2>Checkout Form</h2>
      {formVisible ? (
        <form>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label>Address:</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label>Payment Details:</label>
            <input
              type="text"
              name="paymentDetails"
              value={formData.paymentDetails}
              onChange={handleInputChange}
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="form-control"
              required
            />
          </div>
          <button onClick={handleProcessOrder} className="btn btn-primary">
            Process Order
          </button>
          <br />
          <Link to="/checkout">Back to Order Summary</Link>
        </form>
      ) : (
        <div className="plus-bar" onClick={handleToggleForm}>
          <span>+</span> Add Information
        </div>
      )}
    </div>
  );
}

export default CheckoutForm;
