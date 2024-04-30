import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeft,
  faEyeSlash,
  faEye,
} from '@fortawesome/free-solid-svg-icons';
import { Text } from '../../Elements/Text/Text';
import { Link } from 'react-router-dom';

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginClick = () => {
    let isError = false;

    if (!isError) {
      const data = {
        fullname,
        email,
        password,
      };
      console.log(data.fullname);
      console.log(data.email);
      console.log(data.password);
    }
  };

  const handleFullnameChange = (e) => {
    setFullname(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="max-w-[586px] w-full bg-white/10 inset-0 backdrop-blur-[6px] flex flex-col pt-[37px] z-10 gap-[82px] px-[37px]">
      <div className="w-full flex justify-between items-center">
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="text-primary-800 size-6 active:scale-90 cursor-pointer"
        />
        <img
          src="images/app-logo-m.png"
          alt=""
          className="w-[158px] h-[46px] object-cover"
        />
      </div>
      <div className="flex flex-col w-full px-[85px] gap-[30px]">
        <Text textType="h2Bold" className="text-white">
          Masuk
        </Text>
        <div
          id="login-form"
          className="flex flex-col px-[5px] gap-[10px] w-[354px]"
        >
          <label htmlFor="fullname" className="">
            <Text
              textType="subtitle"
              className="text-primary-50 mb-0.5 after:content-['*'] after:ml-1 after:text-red-600"
            >
              Nama Lengkap
            </Text>
            <input
              type="text"
              name="fullname"
              id="fullname"
              placeholder="Nama Lengkap"
              className="p-3 rounded-lg h-[42px] w-full border-[rgb(77,112,108,0.4)] font-medium font-sans focus:ring-primary-600 focus:border-primary-700"
              onChange={handleFullnameChange}
            />
          </label>
          <label htmlFor="email" className="">
            <Text
              textType="subtitle"
              className="text-primary-50 mb-0.5 after:content-['*'] after:ml-1 after:text-red-600"
            >
              Email
            </Text>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Alamat Email"
              className="p-3 rounded-lg h-[42px] w-full border-[rgb(77,112,108,0.4)] font-medium font-sans focus:ring-primary-600 focus:border-primary-700 peer invalid:focus:ring-red-600 invalid:focus:border-red-700"
              onChange={handleEmailChange}
            />
            <div className="text-white text-sm rounded-xl bg-red-600 w-fit py-[1px] px-2 mt-1 ml-0.5 hidden peer-invalid:block">
              Format email salah
            </div>
          </label>
          <label htmlFor="password" className="">
            <Text
              textType="subtitle"
              className="text-primary-50 mb-0.5 after:content-['*'] after:ml-1 after:text-red-600"
            >
              Password
            </Text>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                id="password"
                placeholder="Masukkan Kata Sandi"
                className="p-3 rounded-lg h-[42px] w-full border-[rgb(77,112,108,0.4)] font-medium font-sans focus:ring-primary-600 focus:border-primary-700"
                onChange={handlePasswordChange}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-2 flex items-center text-sm leading-5"
                onClick={() => setShowPassword(!showPassword)}
              >
                <FontAwesomeIcon
                  icon={showPassword ? faEyeSlash : faEye}
                  className="text-gray-600 hover:text-gray-500 w-[22px] h-[15px]"
                />
              </button>
            </div>
          </label>
        </div>
        <div className="flex flex-col gap-1">
          <Link
            to="/"
            onClick={handleLoginClick}
            className="w-[354px] rounded-3xl bg-primary-600 text-gray-50 flex justify-center items-center py-[10px] hover:bg-tertiary-600 active:bg-tertiary-800 active:scale-95 transition duration-300"
          >
            Masuk
          </Link>
          <Text textType="caption" className="text-white self-center">
            Belum punya akun?{' '}
            <Link to="/register" className="text-Caption font-bold">
              Daftar
            </Link>
          </Text>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;