import Navigation from "./HeaderCopmponents/navigation/Navigation.tsx";
import SearchInput from "./HeaderCopmponents/searchInput/SearchInput.tsx";



const Header = () => {
    return (
        <header>
            <Navigation/>
            <SearchInput/>
        </header>
    );
};

export default Header;