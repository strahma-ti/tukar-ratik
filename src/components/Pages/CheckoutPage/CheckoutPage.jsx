import Footer from '../../Fragments/Footer/Footer';
import Navbar from '../../Fragments/Navbar/Navbar';
import HeaderConfirmSection from '../../Layout/CheckoutPage/HeaderConfirmSection';
import DetailPengirimSection from '../../Layout/CheckoutPage/DetailPengirimSection';
import CheckoutListSection from '../../Layout/CheckoutPage/CheckoutListSection';
import TotalPoinSection from '../../Layout/CheckoutPage/TotalPoinSection';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
const apiUrl = process.env.REACT_APP_API_URL;

const CheckoutPage = () => {
  const idUser = localStorage.getItem('userId');
  const [point, setPoint] = useState();
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [address, setAdress] = useState();
  const [cartItem, setCartItem] = useState();

  const totalPrice = localStorage.getItem('totalPrice');
  const totalProduct = localStorage.getItem('totalProduct');

  useEffect(() => {
    const fetchPoint = async () => {
      try {
        const response = await axios.get(`${apiUrl}/users/${idUser}`);
        setPoint(response.data.total_points);
        setName(response.data.username);
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

  const [nextStep, setNextStep] = useState(false);

  useEffect(() => {
    const value = () => {
      if (!name || !phone || !address) {
        return true;
      } else return false;
    };
    setNextStep(value);
  }, [address, name, phone]);

  const navigate = useNavigate();

  const handleCreateOrder = async () => {
    if (!name || !phone || !address) {
      Swal.fire('Semua data harus diisi!', '', 'error');
      return;
    }

    try {
      await axios.post(`${apiUrl}/orders/create`, {
        userId: idUser,
        address: address,
        phone: phone,
      });
      localStorage.removeItem('totalProduct');
      localStorage.removeItem('totalPrice');
      navigate('/success');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center w-full gap-8 mt-[106px]">
        <HeaderConfirmSection point={point} />
        <DetailPengirimSection
          name={name}
          phone={phone}
          setPhone={setPhone}
          address={address}
          setAddress={setAdress}
        />
        <CheckoutListSection cartItem={cartItem} />
        <TotalPoinSection
          totalPrice={totalPrice}
          totalProduct={totalProduct}
          nextStep={nextStep}
          createOrder={handleCreateOrder}
        />
      </main>
      <Footer />
    </>
  );
};

export default CheckoutPage;
