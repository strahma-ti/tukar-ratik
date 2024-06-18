import React, { useEffect, useState } from 'react';
import Navbar from '../../Fragments/Navbar/Navbar';
import Footer from '../../Fragments/Footer/Footer';
import HeaderKeranjangSection from '../../Layout/DetailProdukPage/HeaderKeranjangSection';
import ProductContentSection from '../../Layout/DetailProdukPage/ProductContentSection';
import axios from 'axios';
import { useParams } from 'react-router-dom';
const apiUrl = process.env.REACT_APP_API_URL;

const DetailProdukPage = () => {
  const { id } = useParams();
  const idUser = localStorage.getItem('userId');
  const [dataProduct, setDataProduct] = useState();
  const [point, setPoint] = useState();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${apiUrl}/products/${id}`);
        setDataProduct(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, [id]);

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

  return (
    <>
      <Navbar />
      <main className="w-full mt-[106px] mb-[108px] flex flex-col items-center gap-8">
        <HeaderKeranjangSection poin={point} />
        <ProductContentSection
          name={dataProduct?.name}
          img={dataProduct?.image_path}
          desc={dataProduct?.description}
          price={dataProduct?.points_required}
          stock={dataProduct?.stock}
          weight={dataProduct?.weight}
        />
      </main>
      <Footer />
    </>
  );
};

export default DetailProdukPage;
