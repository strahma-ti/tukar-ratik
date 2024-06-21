import React, { useEffect, useState } from 'react';
import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
const apiUrl = process.env.REACT_APP_API_URL;

const CartItem = ({
  img,
  name,
  weight,
  price,
  quantity,
  stock,
  userId,
  productId,
  updateTotalPrice,
}) => {
  const [newQuantity, setNewQuantity] = useState(quantity);

  const totalPrice = price * newQuantity;
  const handleAddQuantity = async () => {
    const updatedQuantity = newQuantity + 1;
    setNewQuantity(updatedQuantity);
    updateQuantityOnServer(updatedQuantity);
    updateTotalPrice(price, 'add');
  };

  const updateQuantityOnServer = async (quantity) => {
    try {
      await axios.put(`${apiUrl}/cart/update`, {
        userId: userId,
        productId: productId,
        quantity: quantity,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleMinQuantity = () => {
    const updatedQuantity = newQuantity - 1;
    setNewQuantity(updatedQuantity);
    updateQuantityOnServer(updatedQuantity);
    updateTotalPrice(price, 'subtract');
  };

  const handleDeleteCartItem = async () => {
    try {
      await axios.delete(`${apiUrl}/cart/delete`, {
        data: {
          userId: userId,
          productId: productId,
        },
      });
      Swal.fire('Produk berhasil dihapus.', '', 'success').then(() => {
        window.location.reload();
      });
    } catch (error) {
      console.log(error);
    }
  };

  const [isChecked, setIsChecked] = useState(true);

  // useEffect(() => {
  //   if (isChecked) {
  //     updateTotalPrice(totalPrice, 'add');
  //   } else {
  //     updateTotalPrice(totalPrice, 'subtract');
  //   }
  // }, [isChecked]);

  return (
    <div
      id="product-cart-item"
      className="w-full h-[112px] rounded-xl px-10 py-4 flex items-center border border-neutral-300 bg-neutral-50 shadow-300 justify-around select-none"
    >
      <div className="flex items-center">
        <div className="w-[44px]">
          {' '}
          <input
            type="checkbox"
            checked={isChecked}
            name=""
            id=""
            onChange={() => setIsChecked(!isChecked)}
            className="size-6 rounded-[4px]"
          />
        </div>
        <div className="w-[384px] flex items-center gap-3">
          <div className="size-[80px] rounded-xl overflow-hidden">
            <img
              src={apiUrl + img}
              alt=""
              className="object-cover object-center size-full"
            />
          </div>
          <h1 className="font-bold text-neutral-800 text-Title text-wrap max-w-[205px]">
            {name}
          </h1>
        </div>
      </div>

      <div className="min-w-[101px] text-center">
        <h1 className="text-tertiary-900 text-Title">/ {weight * 1000} gram</h1>
      </div>
      <div className="min-w-[101px] text-center">
        <h1 className="text-neutral-900 text-Title">{price} poin</h1>
      </div>
      <div className="min-w-[101px] max-w-[101px] text-center flex justify-center items-center">
        <div className="flex items-center gap-5">
          <div className="flex items-center">
            <button
              disabled={newQuantity === 0}
              onClick={handleMinQuantity}
              className="size-[24px] rounded-lg border-2 border-primary-600 flex items-center justify-center cursor-pointer active:scale-90 transition-all duration-150 disabled:opacity-70"
            >
              <FontAwesomeIcon
                icon={faMinus}
                className="size-4 text-primary-600"
              />
            </button>
            <div className="size-[35px] flex items-center justify-center">
              {newQuantity}
            </div>
            <button
              disabled={newQuantity === stock}
              onClick={handleAddQuantity}
              className="size-[24px] rounded-lg border-2 border-primary-600 flex items-center justify-center cursor-pointer active:scale-90 transition-all duration-150 disabled:opacity-70"
            >
              <FontAwesomeIcon
                icon={faPlus}
                className="size-4 text-primary-600"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="min-w-[101px] text-center">
        <h1 className="font-bold text-tertiary-700 text-Title">
          {totalPrice} poin
        </h1>
      </div>
      <div className="min-w-[101px] text-center">
        <button onClick={handleDeleteCartItem}>
          <FontAwesomeIcon
            icon={faTrash}
            className="text-[#AA4338] size-5 cursor-pointer active:scale-90 transition-all duration-200"
          />
        </button>
      </div>
    </div>
  );
};

const ListKeranjangSection = ({ cartItem, userId, point }) => {
  useEffect(() => {
    if (cartItem) {
      const initialTotalPrice = cartItem.reduce(
        (total, item) => total + item.quantity * item.points_required,
        0
      );
      setTotalPrice(initialTotalPrice);
    }
  }, [cartItem]);
  const [totalPrice, setTotalPrice] = useState(0);

  const updateTotalPrice = (price, operation) => {
    if (operation === 'add') {
      setTotalPrice((prevTotal) => prevTotal + price);
    } else if (operation === 'subtract') {
      setTotalPrice((prevTotal) => prevTotal - price);
    }
  };

  const handleClearCart = async (id) => {
    try {
      await axios.delete(`${apiUrl}/cart/clear/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  const alert = (name, id) => {
    Swal.fire({
      title: `Kosongkan semua isi keranjang`,
      text: 'Apa anda yakin ingin melanjutkan?',
      icon: 'warning',
      showDenyButton: true,
      showConfirmButton: true,
      confirmButtonText: 'Batalkan',
      denyButtonText: 'Kosongkan',
      customClass: {
        denyButton: 'order-1',
        confirmButton: 'order-2',
      },
    }).then((result) => {
      if (result.isConfirmed) {
        return;
      } else if (result.isDenied) {
        handleClearCart(userId);
        Swal.fire('Keranjang berhasil dikosongkan.', '', 'success').then(() => {
          window.location.reload();
        });
      }
    });
  };

  const navigate = useNavigate();

  const handleToCheckout = () => {
    if (totalPrice === 0 || cartItem?.length === 0) {
      Swal.fire(
        'Keranjang kamu masih kosong',
        'Ayo masukkan beberapa produk ke dalam keranjang untuk melanjutkan.',
        'error'
      );
      return;
    }

    localStorage.setItem('totalPrice', totalPrice);
    localStorage.setItem('totalProduct', cartItem?.length);
    navigate('/checkout');
  };
  return (
    <>
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
            <h1 className="font-bold text-[18px] text-neutral-800">
              Kuantitas
            </h1>
          </div>
          <div className="min-w-[101px] text-center">
            <h1 className="font-bold text-[18px] text-neutral-800">
              Total Poin
            </h1>
          </div>
          <div className="min-w-[101px] text-center"></div>
        </div>
        <div className="flex flex-col gap-4">
          {cartItem?.map((item) => (
            <CartItem
              key={item.product_id}
              img={item.image_path}
              name={item.name}
              weight={item.weight}
              price={item.points_required}
              quantity={item.quantity}
              stock={item.stock}
              userId={userId}
              productId={item.product_id}
              setTotalPrice={setTotalPrice}
              updateTotalPrice={updateTotalPrice}
            />
          ))}
        </div>
      </section>
      <div className="w-full h-[153px] -mb-[108px] mt-[150px] pl-[115px] pr-[150px] py-4 flex items-center justify-between border-y border-neutral-200 bg-neutral-50 shadow-500">
        <div className="flex flex-col">
          <h1 className="font-bold text-neutral-800 text-H2">
            Total Poin : {totalPrice}
          </h1>
          <div className="flex items-center gap-2 mt-2">
            <input
              type="checkbox"
              name=""
              id="all"
              checked
              className="size-6 rounded-[4px]"
            />
            <label htmlFor="all" className="text-neutral-700 text-Title">
              Pilih Semua
            </label>
            <h1 className="ml-4 text-neutral-700 text-Title">
              Total Produk: {cartItem?.length}
            </h1>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div
            onClick={alert}
            className="size-11 rounded-full border-2 border-[#AA4338] flex items-center justify-center cursor-pointer active:scale-90 transition-all duration-200"
          >
            <FontAwesomeIcon icon={faTrash} className="text-[#AA4338] size-4" />
          </div>
          <button
            onClick={handleToCheckout}
            disabled={point < totalPrice}
            className="size-fit px-6 py-[10px] rounded-[24px] text-neutral-50 bg-primary-600 disabled:bg-neutral-400 active:scale-90 transition-all duration-200 "
          >
            Tukar Sekarang
          </button>
        </div>
      </div>
    </>
  );
};

export default ListKeranjangSection;
