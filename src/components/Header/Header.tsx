import Navigation from "./HeaderCopmponents/navigation/Navigation.tsx";
import {ScrollSection} from "./HeaderCopmponents/ScrollSection/ScrollSection.tsx";
import "./style.css"
import {UnderBar} from "./HeaderCopmponents/underbar/Underbar.tsx";



const Header = () => {
    return (
        <div>
            <header>
                <Navigation/>
                <ScrollSection/>
                <UnderBar/>
            </header>
        </div>

    );
};

export default Header;