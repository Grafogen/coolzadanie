import {StateContext, StateContextType} from "../../../App.tsx";
import {useContext} from "react";
import s from "../style.module.css";
import {LanguageKeys} from "../../../helpers/languageKeys.ts";

const HowToCard = ({i, index}:any) => {

    // @ts-ignore
    const context: StateContextType = useContext(StateContext)
    if (!context) {
        throw new Error('MyComponent must be used within a StateProvider');
    }
    const {globalLanguage, pageContent} = context

    return (
        <div className={s.step_container}>
            <div className={s.step_image}
                 style={{backgroundImage: `url(https://static2.praguecoolpass.com/${i})`}}></div>
            <div className={s.step_num}>{index + 1}</div>
            <div className={s.step_text}>{pageContent?.content[globalLanguage as LanguageKeys].how_to_use.descriptions[index]}</div>
        </div>
    );
};

export default HowToCard;