import React from 'react';
import Navbar from '../../Fragments/Navbar/Navbar';
import HeroSection from '../../Layout/TukarPoin/HeroSection';
import SearchProductSection from '../../Layout/TukarPoin/SearchProductSection';
import ProductListSection from '../../Layout/TukarPoin/ProductListSection';
import Footer from '../../Fragments/Footer/Footer';

function TukarPoin() {
  return (
    <>
      <Navbar />
      <div
        id="main-content"
        className="flex flex-col items-center justify-center mt-10 font-sans"
      >
        <HeroSection />
        <div className="mt-[85px] flex flex-col gap-[50px]">
          <SearchProductSection />
          <ProductListSection />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default TukarPoin;
