import s from './style.module.css'
import {NavLink} from "react-router-dom";
import {Button} from "../../../OrangeButton/Button.tsx";
import {useState} from "react";

const Navigation = () => {

    const langs =["English","Русский","Des", "Djp", "tDy", "Dki",  "Dre" , "Dre" ];

    const [stateChangeLanguage, setStateChangeLanguage] = useState(true)

    const isViewLanguage = () => {
        setStateChangeLanguage(!stateChangeLanguage)
    }

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
                                <span className={s.header__title__item}>COOLPASS/CARD</span></NavLink>
                            <NavLink to='*'><span
                                className={s.header__title__item}>ATTRACTIONS & TOUR</span></NavLink>
                            <NavLink to='*'><span
                                className={s.header__title__item}>GETTING YOUR PASS</span></NavLink>
                            <NavLink to='*'><span className={s.header__title__item}>PLAN YOUR TRIP</span></NavLink>

                            <NavLink to='*'><span className={s.header__title__item}>CURRENT NEWS</span></NavLink>

                            <NavLink to='*'><span className={s.header__title__item}>FAQ</span></NavLink>
                        </div>
                    </div>
                    <div className={s.buyAndChangeLanguage}>
                        <NavLink to='*'>
                            <Button text={'BUY ONLINE'}/>
                        </NavLink>
                        <div className={s.btn_select_language } onClick={isViewLanguage}>
                            <div className={s.language}>EN</div>
                            <div className={s.icon_spoiler_language}></div>
                        </div>

                        <div className={stateChangeLanguage ? s.change__language : s.change__language_view}>
                            <ul className={s.countries__ul} onClick={() => {}}>
                                { langs.map((l, index) => {
                                    return (
                                        <li key={index}>
                                            {l}
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