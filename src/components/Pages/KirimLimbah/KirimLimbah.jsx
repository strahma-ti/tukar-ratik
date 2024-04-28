import Footer from '../../Fragments/Footer/Footer';
// import Navbar from '../../Fragments/Navbar/Navbar';
import Form from '../../Layout/KirimLimbah/FormSection';
import HeroSection from '../../Layout/KirimLimbah/HeroSection';

const KirimLimbah = () => {
  return (
    <div className="bg-grey-50 text-white-A700 justify-start mx-auto w-full">
      {/* <Navbar /> */}
      <div className="flex flex-col text-black-900 justify-start w-full">
      </div>
      <HeroSection />
      <Form />
        <label className="flex justify-center w-full px-4 py-2 mt-[10px] h-10 ml-56 w-1/2 border cursor-pointer bg-primary-600 text-grey-50 rounded-full">
        Tukar Ratik
        </label>
      {/* <Footer /> */}
    </div>
  );
};

export default KirimLimbah;