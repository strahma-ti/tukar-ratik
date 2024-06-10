import React from 'react';
import Navbar from '../../Fragments/Navbar/Navbar';
import Footer from '../../Fragments/Footer/Footer';
import HeaderRiwayatSection from '../../Layout/RiwayatPage/RiwayatKirimLimbahPage/HeaderRiwayatSection';
import BodySection from '../../Layout/RiwayatPage/RiwayatKirimLimbahPage/BodySection';

const RiwayatKirimLimbahPage = () => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center w-full mt-10">
        <HeaderRiwayatSection />
        <BodySection />
      </main>
      <Footer />
    </>
  );
};

export default RiwayatKirimLimbahPage;
