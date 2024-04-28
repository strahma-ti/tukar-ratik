import Navbar from "../../Fragments/Navbar/Navbar";
import Footer from "../../Fragments/Footer/Footer";
import Jumbotron from "../../Layout/LandingPage/Jumbotron";
import UrgencyLimbah from "../../Layout/LandingPage/UrgencyLimbah";
import OurServices from "../../Layout/LandingPage/OurServices";
import GetPoints from "../../Layout/LandingPage/GetPoints";
import FrequentlyAskedQuestions from "../../Layout/LandingPage/FrequentlyAskedQuestions";

function LandingPage() {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <div id="main-content" className="flex flex-col items-center gap-[100px]">
        <UrgencyLimbah />
        <OurServices />
        <GetPoints />
        <FrequentlyAskedQuestions />
      </div>
      <Footer />\
    </>
  );
}

export default LandingPage;
