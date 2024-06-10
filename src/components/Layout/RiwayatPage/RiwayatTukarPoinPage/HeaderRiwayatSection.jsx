import React from 'react';

const HeaderRiwayatSection = () => {
  return (
    <div className="flex items-center justify-between w-full max-w-[1262px] p-4 h-[91px] bg-neutral-50 shadow-300 rounded-xl">
      <div className="flex flex-col">
        <h1 className="font-bold text-H3 text-neutral-800">
          Riwayat Penukaran
        </h1>
        <h2 className="text-neutral-700 text-Title">
          Lihat riwayat penukaranmu dan pantau statusnya!
        </h2>
      </div>
    </div>
  );
};

export default HeaderRiwayatSection;
