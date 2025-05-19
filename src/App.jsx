import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
// import About from "./pages/About";
// import Programs from "./pages/Programs";
import Contact from "./pages/Contact";
import Subscribe from "./pages/Subscribe";
// import HeroSection from "./components/HeroSection";
// import ProgramSection from "./components/ProgramSection";
import Checkout from "./pages/CheckOut";
import ProgramDetail from "./pages/ProgramDetail";
export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/program/:id" element={<ProgramDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/subscribe" element={<Subscribe />} />
          <Route path="/subscribe/checkout" element={<Checkout />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}
