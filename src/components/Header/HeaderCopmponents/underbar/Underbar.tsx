import {useContext} from "react"
import s from './style.module.css'
import {StateContext, StateContextType} from "../../../../App.tsx";
import {LanguageKeys} from "../../../../helpers/languageKeys.ts";
import SearchInput from "../searchInput/SearchInput.tsx";


export const UnderBar = () => {

    // @ts-ignore
    const context: StateContextType | undefined = useContext(StateContext);

    if (!context) {
        throw new Error('MyComponent must be used within a StateProvider');
    }
    const {globalLanguage, pageContent, screen} = context;
    return (
        pageContent &&
        <>
            <div className={s.undertitle}>
                <div className={s.under_container}>
                    <p className={s.underbar_text}>{pageContent.content[globalLanguage as LanguageKeys].header_banner}</p>
                </div>
            </div>

            {screen <= 768 ?
                <SearchInput/>
                :
                <></>
            }
        </>
    )
}
