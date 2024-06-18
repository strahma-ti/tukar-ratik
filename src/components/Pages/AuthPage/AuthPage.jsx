import RegisterForm from '../../Layout/AuthPage/RegisterForm';
import LoginForm from '../../Layout/AuthPage/LoginForm';
import { Text } from '../../Elements/Text/Text';
import { useState } from 'react';

function AuthPage({ handleLoginState, setLoginState }) {
  const [isLogin, setIsLogin] = useState(true);
  const bgImage = isLogin
    ? 'images/AuthPage/login-bg-img.png'
    : 'images/AuthPage/register-bg-img.png';
  const handleClickChange = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div
      id="main-content"
      className="max-w-[1550px] bg-cover bg-top h-screen w-screen relative flex justify-center gap-[132px] overflow-hidden transition-all duration-1000 ease-linear"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute z-[1] size-full bg-gradient-to-b from-[rgb(61,83,80,0.6)] to-[#1F2C2A] opacity-60"></div>
      <LoginForm
        className={
          isLogin
            ? 'absolute translate-x-[874px] transition-all duration-[1300ms] ease-linear opacity-100'
            : 'absolute -translate-x-[100%] transition-all duration-[1300ms] ease-linear opacity-0'
        }
        onClick={handleClickChange}
        handleLoginState={handleLoginState}
        setLoginState={setLoginState}
      />
      <div
        className={
          isLogin
            ? 'absolute -translate-x-[380px]  transition-all duration-[1300ms] ease-linear w-[507px] z-10 text-gray-50 h-full flex flex-col justify-end pb-[232px] gap-[15px] opacity-100'
            : 'absolute -translate-x-[350%] transition-all duration-[1300ms] ease-linear w-[507px] z-10 text-gray-50 h-full flex flex-col justify-end pb-[232px] gap-[15px] opacity-0'
        }
      >
        <Text className="text-xl font-normal ">Selamat Datang Kembali!</Text>
        <Text className="font-poppins font-medium text-[40px]">
          Tukar Sisa Makanan Menjadi Bahan Makanan
        </Text>
        <Text className="text-xl font-normal ">
          Masuk ke akun Anda untuk mulai menukar limbah rumah tangga menjadi
          produk pangan berkualitas
        </Text>
      </div>
      <RegisterForm
        className={
          isLogin
            ? 'absolute translate-x-[3000px] transition-all duration-[1500ms] ease-linear opacity-0'
            : 'absolute translate-x-[154px] transition-all duration-[1500ms] ease-linear opacity-100'
        }
        onClick={handleClickChange}
        setLogin={setIsLogin}
      />
      <div
        className={
          isLogin
            ? 'absolute w-[507px] z-10 text-gray-50 h-full flex flex-col justify-end pb-[232px] gap-[15px] translate-x-[3000px] transition-all duration-[1500ms] ease-linear opacity-0'
            : 'absolute w-[507px] z-10 text-gray-50 h-full flex flex-col justify-end pb-[232px] gap-[15px] translate-x-[374px] transition-all duration-[1500ms] ease-linear opacity-100'
        }
      >
        <Text className="text-xl font-normal ">Bergabung Dengan Kami,</Text>
        <Text className="font-poppins font-medium text-[40px]">
          Tukar Sisa Makanan Menjadi Bahan Makanan
        </Text>
        <Text className="text-xl font-normal ">
          Bergabung dengan tukaratik untuk memulai perjalanan menukar limbah
          rumah tangga menjadi bahan makanan yang bernutrisi.
        </Text>
      </div>
    </div>
  );
}

export default AuthPage;
