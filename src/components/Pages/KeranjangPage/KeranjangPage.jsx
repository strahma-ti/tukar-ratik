import Navbar from '../../Fragments/Navbar/Navbar';
import Footer from '../../Fragments/Footer/Footer';
import HeaderKeranjangSection from '../../Layout/KeranjangPage/HeaderKeranjangSection';
import ListKeranjangSection from '../../Layout/KeranjangPage/ListKeranjangSection';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
const apiUrl = process.env.REACT_APP_API_URL;
const KeranjangPage = () => {
  const idUser = localStorage.getItem('userId');
  const [point, setPoint] = useState();
  const [cartItem, setCartItem] = useState();

  useEffect(() => {
    const fetchPoint = async () => {
      try {
        const response = await axios.get(`${apiUrl}/users/${idUser}`);
        setPoint(response.data.total_points);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPoint();
  }, [idUser]);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axios.get(`${apiUrl}/cart/${idUser}`);
        setCartItem(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCart();
  }, [idUser]);

  return (
    <>
      <Navbar />
      <main className="w-full mt-[106px] mb-[108px] flex flex-col items-center gap-8">
        <HeaderKeranjangSection point={point} />
        <ListKeranjangSection
          cartItem={cartItem}
          userId={idUser}
          point={point}
        />
      </main>
      {/* <TotalPoinSection
        totalPoints={totalPoints}
        totalProducts={selectedItems}
      /> */}
      <Footer />
    </>
  );
};

export default KeranjangPage;
