import React, { useState } from 'react';

const PopUpConfirm = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className={
        isOpen
          ? 'fixed inset-0 z-40 flex items-center justify-center backdrop-filter backdrop-brightness-50 backdrop-blur-sm'
          : 'fixed inset-0 z-40 hidden items-center justify-center backdrop-filter backdrop-brightness-50 backdrop-blur-sm'
      }
    >
      <div className="w-[416px] h-fit rounded-xl flex flex-col gap-6 p-4 items-center bg-white">
        <div className="w-[259px] h-[168px]">
          <img
            src="/images/CheckoutPage/confirm-img.png"
            alt=""
            className="size-full"
          />
        </div>
        <div className="flex flex-col items-center gap-2">
          <h1 className="font-bold text-neutral-900 text-Title">Tukar Poin?</h1>
          <p className="text-center text-neutral-600 text-Subtitle">
            Sebelum menukar poin dengan produk, pastikan data penerima dan
            produk yang diinginkan benar dan sesuai. Apakah kamu yakin ingin
            menukar produk ini?
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-[180px] h-[38px] border border-primary-700 rounded-[24px] text-Subtitle text-primary-700 active:scale-90 transition-all duration-200"
          >
            Batal
          </button>
          <button className="w-[180px] h-[38px] bg-primary-600 text-neutral-50 rounded-[24px] text-Subtitle active:scale-90 transition-all duration-200">
            Tukar
          </button>
        </div>
      </div>
    </div>
  );
};

const TotalPoinSection = () => {
  const [isPopUp, setIsPopUp] = useState(false);

  return (
    <div className="w-full h-[153px] -mb-[100px] pl-[115px] pr-[150px] py-4 flex items-center justify-between border-y border-neutral-200 bg-neutral-50 shadow-500">
      <PopUpConfirm isOpen={isPopUp} setIsOpen={setIsPopUp} />
      <div className="flex flex-col gap-2">
        <h1 className="text-neutral-700 text-Title">
          Total Produk Ditukar : 2
        </h1>
        <h1 className="font-bold text-neutral-800 text-H2">Total Poin : 400</h1>
      </div>
      <div className="flex items-center">
        <button
          onClick={() => setIsPopUp(!isPopUp)}
          className="size-fit px-6 py-[10px] rounded-[24px] text-neutral-50 bg-primary-600 active:scale-90 transition-all duration-200"
        >
          Tukar Sekarang
        </button>
      </div>
    </div>
  );
};

export default TotalPoinSection;
