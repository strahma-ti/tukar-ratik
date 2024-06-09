import React from 'react';
import Navbar from '../../Fragments/Navbar/Navbar';
import Footer from '../../Fragments/Footer/Footer';
import HeaderKeranjangSection from '../../Layout/DetailProdukPage/HeaderKeranjangSection';
import ProductContentSection from '../../Layout/DetailProdukPage/ProductContentSection';

const DetailProdukPage = () => {
  return (
    <>
      <Navbar />
      <main className="w-full mt-[44px] mb-[108px] flex flex-col items-center gap-8">
        <HeaderKeranjangSection />
        <ProductContentSection />
      </main>
      <Footer />
    </>
  );
};

export default DetailProdukPage;
