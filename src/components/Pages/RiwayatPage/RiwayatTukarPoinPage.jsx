import React from 'react';
import Navbar from '../../Fragments/Navbar/Navbar';
import Footer from '../../Fragments/Footer/Footer';
import HeaderRiwayatSection from '../../Layout/RiwayatPage/RiwayatTukarPoinPage/HeaderRiwayatSection';
import BodySection from '../../Layout/RiwayatPage/RiwayatTukarPoinPage/BodySection';

const RiwayatTukarPoinPage = () => {
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

export default RiwayatTukarPoinPage;
