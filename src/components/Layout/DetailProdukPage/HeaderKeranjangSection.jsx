import React from 'react';

const HeaderKeranjangSection = () => {
  return (
    <div className="flex items-center justify-between w-full max-w-[1262px] p-4 bg-neutral-50 shadow-300 rounded-xl">
      <div className="flex flex-col">
        <h1 className="font-bold text-H3 text-neutral-800">Keranjangmu</h1>
        <h2 className="text-neutral-700 text-Title">
          Ayo telusuri produk dan isi keranjangmu dengan produk-produk segar
          favorit!
        </h2>
      </div>
      <h1 className="font-bold text-H3 text-primary-700">Jumlah Poinmu : 50</h1>
    </div>
  );
};

export default HeaderKeranjangSection;
