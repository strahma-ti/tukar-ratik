import React from "react";

function UrgencyLimbah() {
  return (
    <div className="flex gap-[38px] items-center text-left">
      <div className="flex flex-col gap-[10px] w-[499px]">
        <h1 className="text-H2 font-bold text-primary-800">
          Darurat Limbah Sisa Makanan dan Organik di Banjarmasin
        </h1>
        <p className="text-Title text-primary-700 text-justify text-pretty">
          Di Banjarmasin, jumlah limbah organik terus meningkat tanpa solusi
          pengolahan yang memadai. Situasi ini menimbulkan ancaman serius
          terhadap lingkungan dan kesehatan publik. Tanpa tindakan segera, kita
          menghadapi risiko yang tidak dapat diabaikan. <br />
          <br />{" "}
          <span className="text-Title font-medium text-primary-800">
            TukaRatik hadir sebagai solusi untuk mengatasi krisis limbah ini.
          </span>{" "}
          <br />
          <br />
          Dengan bantuan Anda, kami dapat mengubah limbah menjadi sumber daya
          yang berharga, menjaga lingkungan, dan mendorong keberlanjutan.
          Bergabunglah dengan kami dalam misi untuk mengubah limbah menjadi
          peluang, merawat lingkungan, dan menciptakan komunitas yang lebih
          berkelanjutan.
        </p>
      </div>
      <div className="w-[582px] h-[486px] rounded-xl overflow-hidden relative">
        <div className="size-full bg-[#37584F] opacity-[0.37] absolute"></div>
        <img
          src="images/urgencylimbah-img1.png"
          alt="Foto Tukang Sampah"
          className="size-full object-cover"
        />
      </div>
    </div>
  );
}

export default UrgencyLimbah;
