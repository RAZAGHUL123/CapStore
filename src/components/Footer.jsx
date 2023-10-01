import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-4 footer">
            <Container className="d-flex">
                {/* For demonstration, added multiple footer items */}
                <div className="footer-item">Welcome to the best store</div>
                <div className="footer-item">check out our fresh ware</div>
                <div className="footer-item">ask about our discount</div>
            </Container>
        </footer>
    );
}

export default Footer;
