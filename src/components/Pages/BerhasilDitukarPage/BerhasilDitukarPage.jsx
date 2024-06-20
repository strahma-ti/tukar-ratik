import React from 'react';
import ContentSection from '../../Layout/BerhasilDitukarPage/ContentSection';
import Navbar from '../../Fragments/Navbar/Navbar';
import Footer from '../../Fragments/Footer/Footer';

const BerhasilDitukarPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center w-full mt-[106px]">
        {' '}
        <ContentSection />
      </div>

      <Footer />
    </>
  );
};

export default BerhasilDitukarPage;
