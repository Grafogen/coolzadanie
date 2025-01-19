import s from './style.module.css'
import {LanguageKeys} from "../../helpers/languageKeys.ts";
import {StateContext, StateContextType} from "../../App.tsx";
import {useContext, useRef} from "react";
import {useQuery} from "@tanstack/react-query";
import {ReviewInterface} from "../../types/ReviewType.ts";
import CommentCard from "./CommentCard/CommentCard.tsx";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import '../BuyCard/arrowsAndSwiper.css'
import {NavLink} from "react-router-dom";

const AllComments = () => {
    const swiperRef = useRef(null);

    let sumStars = 0;
    let rating = 0;

    // @ts-ignore
    const context: StateContextType = useContext(StateContext)
    if (!context) {
        throw new Error('MyComponent must be used within a StateProvider');
    }
    const {globalLanguage, translation} = context

    const getReviewData = async (): Promise<ReviewInterface[]> => {
        const response = await fetch(`https://api2.praguecoolpass.com/review/approved`);
        const data = await response.json();
        return data
    }

    const {data: ReviewData, isSuccess} = useQuery({
        queryKey: ['ReviewData'],
        queryFn: getReviewData
    });


    if (ReviewData?.length) {
        ReviewData?.forEach((item) => {
            sumStars += item.rating
        })
        // @ts-ignore
        rating = +((sumStars / ReviewData.length).toFixed(1))

    }

    // Функция для случайного выбора 15 отзывов
    const getRandomReviews = (reviews: ReviewInterface[], count: number) => {
        // Перемешиваем массив
        const shuffled = reviews.sort(() => 0.5 - Math.random());
        // Возвращаем первые 15 элементов
        return shuffled.slice(0, count);
    }

    let selectedReviews: ReviewInterface[] = [];

    if (isSuccess && ReviewData?.length) {
        selectedReviews = getRandomReviews(ReviewData, 15);
        selectedReviews.forEach((item) => {
            sumStars += item.rating;
        });
    }


    return (
        isSuccess &&
        <section className={s.section}>
            <div className={s.h3_container}>
                <h3>{translation[globalLanguage as LanguageKeys]['REVIEWS_what_do_customers_say']}</h3>
                <div className={s.stars_wrap}>
                    <div className={s.rating}> {rating}</div>
                    <div className={s.stars}>
                        <span className={s.active_star}></span>
                        <span className={s.active_star}></span>
                        <span className={s.active_star}></span>
                        <span className={s.active_star}></span>
                        <span className={s.active_star}></span>
                    </div>
                </div>
            </div>
            <div className={s.reviews_container}>
                <div
                    className="buy__CoolPass__left__control"
                    onClick={() => {// @ts-ignore
                        swiperRef.current?.slidePrev()
                    }}>
                </div>
                <div className={s.reviews_wrap}>
                    <Swiper
                        onSwiper={(swiper) => { // @ts-ignore
                            swiperRef.current = swiper
                        }}
                        modules={[Navigation]}
                        speed={1300}
                        spaceBetween={20}
                        allowTouchMove={true}
                        slidesPerView={3}
                        slidesPerGroup={3}
                        updateOnWindowResize
                    >
                        {
                            selectedReviews?.map((item, key) => {
                                return (
                                    <SwiperSlide key={key}>
                                        <CommentCard card={item}/>
                                    </SwiperSlide>
                                )
                            })}
                    </Swiper>
                </div>
                <div
                    className="buy__CoolPass__right__control"
                    onClick={() => {// @ts-ignore
                        swiperRef.current?.slideNext()
                    }}>
                </div>
            </div>
            <div>
                <div className={s.links_container}>
                    <div className={s.all_comments}>
                        <NavLink to={'*'} >{translation[globalLanguage as LanguageKeys]['REVIEWS_see_all']}</NavLink>
                    </div>
                    <div className={s.write}>
                        <span >{translation[globalLanguage as LanguageKeys]['REVIEWS_write_your_opinion']}</span>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default AllComments;