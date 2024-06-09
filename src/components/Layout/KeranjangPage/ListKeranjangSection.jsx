import React, { useState } from 'react';
import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CartItem = () => {
  const [quantity, setQuantity] = useState(1);

  const handleAddQuantity = () => {
    setQuantity(quantity + 1);
  };
  const handleMinQuantity = () => {
    setQuantity(quantity - 1);
  };

  return (
    <div
      id="product-cart-item"
      className="w-full h-[112px] rounded-xl px-10 py-4 flex items-center border border-neutral-300 bg-neutral-50 shadow-300 justify-around"
    >
      <div className="flex items-center">
        <div className="w-[44px]">
          {' '}
          <input
            type="checkbox"
            name=""
            id=""
            className="size-6 rounded-[4px]"
          />
        </div>
        <div className="w-[384px] flex items-center gap-3">
          <div className="bg-red-400 size-[80px] rounded-xl"></div>
          <h1 className="font-bold text-neutral-800 text-Title text-wrap max-w-[205px]">
            Tomat Segar Aluh-aluh
          </h1>
        </div>
      </div>

      <div className="min-w-[101px] text-center">
        <h1 className="text-tertiary-900 text-Title">/ 250 gram</h1>
      </div>
      <div className="min-w-[101px] text-center">
        <h1 className="text-neutral-900 text-Title">100 poin</h1>
      </div>
      <div className="min-w-[101px] max-w-[101px] text-center flex justify-center items-center">
        <div className="flex items-center gap-5">
          <div className="flex items-center">
            <button
              disabled={quantity === 0}
              onClick={handleMinQuantity}
              className="size-[24px] rounded-lg border-2 border-primary-600 flex items-center justify-center cursor-pointer active:scale-90 transition-all duration-150 disabled:opacity-70"
            >
              <FontAwesomeIcon
                icon={faMinus}
                className="size-4 text-primary-600"
              />
            </button>
            <div className="size-[35px] flex items-center justify-center">
              {quantity}
            </div>
            <div
              onClick={handleAddQuantity}
              className="size-[24px] rounded-lg border-2 border-primary-600 flex items-center justify-center cursor-pointer active:scale-90 transition-all duration-150"
            >
              <FontAwesomeIcon
                icon={faPlus}
                className="size-4 text-primary-600"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="min-w-[101px] text-center">
        <h1 className="font-bold text-tertiary-700 text-Title">300 poin</h1>
      </div>
      <div className="min-w-[101px] text-center">
        <FontAwesomeIcon
          icon={faTrash}
          className="text-[#AA4338] size-5 cursor-pointer active:scale-90 transition-all duration-200"
        />
      </div>
    </div>
  );
};

const ListKeranjangSection = () => {
  return (
    <section className="w-[1262px] flex flex-col gap-8">
      <div className="w-full h-[91px] rounded-xl px-10 py-4 flex items-center bg-neutral-50 shadow-300 justify-around">
        <div className="flex items-center">
          <div className="w-[44px]">
            {' '}
            {/* <input
              type="checkbox"
              name=""
              id=""
              className="size-6 rounded-[4px]"
            /> */}
          </div>
          <div className="w-[384px]">
            <h1 className="font-bold text-[18px] text-neutral-800">Produk</h1>
          </div>
        </div>
        <div className="min-w-[101px] text-center">
          <h1 className="font-bold text-[18px] text-neutral-800">Satuan</h1>
        </div>
        <div className="min-w-[101px] text-center">
          <h1 className="font-bold text-[18px] text-neutral-800">Poin</h1>
        </div>
        <div className="min-w-[101px] text-center">
          <h1 className="font-bold text-[18px] text-neutral-800">Kuantitas</h1>
        </div>
        <div className="min-w-[101px] text-center">
          <h1 className="font-bold text-[18px] text-neutral-800">Total Poin</h1>
        </div>
        <div className="min-w-[101px] text-center"></div>
      </div>
      <div className="flex flex-col gap-4">
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
    </section>
  );
};

export default ListKeranjangSection;
