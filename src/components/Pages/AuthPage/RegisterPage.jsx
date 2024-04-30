import RegisterForm from '../../Layout/AuthPage/RegisterForm';
import { Text } from '../../Elements/Text/Text';

function RegisterPage() {
  const bgImage = 'images/AuthPage/register-bg-img.png';

  return (
    <div
      id="main-content"
      className="size-full bg-cover bg-top h-screen relative flex justify-center gap-[132px]"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute z-[1] size-full bg-gradient-to-b from-[rgb(61,83,80,0.6)] to-[#1F2C2A] opacity-60"></div>
      <RegisterForm />
      <div className="w-[507px] z-10 text-gray-50 h-full flex flex-col justify-end pb-[232px] gap-[15px]">
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

export default RegisterPage;
