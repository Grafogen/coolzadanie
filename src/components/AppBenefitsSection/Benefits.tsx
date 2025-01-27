import s from './style.module.css'
import {useContext, useState} from "react";
import {StateContext, StateContextType} from "../../App.tsx";
import {LanguageKeys} from "../../helpers/languageKeys.ts";

const Benefits = () => {

    // @ts-ignore
    const context: StateContextType = useContext(StateContext)
    if (!context) {
        throw new Error('MyComponent must be used within a StateProvider');
    }
    const {globalLanguage, translation, pageContent, screen} = context

    const [activeSpoiler, setActiveSpoiler] = useState<number>(0);

    const toggleSpoiler = (index: number) => {
        if (index === 0) {
            setActiveSpoiler(0);
        } else {
            setActiveSpoiler(index);
        }
    };

    return (
        <section className={s.section}>
            <div className={s.main_container}>
                <div className={s.h3_container}>
                    <h3 className={s.h3}>{translation[globalLanguage as LanguageKeys]['HOME_benefits_title']}</h3>
                </div>
                <div className={s.benefits_with_phone_container}>
                    {screen > 768
                        ?
                        <>
                            <div className={s.benefits_container}>
                                {pageContent?.content[globalLanguage as LanguageKeys].benefits.items.map((i, index) => (
                                    <div className={s.spoiler} key={index}>
                                        <div className={s.spoiler_title} onClick={() => toggleSpoiler(index)}>
                                            <h4 className={s.spoiler_title_text}>{i.title}</h4>
                                        </div>
                                        <div
                                            className={s.spoiler_content}
                                            style={{
                                                height: activeSpoiler === index ? 'auto' : '0',
                                                visibility: activeSpoiler === index ? 'visible' : 'hidden',
                                            }}
                                        >
                                            <div className={s.spoiler_content_text}>
                                                <p dangerouslySetInnerHTML={{__html: `${i.text}`}}></p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className={s.phone_container}>
                                <div className={s.phone}
                                     style={{backgroundImage: 'url(https://praguecoolpass.com/img/mobile.87cdac93.png)'}}></div>
                                <div className={s.card_background}
                                     style={{backgroundImage: 'url(https://praguecoolpass.com/img/prague-card-image.670e8103.png)'}}></div>
                            </div>
                        </>
                        :
                        <>
                            <div className={s.phone_container}>
                                <div className={s.phone}
                                     style={{backgroundImage: 'url(https://praguecoolpass.com/img/mobile.87cdac93.png)'}}></div>
                                <div className={s.card_background}
                                     style={{backgroundImage: 'url(https://praguecoolpass.com/img/prague-card-image.670e8103.png)'}}></div>
                            </div>
                            <div className={s.benefits_container}>
                                {pageContent?.content[globalLanguage as LanguageKeys].benefits.items.map((i, index) => (
                                    <div className={s.spoiler} key={index}>
                                        <div className={s.spoiler_title} onClick={() => toggleSpoiler(index)}>
                                            <h4 className={s.spoiler_title_text}>{i.title}</h4>
                                        </div>
                                        <div
                                            className={s.spoiler_content}
                                            style={{
                                                height: activeSpoiler === index ? 'auto' : '0',
                                                visibility: activeSpoiler === index ? 'visible' : 'hidden',
                                            }}
                                        >
                                            <div className={s.spoiler_content_text}>
                                                <p dangerouslySetInnerHTML={{__html: `${i.text}`}}></p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </>
                    }
                </div>
            </div>


        </section>
    )
        ;
};

export default Benefits;