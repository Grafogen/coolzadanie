import s from "./style.module.css";
import {LanguageKeys} from "../../helpers/languageKeys.ts";
import {StateContext, StateContextType} from "../../App.tsx";
import {useContext, useEffect, useState} from "react";
import {useQuery} from "@tanstack/react-query";
import {NewsTypesInterface} from "../../types/NewsDataTypes.ts";
import truncateText from "../../helpers/textConcatination.ts"
import {NavLink} from "react-router-dom";


const LastNews = () => {

    const [truncateLength, setTruncateLength] = useState(550);

    // @ts-ignore
    const context: StateContextType = useContext(StateContext)
    if (!context) {
        throw new Error('MyComponent must be used within a StateProvider');
    }
    const {globalLanguage, translation} = context

    const getNewsData = async (): Promise<NewsTypesInterface[]> => {
        const response = await fetch(`https://api2.praguecoolpass.com/news`);
        const data = await response.json();
        return data
    }

    const {data: NewsData} = useQuery({
        queryKey: ['NewsData'],
        queryFn: getNewsData
    });

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setTruncateLength(300);
            } else {
                setTruncateLength(550);
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <section>
            <div className={s.h3_container}>
                <h3>{translation[globalLanguage as LanguageKeys]['HOME_news_title']}</h3>
            </div>
            <div className={s.news_container}>
                {NewsData?.map((i, index) => {
                    const dateString = NewsData[index]['datePublished'].slice(0, 10)
                    const [year, month, day] = dateString.split('-');
                    const date = `${day}.${month}.${year}`;
                    return (
                        index < 2 &&
                        <div className={`${s.card_container} ${index === 1 ? s.reverse : ''}`} key={index}>
                            <div className={s.image_container}
                                 style={{backgroundImage: `url(https://static2.praguecoolpass.com/small_${i.images[0]})`}}>
                                <div className={s.date}>{date}</div>
                            </div>
                            <div className={s.news_content}>
                                <h4>{i.content.en.title}</h4>
                                <p className={s.news_text}
                                   dangerouslySetInnerHTML={{__html: truncateText(i.content.en.text, truncateLength)}}>

                                </p>
                                <a>
                                    <p className={s.link_text}>See more</p>
                                </a>
                            </div>
                        </div>

                    )
                })}
            </div>
            <div className={s.allNews}>
                <NavLink to={'*'}>
                    <button className={s.button}>{translation[globalLanguage as LanguageKeys]['SEE_ALL_NEWS']}</button>
                </NavLink>
            </div>
        </section>
    );
};

export default LastNews;