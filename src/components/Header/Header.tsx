import Navigation from "./HeaderCopmponents/navigation/Navigation.tsx";
import {ScrollSection} from "./HeaderCopmponents/ScrollSection/ScrollSection.tsx";
import "./style.css"


const Header = () => {
    return (
        <header>
            <Navigation/>
            <ScrollSection/>
        </header>
    );
};

export default Header;