import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const TotalPoinSection = ({ totalPoints, totalProducts }) => {
  return (
    <div className="w-full h-[153px] -mb-[100px] pl-[115px] pr-[150px] py-4 flex items-center justify-between border-y border-neutral-200 bg-neutral-50 shadow-500">
      <div className="flex flex-col">
        <h1 className="font-bold text-neutral-800 text-H2">
          Total Poin : {totalPoints}
        </h1>
        <div className="flex items-center gap-2 mt-2">
          <input
            type="checkbox"
            name=""
            id="all"
            className="size-6 rounded-[4px]"
          />
          <label htmlFor="all" className="text-neutral-700 text-Title">
            Pilih Semua
          </label>
          <h1 className="ml-4 text-neutral-700 text-Title">
            Total Produk: {totalProducts?.length}
          </h1>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div className="size-11 rounded-full border-2 border-[#AA4338] flex items-center justify-center cursor-pointer active:scale-90 transition-all duration-200">
          <FontAwesomeIcon icon={faTrash} className="text-[#AA4338] size-4" />
        </div>
        <button className="size-fit px-6 py-[10px] rounded-[24px] text-neutral-50 bg-primary-600 active:scale-90 transition-all duration-200">
          Tukar Sekarang
        </button>
      </div>
    </div>
  );
};

export default TotalPoinSection;
