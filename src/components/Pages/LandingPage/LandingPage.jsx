import Navbar from '../../Fragments/Navbar/Navbar';
import Footer from '../../Fragments/Footer/Footer';
import Jumbotron from '../../Layout/LandingPage/Jumbotron';
import UrgencyLimbah from '../../Layout/LandingPage/UrgencyLimbah';
import OurServices from '../../Layout/LandingPage/OurServices';
import GetPoints from '../../Layout/LandingPage/GetPoints';
import FrequentlyAskedQuestions from '../../Layout/LandingPage/FrequentlyAskedQuestions';
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// const apiUrl = process.env.REACT_APP_API_URL;

function LandingPage() {
  // const [data, setData] = useState();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(`${apiUrl}/products`);
  //       setData(response.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // console.log(data);

  return (
    <>
      <Navbar />
      <main className="mt-[66px]">
        <Jumbotron />
        <div
          id="main-content"
          className="flex flex-col items-center gap-[100px]"
        >
          <UrgencyLimbah />
          <OurServices />
          <GetPoints />
          <FrequentlyAskedQuestions />
        </div>
      </main>

      <Footer />
    </>
  );
}

export default LandingPage;
