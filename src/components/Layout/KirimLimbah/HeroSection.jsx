import React, { useState } from 'react';

const HeroSection = () => {
    return (
        <div className="px-[60px] py-[60px] relative h-screen bg-cover bg-center flex items-center justify-start">
          <div className="absolute inset-0 z-0">
            <img
              src="https://tinypic.host/images/2024/04/29/Page.png"               
              alt="Group-1.png" 
              border="0"
              className="px-[60px] pt-[60px]"
            />
          </div>
          <div className="z-10 pt-[140px] pl-[75px] flex flex-col gap-[20px]">
            <div className="font-poppins text-green-50">
              <h1 className="text-5xl font-medium leading-[120%]">
                Isi Form & Pilih Pusat<br />
                Layanan Terdekat
              </h1>
            </div>
            <div className="text-green-50">
              <p className="text-[18px] font-regular leading-[120%]">
              Kami saat ini tersedia di beberapa cabang di Banjarmasin. Pilih kantor <br />
              penerima limbah terdekat agar limbah dapat diambil dengan masih berada<br /> 
              di dalam jangkauan driver kami.
              </p>
            </div>
            <div class="w-[350px] border-b-2 border-primary-300"></div>
          </div>
        </div>
      );
};    
export default HeroSection;