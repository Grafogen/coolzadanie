import './AccordionInput.css';
import {ChangeEvent, useEffect, useRef, useState} from "react";
import {InputInterface, Content} from "../../../../types/inputTypes.ts";

const SearchInput = () => {
    const [inputValue, setInputValue] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [apiResults, setApiResults] = useState([]);
    const [lang, setLang] = useState(localStorage.getItem('selectedLanguage'));

    const accordionRef = useRef<HTMLDivElement | null>(null);

    type LanguageKeys = keyof Content;

    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {

        const value = e.currentTarget.value;
        const lang=localStorage.getItem('selectedLanguage');
        setLang(lang)
        setInputValue(value);

        if (value) {
            setIsOpen(true);
            fetchPlaces(value, lang)
        } else {
            setApiResults([]);
            setIsOpen(false);
        }
    };

    const fetchPlaces = async (query: string, lang:string | null) => {
        const response = await fetch(`https://api2.praguecoolpass.com/search?lang=${lang}&q=${query}`);

        if (response.ok) {
            const data = await response.json();
            setApiResults(data);
        } else {
            console.error('Ошибка запроса:', response.status);
        }
    };

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (accordionRef.current && !accordionRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div className="accordion-input" ref={accordionRef}>
            <input
                type="text"
                value={inputValue}
                onChange={(e)=>handleChange(e)}
                placeholder="Введите название места..."
            />
            {isOpen && (
                <div className="accordion">
                    <button className="accordion-button" onClick={toggleAccordion}>
                        Варианты мест
                    </button>
                    {isOpen && (
                        <div className="accordion-content">
                            {apiResults.length > 0 && (
                                <div className="api-results">
                                    {apiResults.map((result:InputInterface, index) => (
                                        <div key={index} className="accordion-item">
                                            {result.content[lang as LanguageKeys].title}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default SearchInput;