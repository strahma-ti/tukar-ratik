import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeft,
  faEyeSlash,
  faEye,
} from '@fortawesome/free-solid-svg-icons';
import { Text } from '../../Elements/Text/Text';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';
const apiUrl = process.env.REACT_APP_API_URL;

function RegisterForm({ className, onClick, setLogin }) {
  const [showPassword, setShowPassword] = useState(false);
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const validateEmail = (inputEmail) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(inputEmail);
  };

  const handleRegisterClick = async (e) => {
    e.preventDefault();
    let isError = false;
    const errors = [];

    // Validasi input
    if (!fullname.trim()) {
      isError = true;
      errors.push('Nama lengkap diperlukan.');
    }

    if (!email.trim() || !validateEmail(email)) {
      isError = true;
      errors.push('Email yang anda masukkan tidak valid.');
    }

    if (!password.trim()) {
      isError = true;
      errors.push('Kata sandi diperlukan.');
    } else if (password.length < 8) {
      isError = true;
      errors.push('Kata sandi setidaknya memiliki 8 karakter.');
    }

    if (!confirmPassword.trim()) {
      isError = true;
      errors.push('Konfirmasi kata sandi diperlukan.');
    }

    if (password !== confirmPassword) {
      isError = true;
      errors.push('Kata sandi tidak cocok.');
    }

    // Menampilkan toast jika ada error
    if (errors.length > 0) {
      isError = true;
      // eslint-disable-next-line array-callback-return
      errors.reverse().map((error) => {
        Swal.fire(error, '', 'error');
      });
    }

    if (!isError) {
      try {
        await axios.post(`${apiUrl}/users/register`, {
          username: fullname,
          password: password,
          email: email,
        });
        Swal.fire('Pendaftaran berhasil, silakan masuk.', '', 'success').then(
          () => {
            setFullname('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
            // setTimeout(() => {
            //   setLogin(true);
            // }, 2000);
            setLogin(true);
          }
        );
      } catch (error) {
        console.log(error);
      }
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

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  return (
    <div
      className={`max-w-[586px] w-full bg-white/10 inset-0 backdrop-blur-[6px] flex flex-col pt-[37px] z-10 gap-[82px] px-[37px] ${className}`}
    >
      <Link to="/" className="flex items-center justify-between w-full">
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="cursor-pointer text-primary-800 size-6 active:scale-90"
        />
        <img
          src="images/app-logo-m.png"
          alt=""
          className="w-[158px] h-[46px] object-cover"
        />
      </Link>
      <div className="flex flex-col w-full px-[85px] gap-[30px]">
        <Text textType="h2Bold" className="text-white">
          Daftar
        </Text>
        <div
          id="login-form"
          className="flex flex-col px-[5px] gap-[10px] w-[354px]"
        >
          <label htmlFor="registerFullname" className="">
            <Text
              textType="subtitle"
              className="text-primary-50 mb-0.5 after:content-['*'] after:ml-1 after:text-red-600"
            >
              Nama Lengkap
            </Text>
            <input
              autoComplete="off"
              type="text"
              name="registerFullname"
              id="registerFullname"
              placeholder="Nama Lengkap"
              className="p-3 rounded-lg h-[42px] w-full border-[rgb(77,112,108,0.4)] font-medium font-sans focus:ring-primary-600 focus:border-primary-700"
              onChange={handleFullnameChange}
              value={fullname}
            />
          </label>
          <label htmlFor="registerEmail" className="">
            <Text
              textType="subtitle"
              className="text-primary-50 mb-0.5 after:content-['*'] after:ml-1 after:text-red-600"
            >
              Email
            </Text>
            <input
              autoComplete="off"
              type="email"
              name="registerEmail"
              id="registerEmail"
              placeholder="Alamat Email"
              className="p-3 rounded-lg h-[42px] w-full border-[rgb(77,112,108,0.4)] font-medium font-sans focus:ring-primary-600 focus:border-primary-700 peer invalid:focus:ring-red-600 invalid:focus:border-red-700"
              onChange={handleEmailChange}
              value={email}
            />
            <div className="text-white text-sm rounded-xl bg-red-600 w-fit py-[1px] px-2 mt-1 ml-0.5 hidden peer-invalid:block select-none">
              Format email salah
            </div>
          </label>
          <label htmlFor="registerPassword" className="">
            <Text
              textType="subtitle"
              className="text-primary-50 mb-0.5 after:content-['*'] after:ml-1 after:text-red-600"
            >
              Kata Sandi
            </Text>
            <div className="relative">
              <input
                autoComplete="off"
                type={showPassword ? 'text' : 'password'}
                name="registerPassword"
                id="registerPassword"
                placeholder="Masukkan Kata Sandi"
                className="p-3 rounded-lg h-[42px] w-full border-[rgb(77,112,108,0.4)] font-medium font-sans focus:ring-primary-600 focus:border-primary-700"
                onChange={handlePasswordChange}
                value={password}
              />
              <button
                type="button"
                className="absolute inset-y-0 flex items-center text-sm leading-5 right-2"
                onClick={() => setShowPassword(!showPassword)}
              >
                <FontAwesomeIcon
                  icon={showPassword ? faEyeSlash : faEye}
                  className="text-gray-600 hover:text-gray-500 w-[22px] h-[15px]"
                />
              </button>
            </div>
          </label>
          <label htmlFor="registerPasswordConfirm" className="">
            <Text
              textType="subtitle"
              className="text-primary-50 mb-0.5 after:content-['*'] after:ml-1 after:text-red-600"
            >
              Konfirmasi Kata Sandi
            </Text>
            <div className="relative">
              <input
                autoComplete="off"
                type={showPassword ? 'text' : 'password'}
                name="registerPasswordConfirm"
                id="registerPasswordConfirm"
                placeholder="Ulangi Kata Sandi"
                className="p-3 rounded-lg h-[42px] w-full border-[rgb(77,112,108,0.4)] font-medium font-sans focus:ring-primary-600 focus:border-primary-700"
                onChange={handleConfirmPasswordChange}
                value={confirmPassword}
              />
              <button
                type="button"
                className="absolute inset-y-0 flex items-center text-sm leading-5 right-2"
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
          <button
            onClick={handleRegisterClick}
            className="w-[354px] rounded-3xl bg-primary-600 text-gray-50 flex justify-center items-center py-[10px] hover:bg-tertiary-600 active:bg-tertiary-800 active:scale-95 transition duration-300"
          >
            Buat Akun Baru
          </button>
          <Text textType="caption" className="self-center text-white">
            Sudah punya akun?{' '}
            <button
              onClick={onClick}
              className="font-bold underline text-Caption hover:text-sky-400 active:text-sky-600"
            >
              Masuk
            </button>
          </Text>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
