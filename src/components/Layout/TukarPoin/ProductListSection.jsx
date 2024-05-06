import React, { useEffect, useState } from 'react';
import { Text } from '../../Elements/Text/Text';

const ProductItem = ({ productImg, bodyValue }) => {
  return (
    <div className="w-[182px] h-[241px] rounded-xl bg-black px-[14px] pb-[10px] flex flex-col justify-end relative overflow-hidden cursor-pointer group hover:scale-105 transition-all duration-500">
      <div className="size-full bg-gradient-to-t from-[#000000] to-white/30 absolute inset-0 z-[1] opacity-70 rounded-xl"></div>
      <div className="absolute inset-0 overflow-hidden rounded-xl">
        <img
          src={productImg}
          alt="product-item"
          className="object-cover transition-all duration-300 scale-110 group-active:scale-100"
        />
      </div>
      <div id="item-body" className="z-10 flex flex-col gap-1 text-gray-50">
        <Text textType="subtitleBold">{bodyValue.price} poin</Text>
        <Text textType="subtitle" className="text-pretty">
          {bodyValue.productName}
        </Text>
        <Text textType="caption">{bodyValue.weight}</Text>
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
  const [data, setData] = useState([]);

  useEffect(() => {
    const dataProduct = [
      {
        productImg: '/images/TukarPoin/product-item1.png',
        bodyValue: {
          price: 100,
          productName: 'Tomat Segar dari Aluh-aluh',
          weight: '250 gram',
        },
      },
      {
        productImg: '/images/TukarPoin/product-item2.png',
        bodyValue: {
          price: 700,
          productName: 'Kacang Panjang Varian Sangat Panjang',
          weight: '250 gram',
        },
      },
      {
        productImg: '/images/TukarPoin/product-item3.png',
        bodyValue: {
          price: 1600,
          productName: 'Telur Ayam Kampung Super',
          weight: '5 butir',
        },
      },
      {
        productImg: '/images/TukarPoin/product-item4.png',
        bodyValue: {
          price: 1800,
          productName: 'Telur Ayam Ras Amuntai',
          weight: '500 gram',
        },
      },
      {
        productImg: '/images/TukarPoin/product-item5.png',
        bodyValue: {
          price: 100,
          productName: 'Rawit Merah Pedas Dower',
          weight: '250 gram',
        },
      },
      {
        productImg: '/images/TukarPoin/product-item6.png',
        bodyValue: {
          price: 700,
          productName: 'Telur Bebek Asli Alabio',
          weight: '250 gram',
        },
      },
      {
        productImg: '/images/TukarPoin/product-item7.png',
        bodyValue: {
          price: 100,
          productName: 'Timun Segar Anti Pahit',
          weight: '250 gram',
        },
      },
      {
        productImg: '/images/TukarPoin/product-item8.png',
        bodyValue: {
          price: 100,
          productName: 'Jagung Besar Manis',
          weight: '250 gram',
        },
      },
      {
        productImg: '/images/TukarPoin/product-item9.png',
        bodyValue: {
          price: 100,
          productName: 'Labu Oranye Ukuran Perpotong',
          weight: '250 gram',
        },
      },
      {
        productImg: '/images/TukarPoin/product-item10.png',
        bodyValue: {
          price: 700,
          productName: 'Daun Seledri Segar Wangi',
          weight: '250 gram',
        },
      },
      {
        productImg: '/images/TukarPoin/product-item11.png',
        bodyValue: {
          price: 1000,
          productName: 'Terong Ungu Segar Tidak Layu',
          weight: '250 gram',
        },
      },
      {
        productImg: '/images/TukarPoin/product-item12.png',
        bodyValue: {
          price: 100,
          productName: 'Jeruk Nipis Ukuran Besar',
          weight: '250 gram',
        },
      },
    ];

    setData(dataProduct);
  }, []);

  const filteredData = data.filter((item) =>
    item.bodyValue.productName
      .toLowerCase()
      .includes(searchTerm ? searchTerm.toLowerCase() : '')
  );

  const sortedData = filteredData.sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.bodyValue.price - b.bodyValue.price;
    } else if (sortOrder === 'desc') {
      return b.bodyValue.price - a.bodyValue.price;
    }
    return 0;
  });

  if (sortedData.length === 0) {
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
          {data
            .sort(() => 0.5 - Math.random())
            .slice(0, 4)
            .map((item, index) => (
              <ProductItem
                key={index}
                productImg={item.productImg}
                bodyValue={item.bodyValue}
              />
            ))}
        </div>
      </>
    );
  }

  return (
    <div id="product-list" className="grid grid-cols-4 gap-[47px]">
      {sortedData.map((item, index) => (
        <ProductItem
          key={index}
          productImg={item.productImg}
          bodyValue={item.bodyValue}
        />
      ))}
    </div>
  );
}

export default ProductListSection;
