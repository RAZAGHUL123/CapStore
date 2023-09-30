// InfiniteBox.jsx

import React from 'react';
import '../App.css';  // Import the CSS
import Footer from './Footer';  // Import the Footer component

export default function InfiniteBox({ children }) {
    return (
        <div className="infinite-box-container">
            <div className="infinite-box-content">
                {children}
            </div>
            <Footer />  {/* Add your Footer component here */}
        </div>
    );
}
