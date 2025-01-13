import s from "./style.module.css";
import {LanguageKeys} from "../../helpers/languageKeys.ts";
import {useContext} from "react";
import {StateContext, StateContextType} from "../../App.tsx";
import HowToCard from "./HowToUseCard/HowToCard.tsx";

const HowToUse = () => {

    // @ts-ignore
    const context: StateContextType = useContext(StateContext)
    if (!context) {
        throw new Error('MyComponent must be used within a StateProvider');
    }
    const {globalLanguage, translation, pageContent} = context

    return (
        translation && pageContent &&
        <section>
            <div className={s.h3_container}>
                <h3>{translation[globalLanguage as LanguageKeys]['HOME_how_to_use_title']}</h3>
            </div>
            <div className={s.how_container}>
                {pageContent.how_to_use.web_images.map((i, index) => {
                    return (
                        <HowToCard key={index} index={index} i={i}/>
                    )
                })}
            </div>
        </section>
    );
};

export default HowToUse;