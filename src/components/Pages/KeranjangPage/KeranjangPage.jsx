import React from 'react';
import Navbar from '../../Fragments/Navbar/Navbar';
import Footer from '../../Fragments/Footer/Footer';
import HeaderKeranjangSection from '../../Layout/KeranjangPage/HeaderKeranjangSection';
import ListKeranjangSection from '../../Layout/KeranjangPage/ListKeranjangSection';
import TotalPoinSection from '../../Layout/KeranjangPage/TotalPoinSection';

const KeranjangPage = () => {
  return (
    <>
      <Navbar />
      <main className="w-full mt-[44px] mb-[108px] flex flex-col items-center gap-8">
        <HeaderKeranjangSection />
        <ListKeranjangSection />
      </main>
      <TotalPoinSection />
      <Footer />
    </>
  );
};

export default KeranjangPage;
