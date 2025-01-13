import s from "./style.module.css";
import {LanguageKeys} from "../../helpers/languageKeys.ts";
import {StateContext, StateContextType} from "../../App.tsx";
import {useContext} from "react";
import Calculator from "./Calculator/Calculator.tsx";

const PassCard = () => {

    // @ts-ignore
    const context: StateContextType = useContext(StateContext)
    if (!context) {
        throw new Error('MyComponent must be used within a StateProvider');
    }
    const {globalLanguage, translation} = context

    return (
        <section className={s.section}>
            <div className={s.h3_container}>
                <h3>{translation[globalLanguage as LanguageKeys]['BUY_COOLPASS_PRAGUE_CARD']}</h3>
            </div>
            <div>
                <div>
                    <Calculator/>
                </div>
            </div>
            <div></div>
        </section>
    );
};

export default PassCard;