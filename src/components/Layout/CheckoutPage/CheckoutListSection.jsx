import React from 'react';
const apiUrl = process.env.REACT_APP_API_URL;

const CheckoutItem = ({ name, weight, quantity, price, totalPrice, img }) => {
  return (
    <div className="flex items-center justify-between w-full px-6 py-4 border rounded-xl bg-neutral-50 border-neutral-300">
      <div className="flex items-center gap-4">
        <div className="overflow-hidden size-20 rounded-xl">
          <img
            src={apiUrl + img}
            alt=""
            className="object-cover object-center size-full"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-neutral-800 text-Title">{name}</h1>
          <h1 className="text-Subtitle text-tertiary-900">
            / {weight * 1000} gram
          </h1>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-tertiary-700 text-H3">
          {totalPrice} poin
        </h1>
        <h1 className="text-neutral-600 text-Title">
          {quantity} x {price} poin
        </h1>
      </div>
    </div>
  );
};

const CheckoutListSection = ({ cartItem }) => {
  return (
    <div className="w-[1262px] flex flex-col gap-8">
      {cartItem?.map((item) => (
        <CheckoutItem
          key={item.product_id}
          name={item.name}
          weight={item.weight}
          quantity={item.quantity}
          price={item.points_required}
          totalPrice={item.total_points}
          img={item.image_path}
        />
      ))}
    </div>
  );
};

export default CheckoutListSection;
