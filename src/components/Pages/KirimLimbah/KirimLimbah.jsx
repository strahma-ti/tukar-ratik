import Footer from '../../Fragments/Footer/Footer';
import Navbar from '../../Fragments/Navbar/Navbar';
import Form from '../../Layout/KirimLimbah/FormSection';
import HeroSection from '../../Layout/KirimLimbah/HeroSection';

const KirimLimbah = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center w-full pt-[106px]">
        <HeroSection />
        <Form />
      </div>
      <Footer />
    </>
  );
};

export default KirimLimbah;
