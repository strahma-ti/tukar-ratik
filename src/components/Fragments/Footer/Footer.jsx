import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faInstagram,
  faXTwitter,
  faFacebook,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="mt-[100px] w-full h-fit flex flex-col items-center bg-primary-100 pt-[27px] px-[108px] font-sans">
      <div id="footer1" className="flex w-full justify-between py-[27px]">
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
        <div className="w-[415px] flex flex-col gap-6 pt-[38px] pb-[10px] items-start px-[10px]">
          <div className="flex flex-col items-start gap-[7px]">
            <h1 className="text-Title text-primary-700">Layanan Kami</h1>
            <div className="flex w-full gap-6">
              <div className="flex items-center gap-[10px] flex-row-reverse">
                <NavLink
                  to="/kirimLimbah"
                  className="text-Subtitle font-bold text-tertiary-600 hover:text-tertiary-800 active:text-tertiary-900 peer"
                >
                  Kirim Limbah
                </NavLink>
                <div className="w-[2px] h-[8px] bg-primary-700 ml-[1px] peer-hover:bg-primary-800 peer-active:bg-primary-900"></div>
              </div>
              <div className="flex items-center gap-[10px] flex-row-reverse">
                <NavLink
                  to="/tukarPoin"
                  className="text-Subtitle font-bold text-tertiary-600 hover:text-tertiary-800 active:text-tertiary-900 peer"
                >
                  Tukar Point
                </NavLink>
                <div className="w-[2px] h-[8px] bg-primary-700 ml-[1px] peer-hover:bg-primary-800 peer-active:bg-primary-900"></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[7px] items-start">
            <h1 className="text-Title text-primary-700">Kantor Pusat</h1>
            <div className="text-left flex flex-col gap-1">
              <p className="text-Subtitle font-bold text-primary-700">
                Buka Setiap Selasa - Minggu 09:00 - 17:30 WITA
              </p>
              <p className="text-Subtitle text-primary-700 text-pretty">
                Duta Mall Banjarmasin, Jl. Ahmad Yani KM 2, Banjarmasin,
                Kalimantan Selatan
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        id="footer2"
        className="w-[1200px] border-t border-primary-600 flex gap-[37px] px-5 py-4 justify-center"
      >
        <h1 className="text-Title font-bold text-primary-700 py-[10px]">
          Temukan kami untuk pertanyaan, saran, atau kolaborasi atau kunjungi
          sosial media kami melalui
        </h1>
        <div className="flex items-center gap-[10px] text-primary-700">
          <a href="fb.com">
            <FontAwesomeIcon icon={faWhatsapp} className="social-icon" />
          </a>
          <a href="fb.com">
            <FontAwesomeIcon icon={faInstagram} className="social-icon" />
          </a>
          <a href="fb.com">
            <FontAwesomeIcon icon={faXTwitter} className="social-icon" />
          </a>
          <a href="fb.com">
            <FontAwesomeIcon icon={faFacebook} className="social-icon" />
          </a>
          <a href="fb.com">
            <FontAwesomeIcon icon={faTiktok} className="social-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
