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
        <section>
            <div className={s.h3_container}>
                <h3>{translation[globalLanguage as LanguageKeys]['HOME_offers_title']}</h3>
            </div>
            <div className={s.content}>
                {pageContent?.offers.app_images.map((i, index) => {
                    return (
                        <CardOffer index={index} i={i} key={index}></CardOffer>
                        // <div className={s.card}
                        //      style={{backgroundImage: `url(https://static2.praguecoolpass.com/small_${i})`}}
                        //      key={index}
                        //      onMouseEnter={() => setHovered(true)}
                        //      onMouseLeave={() => setHovered(false)}>
                        //     {!hovered && (<div className={s.content_container}>
                        //         <div className={s.offer_btn}>
                        //             <p className={s.offer_text}>{pageContent?.content[globalLanguage as LanguageKeys].offers.items[index].title}</p>
                        //         </div>
                        //     </div>
                        //     )}
                        //     {hovered && (
                        //     <div className={s.popup_content}>
                        //         <h2>{pageContent?.content[globalLanguage as LanguageKeys].offers.items[index].title}</h2>
                        //         <div className={s.body}
                        //              dangerouslySetInnerHTML={{__html: pageContent?.content[globalLanguage as LanguageKeys].offers.items[index].features_list}}></div>
                        //         <div className={s.wrap__button}>
                        //             <NavLink to="*">
                        //                 <button
                        //                     className={s.no__working}>{pageContent?.content[globalLanguage as LanguageKeys].offers.items[index].button_text}</button>
                        //             </NavLink>
                        //         </div>
                        //     </div>
                        //         )}
                        // </div>
                    )
                })}
            </div>
        </section>
    );
};

export default Offers;