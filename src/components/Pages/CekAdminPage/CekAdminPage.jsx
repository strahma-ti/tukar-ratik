import Footer from '../../Fragments/Footer/Footer';
import Navbar from '../../Fragments/Navbar/Navbar';
import ContentSection from '../../Layout/CekAdminPage/ContentSection';

const CekAdminPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center w-full">
        {' '}
        <ContentSection />
      </div>

      <Footer />
    </>
  );
};

export default CekAdminPage;
