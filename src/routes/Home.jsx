import React from "react";
import NavBar from "../Components/NavBar";
import Hero from "../Components/Hero";
import LearnMore from "../Components/LearnMore";
import OurCollection from "../Components/collections/OurCollection";
import LastBlog from "../Components/LastBlog";
import Wholesalers from "../Components/Wholesalers";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <LearnMore />
      <OurCollection />
      <LastBlog />
      <Wholesalers />
      <Footer />
    </div>
  );
};

export default Home;
