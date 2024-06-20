import React from 'react';
import { useNavigate } from 'react-router-dom';

const ContentSection = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col w-[560px] items-center font-poppins mt-[73px] mb-[50px]">
      <div className="size-[332px]">
        <img
          src="/images/BerhasilDitukarPage/thumbs.png"
          alt=""
          className="object-cover object-center size-full"
        />
      </div>
      <h1 className="text-primary-700 font-medium text-[48px]">
        Berhasil Ditukar
      </h1>
      <p className="font-sans text-center text-grey-600 text-Title">
        Poin telah berhasil ditukar, lihat status pengiriman dan tunggu kiriman
        produk segarmu di rumah ya!
      </p>
      <button
        onClick={() => navigate('/riwayat-tukar-poin')}
        className="size-fit rounded-[24px] bg-primary-600 text-gray-50 px-6 py-[10px] active:scale-95 transition-all duration-75 mt-[38px]"
      >
        Lihat Status Pengiriman
      </button>
    </div>
  );
};

export default ContentSection;
