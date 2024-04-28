import React from "react";

function Stepper() {
  return (
    <ol className="relative flex flex-col gap-0.5">
      <li className="flex gap-4">
        <div className="flex flex-col items-center gap-0.5">
          <span className=" flex items-center justify-center w-8 h-8 bg-white rounded-full">
            <h1 className="font-lato font-bold text-primary-800">1</h1>
          </span>
          <div className="w-0.5 h-8 bg-white rounded-full"></div>
        </div>
        <div className="flex flex-col gap-0.5">
          <h3 className="text-Subtitle font-bold text-gray-50">
            Siapkan Limbah
          </h3>
          <p className="text-Caption text-white">
            Pastikan limbah organik sesuai berat minimum ya
          </p>
        </div>
      </li>
      <li className="flex gap-4">
        <div className="flex flex-col items-center gap-0.5">
          <span className=" flex items-center justify-center w-8 h-8 bg-primary-500 rounded-full">
            <h1 className="font-lato font-bold text-primary-50">2</h1>
          </span>
          <div className="w-0.5 h-8 bg-white rounded-full"></div>
        </div>
        <div className="flex flex-col gap-0.5">
          <h3 className="text-Subtitle font-bold text-gray-50">
            Isi Form dan Ikuti Langkah-langkahnya
          </h3>
        </div>
      </li>
      <li className="flex gap-4">
        <div className="flex flex-col items-center gap-0.5">
          <span className=" flex items-center justify-center w-8 h-8 bg-primary-600 rounded-full">
            <h1 className="font-lato font-bold text-primary-50">3</h1>
          </span>
          <div className="w-0.5 h-8 bg-white rounded-full"></div>
        </div>
        <div className="flex flex-col gap-0.5 mt-[6px]">
          <h3 className="text-Subtitle font-bold text-gray-50">Tukar Limbah</h3>
        </div>
      </li>
      <li className="flex gap-4">
        <div className="flex flex-col items-center gap-0.5">
          <span className=" flex items-center justify-center w-8 h-8 bg-primary-700 rounded-full">
            <h1 className="font-lato font-bold text-primary-50">4</h1>
          </span>
          <div className="w-0.5 h-8 bg-white rounded-full"></div>
        </div>
        <div className="flex flex-col gap-0.5">
          <h3 className="text-Subtitle font-bold text-gray-50">
            Tunggu Driver
          </h3>
          <p className="text-Caption text-white">
            Tunggu driver di rumah dan cek status limbahmu
          </p>
        </div>
      </li>
      <li className="flex gap-4 items-center">
        <div className="flex flex-col items-center gap-0.5">
          <span className=" flex items-center justify-center w-8 h-8 bg-primary-800 rounded-full">
            <h1 className="font-lato font-bold text-primary-50">5</h1>
          </span>
        </div>
        <div className="flex flex-col gap-0.5">
          <h3 className="text-Subtitle font-bold text-gray-50">
            Kumpulkan Poinnya
          </h3>
        </div>
      </li>
    </ol>
  );
}

export default Stepper;
