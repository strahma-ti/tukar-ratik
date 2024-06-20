import React from 'react';
import { useNavigate } from 'react-router-dom';

const RiwayatItem = ({ status, address, points, desc, products }) => {
  const descParting = desc?.split(' ');

  const day = descParting[0];

  const date = descParting.slice(1).join(' ');

  const productParting = products.slice(0).join(', ');

  const Status = (status) => {
    if (status === 'Packed') {
      return (
        <div className="w-[153px] h-[42px] rounded-xl flex items-center justify-center bg-[#D8E9AC] text-[#2E3F02] text-Subtitle">
          Dikemas
        </div>
      );
    } else if (status === 'Delivered') {
      return (
        <div className="w-[153px] h-[42px] rounded-xl flex items-center justify-center bg-primary-200 text-primary-800 text-Subtitle">
          Diantar
        </div>
      );
    } else if (status === 'Completed') {
      return (
        <div className="w-[153px] h-[42px] rounded-xl flex items-center justify-center bg-tertiary-100 text-tertiary-800 text-Subtitle">
          Selesai
        </div>
      );
    } else if (status === 'Failed') {
      return (
        <div className="w-[153px] h-[42px] rounded-xl flex items-center justify-center bg-[#FFCCC6] text-[#80332A] text-Subtitle">
          Gagal
        </div>
      );
    }
  };

  return (
    <div
      id="riwayat-item"
      className="flex items-center w-full h-20 gap-4 px-6 py-4 border rounded-xl border-neutral-200"
    >
      <div className="w-[345px] flex flex-col gap-2 pr-2 relative">
        <div className="flex items-center gap-2">
          {' '}
          <span className="text-Subtitle text-neutral-600">{day}</span>
          <h1 className="font-bold text-Title text-neutral-800">{date}</h1>
        </div>
        <p className="w-[345px] truncate text-neutral-700 text-Subtitle peer cursor-pointer">
          {address}
        </p>
        <p className="absolute -top-[0px] text-center rounded-full size-fit py-[6px] px-3 bg-primary-100 text-nowrap text-Caption opacity-0 peer-hover:opacity-100 transition-all duration-300">
          {address}
        </p>
      </div>
      <div className="w-[271px] text-neutral-800 text-Subtitle flex flex-col items-center px-4 relative">
        <h1 className="w-[271px] overflow-hidden truncate cursor-pointer peer text-center">
          {productParting}
        </h1>
        <h1 className="absolute -top-[42px] text-center rounded-full size-fit py-[6px] px-3 bg-primary-100 text-nowrap text-Caption opacity-0 peer-hover:opacity-100 transition-all duration-300">
          {productParting}
        </h1>
      </div>
      <div className="w-[220px] text-neutral-800 text-Subtitle text-nowrap flex flex-col items-center px-4">
        <h1 className="w-full overflow-hidden text-[#AA4338] text-center">
          {points}
        </h1>
      </div>
      <div className="w-[345px] flex flex-col pl-[60px]">{Status(status)}</div>
    </div>
  );
};

const BodySection = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-[1262px] flex flex-col gap-10 items-center mt-[47px]">
      <div
        id="navigation-section"
        className="w-full flex items-center justify-center gap-[65px]"
      >
        <div
          onClick={() => navigate('/riwayat-kirim-limbah')}
          className="w-[582px] h-fit p-4 bg-neutral-100 text-neutral-700 rounded-[24px] flex items-center justify-center active:scale-95 transition-all duration-200 cursor-pointer"
        >
          Pengiriman Limbah
        </div>
        <div
          onClick={() => navigate('/riwayat-tukar-poin')}
          className="w-[582px] h-fit p-4 bg-primary-600 text-neutral-50 rounded-[24px] flex items-center justify-center active:scale-95 transition-all duration-200 cursor-pointer"
        >
          Penukaran Poin
        </div>
      </div>
      <div className="w-full h-[620px] rounded-lg bg-neutral-50 border border-neutral-300 shadow-300 px-8 py-6 flex flex-col">
        <div
          id="table-header"
          className="flex items-center w-full gap-2 px-6 py-4"
        >
          <div className="w-[333px] text-primary-700 text-Title font-bold">
            Keterangan
          </div>
          <div className="w-[333px] text-primary-700 text-Title font-bold flex justify-center">
            Produk
          </div>
          <div className="w-[144px] text-primary-700 text-Title font-bold flex justify-center">
            Poin Ditukar
          </div>
          <div className="w-[333px] text-primary-700 text-Title font-bold flex justify-center">
            Status
          </div>
        </div>
        <div
          id="riwayat-list"
          className="flex flex-col items-center w-full gap-4 mt-6"
        >
          {data?.map((item) => (
            <RiwayatItem
              status={item.status}
              address={item.address}
              points={item.totalPoints}
              desc={item.description}
              products={item.products}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BodySection;
