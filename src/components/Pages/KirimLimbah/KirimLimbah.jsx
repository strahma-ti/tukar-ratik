import Footer from '../../Fragments/Footer/Footer';
import Navbar from '../../Fragments/Navbar/Navbar';
import Form from '../../Layout/KirimLimbah/FormSection';
import HeroSection from '../../Layout/KirimLimbah/HeroSection';

const KirimLimbah = () => {
  return (
    <div className="bg-grey-50 mx-auto w-full">
      <Navbar />
      <HeroSection />
      <Form />
      <Footer />
    </div>
  );
};

export default KirimLimbah;