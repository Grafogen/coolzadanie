import Header from "./Header/Header.tsx";
import {Attractions} from "./TopAttractions/Attractions.tsx";
import Benefits from "./AppBenefitsSection/Benefits.tsx";
import Offers from "./OffersSection/Offers.tsx";
import HowToUse from "./How-to-use/HowToUse.tsx";
import LastNews from "./LastNews/LastNews.tsx";
import PassCard from "./BuyCard/BuyCard.tsx";
import AllComments from "./CommentsSection/AllComments.tsx";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/pagination";
import Footer from "./Footer/Footer.tsx";

const AllSections = () => {
    return (
        <div>
            <Header/>
            <Attractions/>
            <Benefits/>
            <Offers/>
            <HowToUse/>
            <LastNews/>
            <PassCard/>
            <AllComments/>
            <Footer/>
        </div>

    );
};

export default AllSections;