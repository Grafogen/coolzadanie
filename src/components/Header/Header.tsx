import Navigation from "./HeaderCopmponents/navigation/Navigation.tsx";
import {ScrollSection} from "./HeaderCopmponents/ScrollSection/ScrollSection.tsx";
import "./style.css"
import {UnderBar} from "./HeaderCopmponents/underbar/Underbar.tsx";
import {Attractions} from "../TopAttractions/Attractions.tsx";
import Benefits from "../AppBenefitsSection/Benefits.tsx";


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
        </div>

    );
};

export default Header;