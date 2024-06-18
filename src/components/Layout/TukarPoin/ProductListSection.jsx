import React, { useEffect, useState } from 'react';
import { Text } from '../../Elements/Text/Text';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const apiUrl = process.env.REACT_APP_API_URL;

const ProductItem = ({ img, name, price, weight, id }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/produk/${id}`)}
      className="w-[182px] h-[241px] rounded-xl bg-black px-[14px] pb-[10px] flex flex-col justify-end relative overflow-hidden cursor-pointer group hover:scale-105 transition-all duration-500"
    >
      <div className="size-full bg-gradient-to-t from-[#000000] to-white/30 absolute inset-0 z-[1] opacity-70 rounded-xl"></div>
      <div className="absolute inset-0 overflow-hidden rounded-xl">
        <img
          src={`${apiUrl}${img}`}
          alt="product-item"
          className="object-cover transition-all duration-300 scale-110 group-active:scale-100"
        />
      </div>
      <div id="item-body" className="z-10 flex flex-col gap-1 text-gray-50">
        <Text textType="subtitleBold">{price} poin</Text>
        <Text textType="subtitle" className="text-pretty">
          {name}
        </Text>
        <Text textType="caption">{weight * 1000} gram</Text>
      </div>
      <div className="absolute inset-0 bg-black/60 group-active:bg-black/30 backdrop-blur-[2px] group-active:backdrop-blur-[3px] flex items-center justify-center text-gray-50 font-extrabold text-center text-[16px] opacity-0 group-hover:opacity-100 transition duration-300 rounded-xl z-20">
        <h1 className="transition-all duration-500 scale-0 group-hover:scale-100 group-active:scale-90">
          Tukar Produk
        </h1>
      </div>
    </div>
  );
};

function ProductListSection({ searchTerm, sortOrder }) {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/products`);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  console.log(data);

  const filteredData = data?.filter((item) =>
    item.name.toLowerCase().includes(searchTerm ? searchTerm.toLowerCase() : '')
  );

  const sortedData = filteredData?.sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.points_required - b.points_required;
    } else if (sortOrder === 'desc') {
      return b.points_required - a.points_required;
    }
    return 0;
  });

  if (sortedData?.length === 0) {
    return (
      <>
        <div
          id="product-list"
          className="text-2xl text-center text-tertiary-900"
        >
          <h1 className="mb-[50px] font-semibold">
            Mohon maaf, kami tidak dapat menemukan apa yang Anda cari.
          </h1>
          <h1 className="font-medium">
            Mungkin Anda tertarik dengan produk-produk berikut:
          </h1>
        </div>
        <div className="grid grid-cols-4 gap-[47px] mt-2">
          {data &&
            data
              .sort(() => 0.5 - Math.random())
              .slice(0, 4)
              .map((item, index) => (
                <ProductItem
                  key={index}
                  name={item.name}
                  img={item.image_path}
                  weight={item.weight}
                  price={item.points_required}
                  id={item.product_id}
                />
              ))}
        </div>
      </>
    );
  }

  return (
    <div id="product-list" className="grid grid-cols-4 gap-[47px]">
      {sortedData?.map((item, index) => (
        <ProductItem
          key={index}
          name={item.name}
          img={item.image_path}
          weight={item.weight}
          price={item.points_required}
          id={item.product_id}
        />
      ))}
    </div>
  );
}

export default ProductListSection;
