import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card"; // Importing Card component
import CourseDetails from "./pages/CourseDetails";
import FAQs from "./pages/FAQs";

function App() {
  return (
    <BrowserRouter>
      <Header />
      
      {/* The Card component is outside of Routes, so it appears on every page */}
      <Card />

      {/* Routes for different pages */}
      <Routes>
        <Route path="/" element={<CourseDetails />} /> {/* Default Home route */}
        <Route path="/course" element={<CourseDetails />} />
       
        {/* <Route path="/faqs" element={<FAQs />} /> */}
      </Routes>
      <FAQs/>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
