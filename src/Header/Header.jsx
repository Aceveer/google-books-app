import React from "react";
import { Link } from "react-router-dom";
import '../styles/Header.css';
import logoImg from '../logo.png'; // Replace with your logo image path

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <Link to="/">
                    <img src={logoImg} alt="MyBookApp Logo" className="logo-img" />
                </Link>
            </div>
            <nav className="nav-links">
                <Link to="/recommendations">Recommendations</Link>
                <Link to="/my-reads">My Reads</Link>
                <Link to="/wishlist">Wishlist</Link>
            </nav>
            <div className="search-bar">
                <input type="text" placeholder="Search books..." />
            </div>
            <div className="user-profile">
                <Link to="/profile" className="profile-link">Profile</Link>
                <button className="logout-button">Logout</button>
            </div>
        </header>
    );
};

export default Header;
