import Footer from '../../Fragments/Footer/Footer';
import React from 'react';
import Navbar from '../../Fragments/Navbar/Navbar';
import HeaderConfirmSection from '../../Layout/CheckoutPage/HeaderConfirmSection';
import DetailPengirimSection from '../../Layout/CheckoutPage/DetailPengirimSection';
import CheckoutListSection from '../../Layout/CheckoutPage/CheckoutListSection';
import TotalPoinSection from '../../Layout/CheckoutPage/TotalPoinSection';

const CheckoutPage = () => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center w-full gap-8 mt-10">
        <HeaderConfirmSection />
        <DetailPengirimSection />
        <CheckoutListSection />
        <TotalPoinSection />
      </main>
      <Footer />
    </>
  );
};

export default CheckoutPage;
