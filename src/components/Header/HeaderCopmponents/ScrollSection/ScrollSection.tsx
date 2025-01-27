import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, Pagination, Navigation} from "swiper/modules";
import SearchInput from "../searchInput/SearchInput.tsx";
import S from './style.module.css'
import '../../style.css'
import {useContext} from "react";
import {StateContext, StateContextType} from "../../../../App.tsx";
import {LanguageKeys} from "../../../../helpers/languageKeys.ts";

export const ScrollSection = () => {
    // @ts-ignore
    const context: StateContextType | undefined = useContext(StateContext);
    if (!context) {
        throw new Error('MyComponent must be used within a StateProvider');
    }
    const {pageContent, globalLanguage, screen} = context

    return (
        <section>
            {pageContent &&
                <div className='scroll'>
                    <div className={S.header__carousel}>
                            <Swiper
                                modules={[Autoplay, Pagination, Navigation]}
                                spaceBetween={0}
                                slidesPerView={1}
                                speed={1300}
                                loop={true}
                                autoplay={{
                                    delay: 5000,
                                    disableOnInteraction: false,
                                    stopOnLastSlide: false
                                }}
                                pagination={{
                                    clickable: true,
                                }}
                            >
                                {pageContent.mainImage.web_image.map((item, index) => {
                                    return (
                                        <SwiperSlide key={index}>
                                            <div className={S.coolPass__background}
                                                 style={{backgroundImage: `url(https://static2.praguecoolpass.com/${item})`}}>
                                            </div>
                                        </SwiperSlide>
                                    )
                                })}
                            </Swiper>
                        <div className={S.header__container}>
                            <div className={S.header__content}>
                                <div className={S.header__titleBlock}>
                                    <h1 className={S.header__title}
                                        dangerouslySetInnerHTML={{__html: `${pageContent.content[globalLanguage as LanguageKeys].title}`}}></h1>
                                    <h2 className={S.header__subtitle}>{pageContent.content[globalLanguage as LanguageKeys].subtitle}</h2>
                                </div>
                                {screen > 768 ?
                                <SearchInput/>
                                    :
                                    <></>
                                }
                            </div>
                        </div>
                        {screen > 768 ?
                            <div className={S.photoBy}> Prague City Tourism & Czech Tourism</div>
                            :
                            <></>
                        }
                    </div>
                </div>}
        </section>
    )
}