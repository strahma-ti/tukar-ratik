import React from 'react';
import { Text } from '../../Elements/Text/Text';

function HeroSection() {
  const heroImage = '/images/TukarPoin/hero-tukarpoin.png';

  return (
    <div
      id="hero"
      className="w-[1300px] h-[494px] rounded-xl relative flex flex-col items-center overflow-hidden group px-[70px] pb-10 justify-end"
    >
      <div className="absolute z-[1] size-full bg-gradient-to-b from-[rgb(87,122,118,0.6)] to-[#1F2C2A] opacity-70 inset-0"></div>
      <div className="absolute inset-0 overflow-hidden size-full">
        <img
          src={heroImage}
          alt=""
          className="object-cover object-top scale-110 group-hover:scale-[1.15] transition duration-[1500ms]"
        />
      </div>
      <div className="z-10 flex flex-col items-center">
        <Text className="text-gray-50 text-[48px] font-medium font-poppins text-center text-balance mb-[5px]">
          Rasakan Kesegaran Musim dengan Sayur dan Telur Lokal!
        </Text>
        <Text textType="title" className="mb-5 text-center text-gray-50">
          Di TukaRatik, kami mempercayai keunggulan produk lokal yang sedang
          musim. Nikmati kelezatan sayur-sayuran segar dan telur-telur
          berkualitas tinggi langsung dari petani dan peternak lokal kami.
          Dengan mengonsumsi produk lokal, Anda tidak hanya mendukung ekonomi
          lokal, tetapi juga menikmati cita rasa yang lebih autentik dan kaya
          nutrisi. Bergabunglah dengan TukaRatik hari ini dan rasakan
          manfaatnya!
        </Text>
        <div className="w-[399px] h-[3px] rounded-full bg-primary-300"></div>
      </div>
    </div>
  );
}

export default HeroSection;
