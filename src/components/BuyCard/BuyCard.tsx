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

    // @ts-ignore
    const context: StateContextType = useContext(StateContext)
    if (!context) {
        throw new Error('MyComponent must be used within a StateProvider');
    }
    const {globalLanguage, translation} = context

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
                <h3>{translation[globalLanguage as LanguageKeys]['BUY_COOLPASS_PRAGUE_CARD']}</h3>
            </div>
            <div>
                <div className={s.swiper_wrapper}>
                    <div className={s.content}>
                        <div
                            className="buy__CoolPass__left__control "
                            onClick={() => {// @ts-ignore
                                swiperRef.current?.slidePrev()
                            }}>
                        </div>
                        <div className={s.swiper_container}>
                            <div className='swiperBuy'>
                                <Swiper
                                    onSwiper={(swiper) => { // @ts-ignore
                                        swiperRef.current = swiper
                                    }}
                                    modules={[Navigation, Pagination]}
                                    speed={1300}
                                    allowTouchMove={true}
                                    slidesPerView={3}
                                    slidesPerGroup={3}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    updateOnWindowResize
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
                        </div>
                        <div
                            className="buy__CoolPass__right__control"
                            onClick={() => {// @ts-ignore
                                swiperRef.current?.slideNext()
                            }}>
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
                    <p>{translation[globalLanguage as LanguageKeys]['ADULT_AGE']}</p>
                    <p>{translation[globalLanguage as LanguageKeys]['STUDENT_AGE']}</p>
                    <p>{translation[globalLanguage as LanguageKeys]['CHILD_AGE']}</p>
                </div>
            </div>
        </section>
    );
};

export default PassCard;