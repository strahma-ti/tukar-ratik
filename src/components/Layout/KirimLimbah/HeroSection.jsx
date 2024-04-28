import React, { useState } from 'react';

const HeroSection = () => {
    return (
        <div className="relative h-screen bg-cover bg-center flex items-center justify-center">
          {/* Gambar latar belakang */}
          <div className="absolute inset-0 z-0">
            <img
                src="https://tinypic.host/images/2024/04/28/image3cbb61cb045f8796.png" 
                alt="image3cbb61cb045f8796.png" 
                border="0"
                className="px-[60px] pt-[60px]"
            />
          </div>
          
          {/* Konten di atas gambar */}
          {/* <div className="relative z-10 text-white text-center">
            <h1 className="text-4xl font-bold">Judul Hero</h1>
            <p className="text-lg">Teks deskripsi atau tagline Anda</p>
          </div> */}
        </div>
      );
};    
export default HeroSection;
