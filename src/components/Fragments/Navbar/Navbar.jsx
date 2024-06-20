import {
  faClockRotateLeft,
  faShoppingCart,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
// import { Dropdown } from 'flowbite-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  const isLogin = localStorage.getItem('isLogin');
  const [isPop, setIsPop] = useState(false);

  const handleLogout = () => {
    localStorage.clear();
    navigate('/auth');
  };

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header');
      if (window.scrollY > 40) {
        header.classList.add('bg-primary-100', 'shadow-500');
      } else {
        header.classList.remove('bg-primary-100', 'shadow-500');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const location = useLocation();
  const currentPage = location.pathname.split('/');

  return (
    <header className="w-full h-[66px] px-7 flex items-center justify-between font-sans fixed top-0 z-50 transition-all duration-700">
      <Link to="/tukarPoin">
        <img
          src="/images/app-logo-m.png"
          alt=""
          className="w-[158px] h-[46px] object-cover"
        />
      </Link>
      <div className="flex items-center gap-10">
        <Link
          aria-current={
            currentPage.includes('kirimlimbah') ? 'page' : undefined
          }
          to="/kirimlimbah"
          className="font-semibold text-Subtitle text-primary-700 hover:text-primary-800 aria-[current=page]:text-primary-800 aria-[current=page]:font-bold"
        >
          Kirim Limbah
        </Link>
        <Link
          aria-current={currentPage.includes('tukarpoin') ? 'page' : undefined}
          to="/tukarpoin"
          className="font-semibold text-Subtitle text-primary-700 hover:text-primary-800 aria-[current=page]:text-primary-800 aria-[current=page]:font-bold"
        >
          Tukar Poin
        </Link>
      </div>
      <div className="flex items-center">
        {isLogin ? (
          <div id="login-item" className="flex items-center gap-8">
            <FontAwesomeIcon
              onClick={() => navigate('/keranjang')}
              icon={faShoppingCart}
              className="size-[25px] text-primary-700 cursor-pointer"
            />
            <div className="relative select-none">
              {' '}
              <div
                onClick={() => setIsPop(!isPop)}
                className="size-[32px] rounded-full border-[3px] border-primary-700 flex items-center justify-center px-1 pt-1 cursor-pointer relative"
              >
                <FontAwesomeIcon
                  icon={faUser}
                  className="rounded-full text-primary-700 size-full mt-[1px]"
                />
              </div>
              {isPop ? (
                <div className="flex flex-col items-center max-w-[148px] w-[148px] h-[88px] rounded-l-xl rounded-br-xl bg-neutral-50 shadow-100 border border-neutral-100 absolute -bottom-[99px] right-[10px] z-50 cursor-default overflow-hidden">
                  <div className="flex flex-col size-full">
                    <button
                      onClick={() => navigate('/riwayat-tukar-poin')}
                      className="flex items-center gap-2 px-4 pt-3 pb-2 border-b border-neutral-200"
                    >
                      <FontAwesomeIcon
                        icon={faClockRotateLeft}
                        className="size-[18px] text-neutral-700"
                      />
                      <h1 className="text-Title text-neutral-700">Riwayat</h1>
                    </button>
                    <button
                      onClick={handleLogout}
                      className="flex items-center gap-2 px-4 pt-2 pb-3"
                    >
                      <FontAwesomeIcon
                        icon={faArrowRightFromBracket}
                        className="size-[18px] text-[#AA4338]"
                      />
                      <h1 className="text-Title text-[#AA4338]">Keluar</h1>
                    </button>
                  </div>
                </div>
              ) : (
                ''
              )}
            </div>
          </div>
        ) : (
          <Link
            to="/auth"
            className="ml-2 font-bold text-Subtitle text-primary-700 hover:text-primary-800"
          >
            Masuk
          </Link>
        )}
      </div>
      {/* <Dropdown
        label={
          <div className="flex items-center">
            <span className="ml-2 font-bold text-Subtitle text-primary-700 hover:text-primary-800">
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
      </Dropdown> */}
    </header>
  );
}

export default Navbar;
