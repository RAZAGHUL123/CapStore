// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
    return (
        <footer style={styles.footer}>
            © 2023 fakeOptic
        </footer>
    );
}

const styles = {
    footer: {
        backgroundColor: "#333",
        color: "#fff",
        textAlign: "center",
        padding: "20px 0",
        position: "absolute",
        bottom: 0,
        width: "100%",
    }
}

export default Footer;
