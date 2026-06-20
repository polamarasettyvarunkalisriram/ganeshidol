import React from "react";

import Hero from "./Hero";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Navbar from "../pages/Navbar";
import Products from "./Products";

const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero />
      <About />
      <Products />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;