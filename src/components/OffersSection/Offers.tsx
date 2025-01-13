import s from "./style.module.css";
import {LanguageKeys} from "../../helpers/languageKeys.ts";
import {StateContext, StateContextType} from "../../App.tsx";
import {useContext} from "react";
import CardOffer from "./CardOffer/CardOffer.tsx";

const Offers = () => {

    // @ts-ignore
    const context: StateContextType = useContext(StateContext)
    if (!context) {
        throw new Error('MyComponent must be used within a StateProvider');
    }
    const {globalLanguage, translation, pageContent} = context

    return (
        pageContent && translation &&
        <section className={s.section}>
            <div className={s.h3_container}>
                <h3>{translation[globalLanguage as LanguageKeys]['HOME_offers_title']}</h3>
            </div>
            <div className={s.content}>
                {pageContent?.offers.app_images.map((i, index) => {
                    return (
                        <CardOffer index={index} i={i} key={index}></CardOffer>
                    )
                })}
            </div>
        </section>
    );
};

export default Offers;