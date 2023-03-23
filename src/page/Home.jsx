import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Topbar from "../components/Topbar";
import Hightlights from "../components/Hightlights";
import Events from "../components/Events";
import Cards from "../components/Cards";
import Packages from "../components/Packages";
import Footer from "../components/Footer";


function Home() {
  return (
    <div>
      <Topbar />
      <Navbar />
      <Header />
      <Hightlights />
      <Events />
      <Cards />
      <Packages />
      <Footer />
    </div>
  );
}

export default Home;
