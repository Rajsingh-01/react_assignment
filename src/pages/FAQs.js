import React, { useState } from "react";
import "./FAQs.css"; // Importing the CSS for styling

const FAQs = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="faqs">
        <h3 onClick={toggleDropdown} className="faq-question">
          Who is this course for?
          <span className={`dropdown-icon ${isOpen ? "open" : ""}`}>
            {isOpen ? "▲" : "▼"}
          </span>
        </h3>
        {isOpen && (
          <p className="faq-answer">
            This course is perfect for beginners, hobbyists, and aspiring
            digital artists who want to learn digital illustration from scratch.
            No prior experience required!
          </p>
        )}
        
      </div>
      <button className="get-started-btn">Let's get started</button>


      <div className="enroll-now">
        <h3>Ready to start your digital art journey?</h3>
        <p>Click below to secure your spot & start creating!</p>
        <button className="enroll-btn">Enroll Now</button>
      </div>
    </>
  );
};

export default FAQs;
