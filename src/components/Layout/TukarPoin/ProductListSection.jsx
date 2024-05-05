import React from 'react';
import { Text } from '../../Elements/Text/Text';

const data = [
  {
    productImg: '/images/TukarPoin/product-item1.png',
    bodyValue: {
      price: '100 poin',
      productName: 'Tomat Segar dari Aluh-aluh',
      weight: '250 gram',
    },
  },
  {
    productImg: '/images/TukarPoin/product-item2.png',
    bodyValue: {
      price: '700 poin',
      productName: 'Kacang Panjang Varian Sangat Panjang',
      weight: '250 gram',
    },
  },
  {
    productImg: '/images/TukarPoin/product-item3.png',
    bodyValue: {
      price: '1600 poin',
      productName: 'Telur Ayam Kampung Super',
      weight: '5 butir',
    },
  },
  {
    productImg: '/images/TukarPoin/product-item4.png',
    bodyValue: {
      price: '1800 poin',
      productName: 'Telur Ayam Ras Amuntai',
      weight: '500 gram',
    },
  },
  {
    productImg: '/images/TukarPoin/product-item5.png',
    bodyValue: {
      price: '100 poin',
      productName: 'Rawit Merah Pedas Dower',
      weight: '250 gram',
    },
  },
  {
    productImg: '/images/TukarPoin/product-item6.png',
    bodyValue: {
      price: '700 poin',
      productName: 'Telur Bebek Asli Alabio',
      weight: '250 gram',
    },
  },
  {
    productImg: '/images/TukarPoin/product-item7.png',
    bodyValue: {
      price: '100 poin',
      productName: 'Timun Segar Anti Pahit',
      weight: '250 gram',
    },
  },
  {
    productImg: '/images/TukarPoin/product-item8.png',
    bodyValue: {
      price: '100 poin',
      productName: 'Jagung Besar Manis',
      weight: '250 gram',
    },
  },
  {
    productImg: '/images/TukarPoin/product-item9.png',
    bodyValue: {
      price: '100 poin',
      productName: 'Labu Oranye Ukuran Perpotong',
      weight: '250 gram',
    },
  },
  {
    productImg: '/images/TukarPoin/product-item10.png',
    bodyValue: {
      price: '700 poin',
      productName: 'Daun Seledri Segar Wangi',
      weight: '250 gram',
    },
  },
  {
    productImg: '/images/TukarPoin/product-item11.png',
    bodyValue: {
      price: '1000 poin',
      productName: 'Terong Ungu Segar Tidak Layu',
      weight: '250 gram',
    },
  },
  {
    productImg: '/images/TukarPoin/product-item12.png',
    bodyValue: {
      price: '100 poin',
      productName: 'Jeruk Nipis Ukuran Besar',
      weight: '250 gram',
    },
  },
];

const ProductItem = ({ productImg, bodyValue }) => {
  return (
    <div className="w-[182px] h-[241px] rounded-xl bg-black px-[14px] pb-[10px] flex flex-col justify-end relative overflow-hidden cursor-pointer group hover:scale-105 transition-all duration-500">
      <div className="size-full bg-gradient-to-t from-[#111010] to-white/30 absolute inset-0 z-[1] opacity-50 rounded-xl"></div>
      <div className="absolute inset-0 overflow-hidden rounded-xl">
        <img
          src={productImg}
          alt="product-item"
          className="object-cover transition-all duration-300 scale-110 group-active:scale-100"
        />
      </div>
      <div id="item-body" className="z-10 flex flex-col gap-1 text-gray-50">
        <Text textType="subtitleBold">{bodyValue.price}</Text>
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

function ProductListSection() {
  return (
    <div id="product-list" className="grid grid-cols-4 gap-[47px]">
      {data.map((item, index) => (
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
