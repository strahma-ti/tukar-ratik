import React from "react";
import Navbar from "../../Fragments/Navbar/Navbar";
import Footer from "../../Fragments/Footer/Footer";
import Jumbotron from "../../Layout/LandingPage/Jumbotron";
import UrgencyLimbah from "../../Layout/LandingPage/UrgencyLimbah";

function LandingPage() {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <div id="main-content" className="flex flex-col items-center px-[150px]">
        <UrgencyLimbah />
      </div>
      <Footer />
    </>
  );
}

export default LandingPage;
