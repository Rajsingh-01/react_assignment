import React from "react";
import { Link } from "react-router-dom";
import './Header.css'; // Import the CSS file
import img001 from '../assets/img001.jpg'; // Correct path to the image

const Header = () => {
  return (
    <div className="nav">
      <button className="get-started-btn">
        <Link to="/get-started">Get Started</Link>
      </button>

      <div className="header-name">
        Master the Art of Digital Illustration
      </div>

      <div className="header-name-2">
        A 4-week Course Designed For Beginners & Enthusiasts!
      </div>

      {/* Add the image below the subheader */}
      <img src={img001} alt="Digital Illustration" className="header-img" />

      <div className="header-name-3">
        Learn to create stunning digital artwork with step-by-step 
        guidance from industry experts. No prior experience required. 
        Just your creativity! Enroll now for ₹7,999
      </div>

      <button className="secure-spot-btn">
        Secure Your Spot for Just ₹79
      </button>

      <p>
        Use a coupon code within 15 minutes to unlock a special bonus pack!
      </p>
    </div>
  );
};

export default Header;
