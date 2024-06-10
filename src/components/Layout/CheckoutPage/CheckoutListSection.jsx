import React from 'react';

const CheckoutItem = () => {
  return (
    <div className="flex items-center justify-between w-full px-6 py-4 border rounded-xl bg-neutral-50 border-neutral-300">
      <div className="flex items-center gap-4">
        <div className="bg-red-400 size-20 rounded-xl"></div>
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-neutral-800 text-Title">
            Tomat Segar Aluh-aluh
          </h1>
          <h1 className="text-Subtitle text-tertiary-900">/ 250 gram</h1>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-tertiary-700 text-H3">300 poin</h1>
        <h1 className="text-neutral-600 text-Title">3 x 100 poin</h1>
      </div>
    </div>
  );
};

const CheckoutListSection = () => {
  return (
    <div className="w-[1262px] flex flex-col gap-8">
      <CheckoutItem />
      <CheckoutItem />
      <CheckoutItem />
      <CheckoutItem />
      <CheckoutItem />
    </div>
  );
};

export default CheckoutListSection;
