import {NavLink} from "react-router-dom";
import {useContext, useRef} from "react";
import {StateContext, StateContextType} from "../../App.tsx";
import {LanguageKeys} from "../../helpers/languageKeys.ts";
import './footer.css'
const Footer = () => {

    // @ts-ignore
    const context: StateContextType = useContext(StateContext)
    if (!context) {
        throw new Error('MyComponent must be used within a StateProvider');
    }
    const {globalLanguage, translation} = context

    const inputRef = useRef()

    const handleClickClear = () => {

        // @ts-ignore
        inputRef.current.value = ''
    }

    const changeYear = (str:any) => {
        const date = new Date();
        return str.replace('$year', date.getFullYear());
    }
    const checkLanguage = (api:any) => {
        if (translation[globalLanguage as LanguageKeys][api] == '') {
            return translation['en'][api];
        }
        return translation[globalLanguage as LanguageKeys][api];
    }

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-links-group">
                    <NavLink to="*">{translation['en']['FOOTER_pass_and_card']}</NavLink>
                    <NavLink to='*'>{ translation[globalLanguage as LanguageKeys]['FOOTER_USING_COOLPASS']}</NavLink>
                    <NavLink to='*'>{ translation[globalLanguage as LanguageKeys]['FOOTER_how_you_save']}</NavLink>
                    <NavLink to='*'>{ translation[globalLanguage as LanguageKeys]['FOOTER_get_your_pass']}</NavLink>
                    <NavLink to='*'>{ translation[globalLanguage as LanguageKeys]['FOOTER_sales_points']}</NavLink>
                    <NavLink to='*'>{ translation[globalLanguage as LanguageKeys]['FOOTER_reviews']}</NavLink>
                </div>
                <ul className="footer-links-group">
                    <NavLink to='*'>{ translation[globalLanguage as LanguageKeys]['ATTRACTIONS']}</NavLink>
                    <NavLink to='*'>{ translation[globalLanguage as LanguageKeys]['FOOTER_sightseeing_tours']}</NavLink>
                    <NavLink to='*'>{ translation[globalLanguage as LanguageKeys]['FOOTER_areas']}</NavLink>
                    <NavLink to='*'>{ translation[globalLanguage as LanguageKeys]['FOOTER_closures']}</NavLink>
                    <NavLink to='*'>{ translation[globalLanguage as LanguageKeys]['FOOTER_whats_on']}</NavLink>
                    <NavLink to='*'>{ translation[globalLanguage as LanguageKeys]['FOOTER_contact_us']}</NavLink>
                </ul>
                <ul className="footer-about-us">
                    <div className="footer-faq">
                        <NavLink to='*'>
                            <div className="footer-faq-text">{ translation[globalLanguage as LanguageKeys]['FOOTER_faq']}</div>
                        </NavLink>
                    </div>
                    <NavLink className="footer-faq-text" to="*">{ translation[globalLanguage as LanguageKeys]['FOOTER_about_us']}</NavLink>
                    <NavLink className="footer-faq-text" to="*">{ translation[globalLanguage as LanguageKeys]['FOOTER_terms_and_conditions']}</NavLink>
                    <NavLink className="footer-faq-text" to="*">{ translation[globalLanguage as LanguageKeys]['FOOTER_cancellation_and_refund']}</NavLink>
                    <NavLink className="footer-faq-text" to="*">{ translation[globalLanguage as LanguageKeys]['FOOTER_privacy_policy']}</NavLink>
                </ul>
                <div className="footer-download">
                    <p className="footer-download-title">{ translation[globalLanguage as LanguageKeys]['DOWNLOAD']}</p>
                    <p>{globalLanguage === 'ru' ? translation['ru']['FOOTER_prague_coolpass_app'] : translation['en']['FOOTER_prague_coolpass_app']}</p>
                    <NavLink to="*">
                        <div className="footer-appstore"></div>
                    </NavLink>
                    <NavLink to="*">
                        <div className="footer-google-play"></div>
                    </NavLink>
                </div>
                <div className="footer-news-updates">
                    <div className="footer-news-title">{ translation[globalLanguage as LanguageKeys]['NEWS_AND_UPDATES']}</div>
                    <div>
                        <div className="footer-subscribe-form">
                            <input name="email" type="email" placeholder={ translation[globalLanguage as LanguageKeys]['ENTER_EMAIL_PLACEHOLDER']}
                                   ref={inputRef}></input>
                            <button onClick={handleClickClear}
                                    className="footer-subscribe-button">{ translation[globalLanguage as LanguageKeys]['EMAIL_SUBSCRIBE']}</button>
                        </div>
                    </div>
                    <div className="footer-year">{changeYear(translation['en']['FOOTER_year_coolpass'])}</div>
                    <div className="footer-info">{changeYear(checkLanguage('FOOTER_year_card'))}</div>
                    <p className="footer-reserved">{ translation[globalLanguage as LanguageKeys]['ALL_RIGHTS_RESERVED_LABEL']}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;