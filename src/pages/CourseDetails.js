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
  <iframe width="560" height="315" src="https://www.youtube.com/embed/QCw4RiWQA_E" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
              <p className="name"></p>Rajesh Khana
              <p className="age">Age: 30</p>
              <p className="feedback">"A wonderful experience! Highly recommend to anyone looking to improve."</p>
            </div>
          </div>
        </div>
      </div>
      {/* is this right for u  */}
      <div className="facilities">
    <h2>Is this right for you</h2>
    <h3>Everybody is fond of Digital Art! You need it too.</h3>
    <h4>Event planners & Wedding Services</h4>
    
    <p><strong>E-commerce Places:</strong> <span class="shopSphere">ShopSphere</span>, <span class="trendyMart">TrendyMart</span>, <span class="swiftShopper">SwiftShopper</span>, <span class="clickNBuy">ClickNBuy</span>, <span class="ezyCart">EzyCart</span>, <span class="trendBazaar">TrendBazaar</span>, <span class="shopWagon">ShopWagon</span>, <span class="buyNGo">BuyNGo</span>.</p>
    
    <p><strong>Retail Shops:</strong> <span class="urbanBoutique">Urban Boutique</span>, <span class="primeRetailers">Prime Retailers</span>, <span class="shopOasis">ShopOasis</span>, <span class="retailStop">The Retail Stop</span>, <span class="luxeCart">LuxeCart</span>, <span class="marketLane">The Market Lane</span>, <span class="retailHaven">Retail Haven</span>, <span class="trendCentral">TrendCentral</span>.</p>
    
    <p><strong>Gyms:</strong> <span class="powerHouse">PowerHouse Gym</span>, <span class="flexZone">FlexZone Fitness</span>, <span class="peakPerformance">Peak Performance Gym</span>, <span class="fitHub">FitHub</span>, <span class="ironX">IronX Gym</span>, <span class="pulseFitness">Pulse Fitness</span>, <span class="strengthLab">Strength Lab</span>, <span class="coreFit">CoreFit Gym</span>.</p>
    
    <p><strong>Barber Shops:</strong> <span class="barbersChair">The Barber's Chair</span>, <span class="sharpCuts">SharpCuts Barber Shop</span>, <span class="fadeMasters">FadeMasters</span>, <span class="crownClippers">Crown & Clippers</span>, <span class="gentlemansGroom">The Gentleman's Groom</span>, <span class="classicShave">Classic Shave</span>, <span class="razorsEdge">Razor's Edge</span>, <span class="eliteBarbers">Elite Barbers</span>.</p>
    
    <p><strong>Car Showrooms:</strong> <span class="autoGlide">AutoGlide Showroom</span>, <span class="prestigeMotors">Prestige Motors</span>, <span class="driveLine">DriveLine Autos</span>, <span class="speedsterShowroom">Speedster Showroom</span>, <span class="eliteWheels">Elite Wheels</span>, <span class="autoTrend">AutoTrend Showroom</span>, <span class="nextDrive">NextDrive Motors</span>, <span class="rideCity">RideCity Showroom</span>.</p>
    
    <p><strong>Doctors & Clinics:</strong> <span class="healthFirst">HealthFirst Clinic</span>, <span class="primeCare">PrimeCare Medical</span>, <span class="vitalWellness">VitalWellness Clinic</span>, <span class="mediCare">MediCare Hub</span>, <span class="everCare">EverCare Health</span>, <span class="pathwayMedical">Pathway Medical Center</span>, <span class="brightPath">BrightPath Clinic</span>, <span class="wellBeing">WellBeing Medical</span>.</p>
</div>





      {/* Not satisfied yet ? */}
      <div className="being-satisfied">
        <h1> Not satisfied yet ?</h1>
        <h4> We got you! Here are few extra features</h4>
        <div className="course-container">
        <h2>With this course, You get:</h2>
        <ul className="Satisfied-list">
          <li>Sketching Basics – Shape, form, and proportion
          fundamentals</li>
          <li>Digital Painting – Master shading, blending &
          coloring techniques</li>
          <li>Tool Mastery – Hands-on with Procreate,
          Photoshop & Illustrator</li>
          <li>Character & Concept Art – Create professionalgrade designs</li>
          <li>Portfolio Building – Craft stunning pieces to
          showcase your skills</li>
          <li>Bonus: Monetization Guide – How to sell your
art & get freelance gigs
</li>
          
          <li>Project-Based Learning – Build a stunning portfolio</li>
          <li>Live Mentorship – Weekly Q&A sessions with
          industry pros</li>
        </ul>
        <button className="book-now-button">Book Now for ₹79</button>
      </div>
      </div>

      {/* enroll now */}
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
