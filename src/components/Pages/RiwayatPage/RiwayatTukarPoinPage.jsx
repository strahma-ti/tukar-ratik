import React, { useEffect, useState } from 'react';
import Navbar from '../../Fragments/Navbar/Navbar';
import Footer from '../../Fragments/Footer/Footer';
import HeaderRiwayatSection from '../../Layout/RiwayatPage/RiwayatTukarPoinPage/HeaderRiwayatSection';
import BodySection from '../../Layout/RiwayatPage/RiwayatTukarPoinPage/BodySection';
import axios from 'axios';
const apiUrl = process.env.REACT_APP_API_URL;

const RiwayatTukarPoinPage = () => {
  const [data, setData] = useState();
  const idUser = localStorage.getItem('userId');

  useEffect(() => {
    const fetchRiwayat = async () => {
      try {
        const response = await axios.get(`${apiUrl}/orders/${idUser}/history`);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchRiwayat();
  }, [idUser]);

  console.log(data);

  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center w-full mt-[106px]">
        <HeaderRiwayatSection />
        <BodySection data={data} />
      </main>
      <Footer />
    </>
  );
};

export default RiwayatTukarPoinPage;
