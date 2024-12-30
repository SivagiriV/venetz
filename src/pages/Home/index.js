import AdvantagesSection from '../../sections/advantages';
import BannerSection from '../../sections/banner';
import ComparisonSection from '../../sections/comparison';
import FAQSection from '../../sections/faq';
import FeaturesSection from '../../sections/features';
import Footer from '../../sections/footer';
import GuaranteeSection from '../../sections/guarantee';
import Header from '../../sections/header';
import MissionSection from '../../sections/mission';
import Testimonials from '../../sections/testimonials';
import VideoSection from '../../sections/video';

function Home() {
  return (
    <>
       <Header />
      <BannerSection />
      <AdvantagesSection />
      <FeaturesSection />
      <GuaranteeSection />
      <VideoSection />
      <ComparisonSection/>
      <Testimonials />
      <MissionSection/>
      <FAQSection />
      <Footer />
    </>
  );
}
export default Home;
