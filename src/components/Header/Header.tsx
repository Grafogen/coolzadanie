import Navigation from "./HeaderCopmponents/navigation/Navigation.tsx";
import {ScrollSection} from "./HeaderCopmponents/ScrollSection/ScrollSection.tsx";
import "./style.css"
import {UnderBar} from "./HeaderCopmponents/underbar/Underbar.tsx";


const Header = () => {
    return (
        <header>
            <Navigation/>
            <ScrollSection/>
            <UnderBar/>
        </header>
    );
};

export default Header;