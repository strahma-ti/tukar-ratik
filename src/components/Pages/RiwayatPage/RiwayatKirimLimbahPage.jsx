import React, { useEffect, useState } from 'react';
import Navbar from '../../Fragments/Navbar/Navbar';
import Footer from '../../Fragments/Footer/Footer';
import HeaderRiwayatSection from '../../Layout/RiwayatPage/RiwayatKirimLimbahPage/HeaderRiwayatSection';
import BodySection from '../../Layout/RiwayatPage/RiwayatKirimLimbahPage/BodySection';
import axios from 'axios';
const apiUrl = process.env.REACT_APP_API_URL;

const RiwayatKirimLimbahPage = () => {
  const idUser = localStorage.getItem('userId');
  const [data, setData] = useState();

  useEffect(() => {
    const fetchLimbah = async () => {
      try {
        const response = await axios.get(`${apiUrl}/waste/${idUser}/history`);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchLimbah();
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

export default RiwayatKirimLimbahPage;
