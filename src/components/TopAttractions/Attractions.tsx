import {useContext, useRef} from "react"
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';
import s from './style.module.css'
import {Card} from "./card/Card.tsx";
import {StateContext, StateContextType} from "../../App.tsx";
import {useQuery} from "@tanstack/react-query";
import './atractions.css'
import {AttractionsDataInterface} from "../../types/AttractionsDataTypes.ts";
import {LanguageKeys} from "../../helpers/languageKeys.ts";
import '../../index.css'

export const Attractions = () => {
    const swiperRef = useRef(null);
    // @ts-ignore
    const context: StateContextType = useContext(StateContext)
    if (!context) {
        throw new Error('MyComponent must be used within a StateProvider');
    }

    const {globalLanguage, translation, screen} = context

    const getAttractionsData = async (): Promise<AttractionsDataInterface[]> => {
        const response = await fetch(`https://api2.praguecoolpass.com/object/attraction/top-attractions`);
        const data = await response.json();
        return data
    }

    const {data: AttractionsData} = useQuery({
        queryKey: ['attractionsData'],
        queryFn: getAttractionsData
    });


    return (
        translation && AttractionsData &&
        <section className={s.top_prague__wrapper}>
            <h3 className={s.top__attractions__title}>{translation[globalLanguage as LanguageKeys]['HOME_top_attractions_title']}</h3>
            <div className={s.swiper_width}>
                {screen > 768 ?
                    <>
                        <div
                            className="attractions__left__control"
                            onClick={() => {// @ts-ignore
                                swiperRef.current?.slidePrev()
                            }}>
                        </div>
                        <div className={s.attractions__container}>
                            <Swiper
                                onSwiper={(swiper) => { // @ts-ignore
                                    swiperRef.current = swiper
                                }}
                                modules={[Navigation]}
                                speed={1300}
                                spaceBetween={20}
                                allowTouchMove={true}
                                slidesPerView={screen <= 425 ? 1.2 : screen <= 768 ? 1.2 : screen <= 888 ? 2 : screen <= 1150 ? 3 : 4}
                                slidesPerGroup={screen <= 425 ? 1 : screen <= 768 ? 1 : 2}
                                updateOnWindowResize
                            >
                                {AttractionsData.map((item: AttractionsDataInterface, index: number) => {
                                    return (
                                        <SwiperSlide key={index}>
                                            <Card item={item} language={globalLanguage} translation={translation}/>
                                        </SwiperSlide>
                                    )
                                })}
                            </Swiper>
                        </div>
                        <div
                            className="attractions__right__control"
                            onClick={() => {// @ts-ignore
                                swiperRef.current?.slideNext()
                            }}>
                        </div>
                    </>
                    :
                    <div className={s.attractions__container}>
                        <Swiper
                            onSwiper={(swiper) => { // @ts-ignore
                                swiperRef.current = swiper
                            }}
                            modules={[Navigation]}
                            speed={1300}
                            spaceBetween={20}
                            allowTouchMove={true}
                            slidesPerView={1.2}
                            slidesPerGroup={1}
                            updateOnWindowResize
                        >
                            {AttractionsData.map((item: AttractionsDataInterface, index: number) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <Card item={item} language={globalLanguage} translation={translation}/>
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                    </div>
                }
            </div>
        </section>
    )
}