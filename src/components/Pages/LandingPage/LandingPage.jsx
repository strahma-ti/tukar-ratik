import React from "react";
import Navbar from "../../Fragments/Navbar/Navbar";
import Footer from "../../Fragments/Footer/Footer";
import Jumbotron from "../../Layout/LandingPage/Jumbotron";
import UrgencyLimbah from "../../Layout/LandingPage/UrgencyLimbah";
import OurServices from "../../Layout/LandingPage/OurServices";

function LandingPage() {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <div id="main-content" className="flex flex-col items-center gap-[100px]">
        <UrgencyLimbah />
        <OurServices />
      </div>
      <Footer />
    </>
  );
}

export default LandingPage;
