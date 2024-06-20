import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const HeaderKeranjangSection = ({ point }) => {
  return (
    <div className="flex items-center justify-between w-full max-w-[1262px] p-4 bg-neutral-50 shadow-300 rounded-xl">
      <div className="flex flex-col">
        <div className="flex items-center gap-[13px] pl-2">
          <FontAwesomeIcon icon={faShoppingCart} className="size-[22px]" />
          <h1 className="font-bold text-H3 text-neutral-800">Keranjangmu</h1>
        </div>
        <h2 className="text-neutral-700 text-Title">
          Tukar isi keranjangmu sebelum kehabisan!
        </h2>
      </div>
      <h1 className="font-bold text-H3 text-primary-700">
        Jumlah Poinmu : {point}
      </h1>
    </div>
  );
};

export default HeaderKeranjangSection;
