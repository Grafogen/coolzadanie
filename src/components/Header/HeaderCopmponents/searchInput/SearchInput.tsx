import './AccordionInput.css';
import {useState} from "react"; // Импортируйте CSS для стилей

const places = [
    "Пражский Град",
    "Карлов мост",
    "Староместская площадь",
    "Национальный музей",
    "Вышеград",
    "Зоологический сад Праги",
    "Петршин холм"
];

const SearchInput = () => {
    const [inputValue, setInputValue] = useState('');
    const [filteredPlaces, setFilteredPlaces] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    const handleChange = (e:unknown) => {
 
        // @ts-ignore
        const value = e.target.value;
        setInputValue(value);

        if (value) {
            const filtered = places.filter(place =>
                place.toLowerCase().includes(value.toLowerCase())
            );
      
            // @ts-ignore
            setFilteredPlaces(filtered);
            setIsOpen(true);
        } else {
            setFilteredPlaces([]);
            setIsOpen(false);
        }
    };

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="accordion-input">
            <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="Введите название места..."
            />
            {isOpen && (
                <div className="accordion">
                    <button className="accordion-button" onClick={toggleAccordion}>
                        Варианты мест
                    </button>
                    {isOpen && (
                        <div className="accordion-content">
                            {filteredPlaces.length > 0 ? (
                                filteredPlaces.map((place, index) => (
                                    <div key={index} className="accordion-item">
                                        {place}
                                    </div>
                                ))
                            ) : (
                                <div className="accordion-item">Нет вариантов</div>
                            )}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default SearchInput;