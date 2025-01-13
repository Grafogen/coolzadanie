import Navigation from "./HeaderCopmponents/navigation/Navigation.tsx";
import {ScrollSection} from "./HeaderCopmponents/ScrollSection/ScrollSection.tsx";
import "./style.css"
import {UnderBar} from "./HeaderCopmponents/underbar/Underbar.tsx";
import {Attractions} from "../TopAttractions/Attractions.tsx";
import Benefits from "../AppBenefitsSection/Benefits.tsx";
import Offers from "../OffersSection/Offers.tsx";
import HowToUse from "../How-to-use/HowToUse.tsx";
import LastNews from "../LastNews/LastNews.tsx";
import PassCard from "../BuyCard/BuyCard.tsx";


const Header = () => {
    return (
        <div>
            <header>
                <Navigation/>
                <ScrollSection/>
                <UnderBar/>
            </header>
            <Attractions/>
            <Benefits/>
            <Offers/>
            <HowToUse/>
            <LastNews/>
            <PassCard/>
        </div>

    );
};

export default Header;