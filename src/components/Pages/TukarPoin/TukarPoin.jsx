import React, { useState } from 'react';
import Navbar from '../../Fragments/Navbar/Navbar';
import HeroSection from '../../Layout/TukarPoin/HeroSection';
import SearchProductSection from '../../Layout/TukarPoin/SearchProductSection';
import ProductListSection from '../../Layout/TukarPoin/ProductListSection';
import Footer from '../../Fragments/Footer/Footer';

function TukarPoin() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleSort = (order) => {
    setSortOrder((prevOrder) => (prevOrder === 'asc' ? 'desc' : 'asc')); // Mengubah urutan sort setiap kali fungsi dipanggil
  };

  return (
    <>
      <Navbar />
      <div
        id="main-content"
        className="flex flex-col items-center justify-center mt-[106px] font-sans"
      >
        <HeroSection />
        <div className="mt-[85px] flex flex-col">
          <SearchProductSection
            onSearch={handleSearch}
            onSort={handleSort}
            className="mb-[50px]"
          />
          <ProductListSection searchTerm={searchTerm} sortOrder={sortOrder} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default TukarPoin;
