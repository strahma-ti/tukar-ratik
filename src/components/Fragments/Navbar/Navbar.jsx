import React from 'react';
import { Dropdown } from 'flowbite-react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="w-full h-[66px] px-7 bg-white flex items-center justify-between shadow-500 font-sans">
      <Link to="/">
        <img
          src="images/app-logo-m.png"
          alt=""
          className="w-[158px] h-[46px] object-cover"
        />
      </Link>
      <div className="flex items-center gap-10">
        <Link
          to="/kirimLimbah"
          className="text-Subtitle font-semibold text-primary-700 hover:text-primary-800"
        >
          Kirim Limbah
        </Link>
        <a
          href="/tukarPoin"
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
        <Link to="/login">
          {' '}
          <Dropdown.Item className="font-semibold">Login</Dropdown.Item>
        </Link>
        <Dropdown.Divider />
        <Link to="/register">
          <Dropdown.Item className="font-semibold">Register</Dropdown.Item>
        </Link>
      </Dropdown>
    </nav>
  );
}

export default Navbar;
