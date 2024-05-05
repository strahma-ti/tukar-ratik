import React from 'react';
import Navbar from '../../Fragments/Navbar/Navbar';
import HeroSection from '../../Layout/TukarPoin/HeroSection';

function TukarPoin() {
  return (
    <>
      <Navbar />
      <div
        id="main-content"
        className="flex flex-col items-center justify-center mt-10"
      >
        <HeroSection />
      </div>
    </>
  );
}

export default TukarPoin;
