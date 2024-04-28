import React from "react";
import { Dropdown } from "flowbite-react";

function Navbar() {
  return (
    <nav className="w-full h-[66px] px-7 bg-white flex items-center justify-between shadow-500 font-sans">
      <img
        src="images/app-logo-m.png"
        alt=""
        className="w-[158px] h-[46px] object-cover"
      />
      <div className="flex items-center gap-10">
        <a
          href="/"
          className="text-Subtitle font-semibold text-primary-700 hover:text-primary-800"
        >
          Kirim Limbah
        </a>
        <a
          href="/"
          className="text-Subtitle font-semibold text-primary-700 hover:text-primary-800"
        >
          Tukar Poin
        </a>
      </div>
      <Dropdown
        label={
          <div className="flex items-center">
            <span className="ml-2 text-Subtitle font-bold text-primary-700 hover:text-primary-800">
              Masuk
            </span>
          </div>
        }
        arrowIcon={false}
        inline
      >
        <Dropdown.Item className="font-semibold">Login</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item className="font-semibold">Register</Dropdown.Item>
      </Dropdown>
    </nav>
  );
}

export default Navbar;
