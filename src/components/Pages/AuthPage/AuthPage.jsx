import RegisterForm from '../../Layout/AuthPage/RegisterForm';
import LoginForm from '../../Layout/AuthPage/LoginForm';
import { Text } from '../../Elements/Text/Text';
import { useState } from 'react';

function AuthPage() {
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
      className="max-w-[1550px] size-full bg-cover bg-top h-screen relative flex justify-center gap-[132px] overflow-hidden transition-all duration-1000 ease-linear"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute z-[1] size-full bg-gradient-to-b from-[rgb(61,83,80,0.6)] to-[#1F2C2A] opacity-60"></div>
      <LoginForm
        className={
          isLogin
            ? 'absolute translate-x-[874px] transition-all duration-[1300ms] ease-linear'
            : 'absolute -translate-x-[800px] transition-all duration-[1300ms] ease-linear'
        }
        onClick={handleClickChange}
      />
      <div
        className={
          isLogin
            ? 'absolute -translate-x-[380px]  transition-all duration-[1300ms] ease-linear w-[507px] z-10 text-gray-50 h-full flex flex-col justify-end pb-[232px] gap-[15px]'
            : 'absolute -translate-x-[2000px] transition-all duration-[1300ms] ease-linear w-[507px] z-10 text-gray-50 h-full flex flex-col justify-end pb-[232px] gap-[15px]'
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
            ? 'absolute translate-x-[3000px] transition-all duration-[1500ms] ease-linear'
            : 'absolute translate-x-[154px] transition-all duration-[1500ms] ease-linear'
        }
        onClick={handleClickChange}
      />
      <div
        className={
          isLogin
            ? 'absolute w-[507px] z-10 text-gray-50 h-full flex flex-col justify-end pb-[232px] gap-[15px] translate-x-[3000px] transition-all duration-[1500ms] ease-linear'
            : 'absolute w-[507px] z-10 text-gray-50 h-full flex flex-col justify-end pb-[232px] gap-[15px] translate-x-[374px] transition-all duration-[1500ms] ease-linear'
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
