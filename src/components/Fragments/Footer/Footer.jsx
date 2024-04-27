import React from "react";

function Footer() {
  return (
    <footer className="absolute bottom-0 w-full h-[350px] flex flex-col items-center bg-primary-100 py-[27px] px-[108px]">
      <div className="flex w-full justify-between">
        <div className="w-[480px] flex flex-col gap-3">
          <img
            src="images/tukaratik-logo.png"
            alt="App"
            className="w-[188px] h-[55px] object-cover"
          />
          <div className="px-[11px]">
            <p className="text-left text-Subtitle text-primary-800">
              Platform inovatif yang memungkinkan pengguna untuk menukar sampah
              rumah tangga dengan poin yang dapat ditukar dengan produk
              pertanian segar, seperti sayur dan telur. <br />
              <br />
              Bersama Tukar Ratik, kita bisa merajut kebersamaan untuk
              keberlanjutan lingkungan dan kesejahteraan bersama.
            </p>
          </div>
        </div>
        <div></div>
      </div>
      <div></div>
    </footer>
  );
}

export default Footer;
