import s from "./style.module.css";
import {LanguageKeys} from "../../helpers/languageKeys.ts";
import {StateContext, StateContextType} from "../../App.tsx";
import {useContext, useRef} from "react";
import Calculator from "./Calculator/Calculator.tsx";
import {useQuery} from "@tanstack/react-query";
import {Card} from "../../types/PriceTypes.ts";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper/modules";
import './arrowsAndSwiper.css'


const PassCard = () => {
    const swiperRef = useRef(null);
    const refPrev = useRef();
    const prevRef = useRef();
    const nextRef = useRef();
    const refNext = useRef();
    // @ts-ignore
    const context: StateContextType = useContext(StateContext)
    if (!context) {
        throw new Error('MyComponent must be used within a StateProvider');
    }
    const {globalLanguage, translation, screen} = context

    const getPriceData = async (): Promise<Card[]> => {
        const response = await fetch(`https://api2.praguecoolpass.com/cardCategories?eshopId=77a85a2a-6b84-4d79-b856-dfafc14340a0`);
        const data = await response.json();
        return data.cards
    }

    const {data: PriceData} = useQuery({
        queryKey: ['PriceData'],
        queryFn: getPriceData
    });



    return (
        <section className={s.section}>
            <div className={s.h3_container}>
                <h3 className={s.h3}>{translation[globalLanguage as LanguageKeys]['BUY_COOLPASS_PRAGUE_CARD']}</h3>
            </div>
            <div>
                <div className={s.swiper_wrapper}>
                    <div className='swipBuy'>
                        <div className={s.content}>
                            <div
                                ref={prevRef}
                                className="buy__CoolPass__left__control buy__CoolPass__control__disabled"
                                onClick={() => {// @ts-ignore
                                    swiperRef.current?.slidePrev()
                                }}>
                            </div>
                            <div className={s.swiper_container}>

                                    <Swiper
                                        onSwiper={(swiper) => { // @ts-ignore
                                            swiperRef.current = swiper
                                        }}
                                        onBeforeInit={(swiper) => {
                                            // @ts-ignore
                                            refPrev.current = swiper;
                                            // @ts-ignore
                                            refNext.current = swiper;
                                        }}
                                        modules={[Navigation, Pagination]}
                                        speed={1300}
                                        allowTouchMove={true}
                                        spaceBetween={4}
                                        slidesPerView={screen <= 425 ? 1.05 : screen <= 768 ? 1 : 3.05}
                                        slidesPerGroup={screen <= 425 ? 1 : screen <= 768 ? 1 : 2}
                                        pagination={{
                                            clickable: true,
                                        }}
                                        updateOnWindowResize
                                        onSlideChange={(swiper) => {
                                            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                                            swiper.isBeginning
                                                ?// @ts-ignore
                                                prevRef.current.classList.add(
                                                    "buy__CoolPass__control__disabled"
                                                )// @ts-ignore
                                                : prevRef.current.classList.remove(
                                                    "buy__CoolPass__control__disabled"
                                                );
                                            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                                            swiper.isEnd// @ts-ignore
                                                ? nextRef.current.classList.add(
                                                    "buy__CoolPass__control__disabled"
                                                )// @ts-ignore
                                                : nextRef.current.classList.remove(
                                                    "buy__CoolPass__control__disabled"
                                                );
                                        }}
                                    >
                                        {PriceData?.map((item: Card, index: number) => {
                                            return (
                                                <SwiperSlide key={index}>
                                                    <Calculator item={item}/>
                                                </SwiperSlide>
                                            )
                                        })}
                                    </Swiper>
                            </div>
                            <div
                                ref={nextRef}
                                className="buy__CoolPass__right__control"
                                onClick={() => {// @ts-ignore
                                    swiperRef.current?.slideNext()
                                }}>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.tips}>
                <div className={s.first_tip}>
                    <ul>
                        <li>{translation[globalLanguage as LanguageKeys]['CALCULATOR_card_validity']}</li>
                        <li>{translation[globalLanguage as LanguageKeys]['CALCULATOR_child_card_validity_tip']}</li>
                    </ul>
                </div>
                <div className={s.second_tip}>
                    <ul>
                        <li>{translation[globalLanguage as LanguageKeys]['CALCULATOR_student_id_info']}</li>
                    </ul>
                </div>
                <div className={s.third_tip}>
                    <p className={s.one}>{translation[globalLanguage as LanguageKeys]['ADULT_AGE']}</p>
                    <p className={s.two}>{translation[globalLanguage as LanguageKeys]['STUDENT_AGE']}</p>
                    <p className={s.three}>{translation[globalLanguage as LanguageKeys]['CHILD_AGE']}</p>
                </div>
            </div>
        </section>
    );
};

export default PassCard;