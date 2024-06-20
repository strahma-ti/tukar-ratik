import React from 'react';

const HeaderConfirmSection = ({ point }) => {
  return (
    <div className="flex items-center justify-between w-full max-w-[1262px] p-4 bg-neutral-50 shadow-300 rounded-xl">
      <div className="flex flex-col">
        <h1 className="font-bold text-H3 text-neutral-800">
          Konfirmasi Produk
        </h1>
        <h2 className="text-neutral-700 text-Title">
          Cek kembali produk dan alamat untuk tukar poin!
        </h2>
      </div>
      <h1 className="font-bold text-H3 text-primary-700">
        Jumlah Poinmu : {point}
      </h1>
    </div>
  );
};

export default HeaderConfirmSection;
