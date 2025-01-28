import './AccordionInput.css';
import {ChangeEvent, useContext, useEffect, useRef, useState} from "react";
import {InputInterface} from "../../../../types/inputTypes.ts";
import {Button} from "../../../OrangeButton/Button.tsx";
import {StateContext} from "../../../../App.tsx";
import {LanguageKeys} from "../../../../helpers/languageKeys.ts";

const SearchInput = () => {
    const [inputValue, setInputValue] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [apiResults, setApiResults] = useState([]);
    const [lang, setLang] = useState(localStorage.getItem('selectedLanguage'));


    // @ts-ignore
    const { translation, globalLanguage, screen } = useContext(StateContext);
    const accordionRef = useRef<HTMLDivElement | null>(null);

    const capitalizeWords = (sentence: string) => {
        if (!sentence) return sentence;
        return sentence
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(' ');
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value;
        const lang = localStorage.getItem('selectedLanguage');
        setLang(lang);
        setInputValue(value);

        if (value) {
            setIsOpen(true);
            fetchPlaces(value, lang);
        }
    };

    const fetchPlaces = async (query: string, lang: string | null) => {
        const response = await fetch(`https://api2.praguecoolpass.com/search?lang=${lang}&q=${query}`);
        if (response.ok) {
            const data = await response.json();
            setApiResults(data);
        } else {
            console.error('Ошибка запроса:', response.status);
        }
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (accordionRef.current && !accordionRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    const handleSelectPlace = (place: string) => {
        setInputValue(place);
        setIsOpen(false);
    };

    const handleIconClear = () => {
        setInputValue('');
        setIsOpen(false);
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);


    return (
        <div className="accordion-input" ref={accordionRef}>
            <div className="wrap_search">
                <div className='input_wrapper'>
                <input
                    type="text"
                    className='input'
                    value={inputValue}
                    onChange={(e) => handleChange(e)}
                    placeholder={`${translation[globalLanguage].SEARCH}`}
                />
                {isOpen && (
                    <div className="accordion-content">
                        {apiResults.length > 0 ? (
                                <ul className="api_results">
                                    {apiResults.map((result: InputInterface, index) => (
                                        <li key={index} className="accordion-item"
                                            onClick={() => handleSelectPlace(result.content[lang as LanguageKeys].title)}>
                                            {capitalizeWords(result.content[lang as LanguageKeys].title)}
                                        </li>
                                    ))}
                                </ul>
                            )
                            : <li  className="accordion-item">
                                {capitalizeWords(translation[lang as LanguageKeys]['SEARCH_not_found'])}
                            </li>
                        }
                    </div>
                )}
                </div>
                <div className="icon_search" onClick={handleIconClear}
                     style={{background: ` url(https://praguecoolpass.com/img/search.a842451d.svg)`}}></div>
                {screen > 768 ?
                    <Button text={translation[globalLanguage]['APP_LETS_GO']}/>
                    :
                    <Button style={{width: '100%'}} text={translation[globalLanguage]['APP_LETS_GO']}/>
                }
            </div>


        </div>
    );
};

export default SearchInput;