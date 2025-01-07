import s from './style.module.css'
import {NavLink} from "react-router-dom";
import {Button} from "../../../OrangeButton/Button.tsx";
import {MouseEvent, useState} from "react";
import {useQuery} from "@tanstack/react-query";
import {Content, LangInterface, MenuInterface} from "../../../../types/dataTypes.ts";

const Navigation = () => {

    const fetchMenuData = async (): Promise<MenuInterface[]> => {
        const response = await fetch('https://api2.praguecoolpass.com/menu');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    };

    const fetchActiveLanguages = async (): Promise<LangInterface[]> => {
        const response = await fetch('https://api2.praguecoolpass.com/languages/active');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    };

    const {data, error, isLoading, isSuccess} = useQuery({
        queryKey: ['menuData'],
        queryFn: fetchMenuData
    });

    const languagesData = useQuery({
        queryKey: ['activeLanguage'],
        queryFn: fetchActiveLanguages
    });

    const [language, setLanguage] = useState<string>(languagesData.data?.[0]?.alpha2code || 'EN')

    type LanguageKeys = keyof Content;

    const chooseLang = (e: MouseEvent<HTMLLIElement, globalThis.MouseEvent>)=>{
    if (e.currentTarget.lang !== null) {
        isViewLanguage();
        setLanguage(e.currentTarget.lang);
    }
}
    const [stateChangeLanguage, setStateChangeLanguage] = useState(true)

    const isViewLanguage = () => {
        setStateChangeLanguage(!stateChangeLanguage)
    }

    if (isLoading) return <div>Loading...</div>;

    if (error) return <div>An error occurred: {error.message}</div>;

    return (
        <>
            <div className={s.header}>
                <nav className={s.navBar}>
                    <div className={s.header__Logo}>
                        CoolPass
                    </div>
                    <div className={s.header__titles__list}>
                        <div className={s.container}>
                            <NavLink to='*'>
                                <span className={s.header__title__item}>{isSuccess && data[0].content[language as LanguageKeys]?.title}</span></NavLink>
                            <NavLink to='*'><span
                                className={s.header__title__item}>{isSuccess && data[5].content[language as LanguageKeys]?.title}</span></NavLink>
                            <NavLink to='*'><span
                                className={s.header__title__item}>{isSuccess && data[25].content[language as LanguageKeys]?.title}</span></NavLink>
                            <NavLink to='*'><span className={s.header__title__item}>{isSuccess && data[32].content[language as LanguageKeys]?.title}</span></NavLink>

                            <NavLink to='*'><span className={s.header__title__item}>{isSuccess && data[38].content[language as LanguageKeys]?.title}</span></NavLink>

                            <NavLink to='*'><span className={s.header__title__item}>{isSuccess && data[46].content[language as LanguageKeys]?.title}</span></NavLink>
                        </div>
                    </div>
                    <div className={s.buyAndChangeLanguage}>
                        <NavLink to='*'>
                            <Button text={'BUY ONLINE'}/>
                        </NavLink>
                        <div className={s.btn_select_language } onClick={isViewLanguage}>
                            <div className={s.language}>{language}</div>
                            <div className={s.icon_spoiler_language}></div>
                        </div>

                        <div className={stateChangeLanguage ? s.change__language : s.change__language_view}>
                            <ul className={s.countries__ul} >
                                {languagesData.data?.map((l, index) => {
                                    return (
                                        <li key={index} onClick={(e)=>{chooseLang(e)}} id={`language-${l.alpha2code}`} lang={l.alpha2code} >
                                            {l.title}
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Navigation;