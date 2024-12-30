import AdvantagesSection from './advantages';
import BannerSection from './banner';
import ComparisonSection from './comparison';
import FAQSection from './faq';
import FeaturesSection from './features';
import Footer from './footer';
import GuaranteeSection from './guarantee';
import Header from './header';
import MissionSection from './mission';
import Testimonials from './testimonials';
import VideoSection from './video';

function Home() {
    return (
        <>
            <Header />
            <BannerSection />
            <AdvantagesSection />
            <FeaturesSection />
            <VideoSection />
            <Testimonials />
            <ComparisonSection />
            <FAQSection />
            <GuaranteeSection />
            <MissionSection />
            {/* <Footer /> */}
        </>
    );
}
export default Home;
