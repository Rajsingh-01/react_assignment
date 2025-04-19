import React from "react";
import './CourseDetails.css'; // Importing the CSS file

const CourseDetails = () => {
  return (
    <>
      <div className="course-container">
        <h2>With this course, You get:</h2>
        <ul className="course-list">
          <li>Hands-on Lessons - learn digital painting, shading & composition</li>
          <li>Tool Mastery – Master Procreate, Photoshop, & Illustrator</li>
          <li>Exclusive Resource Pack – Brushes, templates & textures</li>
          <li>Live Mentorship – Weekly Q&A sessions with industry pros</li>
          <li>Project-Based Learning – Build a stunning portfolio</li>
          <li>Certificate of Completion – Boost your creative career</li>
          <li>Community Access – Network with fellow artists</li>
        </ul>
        <button className="book-now-button">Book Now for ₹79</button>
      </div>

      <div className="testimoniol-video">
        {/* Video section */}
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/QCw4RiWQA_E"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Course Introduction Video" // Added title for accessibility
          ></iframe>
        </div>

        {/* Feedback Cards Section */}
        <div className="feedback-cards">
          <div className="feedback-card">
            <div className="feedback-card-content">
              <p className="name">Aditi Verma</p>
              <p className="age">Age: 22</p>
              <p className="feedback">"This service is fantastic! It has really helped me improve my skills."</p>
            </div>
          </div>
          <div className="feedback-card">
            <div className="feedback-card-content">
              <p className="name">Rajesh Khana</p>
              <p className="age">Age: 30</p>
              <p className="feedback">"A wonderful experience! Highly recommend to anyone looking to improve."</p>
            </div>
          </div>
        </div>
      </div>

      <div className="facilities">
        <h2>Is this right for you</h2>
        <h3>Everybody is fond of Digital Art! You need it too.</h3>
        <h4>Event planners & Wedding Services</h4>
        
        <p><strong>E-commerce Places:</strong> <span className="shopSphere">ShopSphere</span>, <span className="trendyMart">TrendyMart</span>, <span className="swiftShopper">SwiftShopper</span>, <span className="clickNBuy">ClickNBuy</span>, <span className="ezyCart">EzyCart</span>, <span className="trendBazaar">TrendBazaar</span>, <span className="shopWagon">ShopWagon</span>, <span className="buyNGo">BuyNGo</span>.</p>
        
        <p><strong>Retail Shops:</strong> <span className="urbanBoutique">Urban Boutique</span>, <span className="primeRetailers">Prime Retailers</span>, <span className="shopOasis">ShopOasis</span>, <span className="retailStop">The Retail Stop</span>, <span className="luxeCart">LuxeCart</span>, <span className="marketLane">The Market Lane</span>, <span className="retailHaven">Retail Haven</span>, <span className="trendCentral">TrendCentral</span>.</p>
        
        <p><strong>Gyms:</strong> <span className="powerHouse">PowerHouse Gym</span>, <span className="flexZone">FlexZone Fitness</span>, <span className="peakPerformance">Peak Performance Gym</span>, <span className="fitHub">FitHub</span>, <span className="ironX">IronX Gym</span>, <span className="pulseFitness">Pulse Fitness</span>, <span className="strengthLab">Strength Lab</span>, <span className="coreFit">CoreFit Gym</span>.</p>
        
        <p><strong>Barber Shops:</strong> <span className="barbersChair">The Barber's Chair</span>, <span className="sharpCuts">SharpCuts Barber Shop</span>, <span className="fadeMasters">FadeMasters</span>, <span className="crownClippers">Crown & Clippers</span>, <span className="gentlemansGroom">The Gentleman's Groom</span>, <span className="classicShave">Classic Shave</span>, <span className="razorsEdge">Razor's Edge</span>, <span className="eliteBarbers">Elite Barbers</span>.</p>
        
        <p><strong>Car Showrooms:</strong> <span className="autoGlide">AutoGlide Showroom</span>, <span className="prestigeMotors">Prestige Motors</span>, <span className="driveLine">DriveLine Autos</span>, <span className="speedsterShowroom">Speedster Showroom</span>, <span className="eliteWheels">Elite Wheels</span>, <span className="autoTrend">AutoTrend Showroom</span>, <span className="nextDrive">NextDrive Motors</span>, <span className="rideCity">RideCity Showroom</span>.</p>
        
        <p><strong>Doctors & Clinics:</strong> <span className="healthFirst">HealthFirst Clinic</span>, <span className="primeCare">PrimeCare Medical</span>, <span className="vitalWellness">VitalWellness Clinic</span>, <span className="mediCare">MediCare Hub</span>, <span className="everCare">EverCare Health</span>, <span className="pathwayMedical">Pathway Medical Center</span>, <span className="brightPath">BrightPath Clinic</span>, <span className="wellBeing">WellBeing Medical</span>.</p>
      </div>

      <div className="being-satisfied">
        <h1> Not satisfied yet ?</h1>
        <h4> We got you! Here are a few extra features</h4>
        <div className="course-container">
          <h2>With this course, You get:</h2>
          <ul className="Satisfied-list">
            <li>Sketching Basics – Shape, form, and proportion fundamentals</li>
            <li>Digital Painting – Master shading, blending & coloring techniques</li>
            <li>Tool Mastery – Hands-on with Procreate, Photoshop & Illustrator</li>
            <li>Character & Concept Art – Create professional-grade designs</li>
            <li>Portfolio Building – Craft stunning pieces to showcase your skills</li>
            <li>Bonus: Monetization Guide – How to sell your art & get freelance gigs</li>
            <li>Project-Based Learning – Build a stunning portfolio</li>
            <li>Live Mentorship – Weekly Q&A sessions with industry pros</li>
          </ul>
          <button className="book-now-button">Book Now for ₹79</button>
        </div>
      </div>

      <div className="enrollment-section">
        <h1>Enroll Now for ₹7,999</h1>

        <div className="enrollment-container">
          <ul className="enrollment-list">
            <li>Secure Your Spot for Just ₹79</li>
            <li>Bonus Offer: Apply a coupon code within 15 minutes to unlock:</li>
            <li>Exclusive Brush & Texture Pack</li>
            <li>Extra Live Q&A Session with Mentors</li>
          </ul>

          <h4>We Offer Everything You Need at ₹7,999 – but wait...</h4>
          <li className="hover-list-item">Extra Live Q&A Session with Mentors</li>

          <button className="book-now-button">Book Now for ₹79</button>
        </div>
      </div>

    </>
  );
};

export default CourseDetails;
