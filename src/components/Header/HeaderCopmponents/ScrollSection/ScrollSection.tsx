import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import  SearchInput  from "../searchInput/SearchInput.tsx";
import {ScrollSectionInterface} from "../../../../types/scrollSectionTypes.ts";
import {useQuery} from "@tanstack/react-query";
import {Content} from "../../../../types/inputTypes.ts";
import S from './style.module.css'
import '../../style.css'

// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/pagination";
import {useContext } from "react";
import {StateContext} from "../../../../App.tsx";

export const ScrollSection = () => {

    // @ts-ignore
    const {globalLanguage}=useContext(StateContext);

    const fetchPages = async ():Promise<ScrollSectionInterface> => {
        const response = await fetch(`https://api2.praguecoolpass.com/pages/5fd771cc072e5479bded0f2b`);
        if (!response.ok){
            console.error('Ошибка запроса:', response.status);
        }
        return response.json()
    };
    const content = useQuery({
        queryKey: ['pageData'],
        queryFn: fetchPages
    });
    type LanguageKeys = keyof Content;


    return (
        <div >
            {content.data  &&
                <div className={S.header__carousel}>
                    {document.documentElement.clientWidth > 425 ?
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
                                clickable:true,
                            }}
                         >
                            {content.data?.mainImage.web_image.map((item, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <div className={S.coolPass__background} style={{ backgroundImage: `url(https://static2.praguecoolpass.com/${item})` }}>
                                        </div>
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                    :
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
                            }}>
                            {content.data?.mainImage.app_image.map((item, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <div className={`${S.coolPass__background}+ ${S.swiper__for__mobile}`} style={{ backgroundImage: `url(https://static2.praguecoolpass.com/${item})` }}>
                                        </div>
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>}

                    <div className={S.header__container}>
                        <div className={S.header__content}>
                            <div className={S.header__titleBlock}>
                                <h1 className={S.header__title} dangerouslySetInnerHTML={{ __html: `${content.data.content[globalLanguage as LanguageKeys].title}` }}></h1>
                                <h2 className={S.header__subtitle}>{content.data.content[globalLanguage as LanguageKeys].subtitle}</h2>
                            </div>
                                <SearchInput />
                        </div>
                        <div className={S.photoBy}> Prague City Tourism & Czech Tourism</div>
                    </div>
                </div>}
        </div>
    )
}