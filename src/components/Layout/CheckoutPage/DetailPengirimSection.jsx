import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const DetailPengirimSection = () => {
  return (
    <div className="w-[1262px] h-[216px] rounded-xl bg-neutral-50 border border-neutral-100 shadow-300 p-4 gap-2 flex flex-col">
      <h1 className="font-bold text-neutral-800 text-Title">
        Detail Pengiriman
      </h1>
      <div className="w-full pl-8 flex flex-col gap-[10px]">
        <div className="flex items-center gap-3">
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="text-neutral-600 text-Subtitle">
              Nama Pengguna
            </label>
            <input
              type="text"
              name=""
              id=""
              value={`Muhammad Sumbul`}
              className="w-[593px] h-[42px] rounded-lg bg-neutral-200 border border-neutral-300 p-3 text-neutral-600 text-Subtitle"
              disabled
            />
          </div>
          <div className="relative flex flex-col gap-1">
            <label htmlFor="" className="text-neutral-600 text-Subtitle">
              Nomor Telepon
            </label>
            <input
              type="text"
              name=""
              id=""
              placeholder="Masukkan Nomor Telepon ..."
              className="w-[593px] h-[42px] rounded-lg bg-white border border-neutral-300 p-3 text-Subtitle"
            />
            <FontAwesomeIcon
              icon={faPenToSquare}
              className="absolute right-[16px] top-[34px] cursor-pointer active:scale-90 transition-all duration-200"
            />
          </div>
        </div>
        <div className="relative flex flex-col w-full gap-1">
          <label htmlFor="" className="text-neutral-600 text-Subtitle">
            Alamat Lengkap
          </label>
          <input
            type="text"
            name=""
            id=""
            placeholder="Masukkan Alamat Lengkap ..."
            className="w-full h-[48px] rounded-lg bg-white"
          />
          <FontAwesomeIcon
            icon={faPenToSquare}
            className="absolute right-[12px] top-[34px] cursor-pointer active:scale-90 transition-all duration-200"
          />
        </div>
      </div>
    </div>
  );
};

export default DetailPengirimSection;
