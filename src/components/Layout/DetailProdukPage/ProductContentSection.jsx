import {
  faCartShopping,
  faMinus,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const apiUrl = process.env.REACT_APP_API_URL;

const ProductContentSection = ({
  name,
  desc,
  price,
  stock,
  weight,
  img,
  setQuantity,
  quantity,
  handleAddToCart,
}) => {
  const handleAddQuantity = () => {
    setQuantity(quantity + 1);
  };
  const handleMinQuantity = () => {
    setQuantity(quantity - 1);
  };

  return (
    <section className="w-[1262px] p-4 flex items-center gap-4 rounded-xl bg-neutral-50 shadow-300">
      <div className="w-[461px] h-[493px] rounded-xl overflow-hidden relative">
        <img
          src={apiUrl + img}
          alt=""
          className="object-cover object-center size-full"
        />
        <div className="absolute inset-0 size-full bg-gradient-to-t from-primary-800 to-primary-900/5"></div>
      </div>
      <div className="flex flex-col max-w-[753px]">
        <div className="flex flex-col">
          <h1 className="font-bold text-neutral-800 text-H1">{name}</h1>
          <p className="mt-2 text-justify text-tertiary-900 text-Subtitle w-[90%]">
            {desc}
          </p>
        </div>
        <div className="flex flex-col w-fit mt-[18px]">
          <div className="flex items-end">
            <h1 className="px-1 py-2 font-bold text-tertiary-700 text-H3">
              {price} poin
            </h1>
            <h1 className="">/ {weight * 1000} gram</h1>
          </div>
          <h1 className="ml-1 font-bold text-tertiary-900 text-Subtitle">
            Stok: {stock}
          </h1>
          <div className="flex items-center ml-1 mt-[26px] gap-5 select-none">
            <h1 className="text-tertiary-900 text-Subtitle">Kuantitas:</h1>
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
              <button
                disabled={quantity === stock}
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
          <div className="flex items-center gap-6 mt-10">
            <div
              onClick={handleAddToCart}
              className="flex items-center w-fit h-11 py-[13px] px-6 rounded-[24px] border border-primary-700 gap-[13px] active:scale-90 transition-all duration-200 cursor-pointer    "
            >
              <FontAwesomeIcon
                icon={faCartShopping}
                className="text-primary-700 size-6"
              />
              <h1 className="text-primary-700 text-Subtitle w-[141px]">
                Masukkan Keranjang
              </h1>
            </div>
            <div className="flex items-center justify-center w-fit h-11 py-[13px] px-6 rounded-[24px] bg-primary-600 active:scale-90 transition-all duration-200 cursor-pointer">
              <h1 className="text-neutral-50 text-Subtitle w-[105px]">
                Tukar Sekarang
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductContentSection;
