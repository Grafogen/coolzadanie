import s from './style.module.css'
import {LanguageKeys} from "../../helpers/languageKeys.ts";
import {StateContext, StateContextType} from "../../App.tsx";
import {useContext, useRef} from "react";
import {useQuery} from "@tanstack/react-query";
import {ReviewInterface} from "../../types/ReviewType.ts";
import CommentCard from "./CommentCard/CommentCard.tsx";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import './comments.css'
import {NavLink} from "react-router-dom";


const AllComments = () => {
    const swiperRef = useRef(null);
    const refPrev = useRef();
    const prevRef = useRef();
    const nextRef = useRef();
    const refNext = useRef();
    let sumStars = 0;
    let rating = 0;

    // @ts-ignore
    const context: StateContextType = useContext(StateContext)
    if (!context) {
        throw new Error('MyComponent must be used within a StateProvider');
    }
    const {globalLanguage, translation, screen} = context

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


    const getRandomReviews = (reviews: ReviewInterface[], count: number) => {
        const shuffled = reviews.sort(() => 0.5 - Math.random());
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
            <div className='comments'>
                <div className={s.reviews_container}>
                    <div
                        ref={prevRef}
                        className="comments__left__control comments__control__disabled"
                        onClick={() => {// @ts-ignore
                            swiperRef.current?.slidePrev()
                        }}
                        style={{ backgroundImage: `url("https://praguecoolpass.com/img/left-arrow.4841114c.svg")` }}>
                    </div>
                    <div className={s.reviews_wrap}>
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
                            modules={[Navigation]}
                            speed={1300}
                            spaceBetween={20}
                            allowTouchMove={true}
                            slidesPerView={screen <= 425 ? 1 : screen <= 768 ? 2 : 3}
                            slidesPerGroup={screen <= 425 ? 1 : screen <= 768 ? 1 : 3}
                            updateOnWindowResize
                            onSlideChange={(swiper) => {
                                // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                                swiper.isBeginning
                                    ? // @ts-ignore
                                    prevRef.current.classList.add(
                                        "comments__control__disabled"
                                    )
                                    :// @ts-ignore
                                    prevRef.current.classList.remove(
                                        "comments__control__disabled"
                                    );
                                // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                                swiper.isEnd
                                    ?// @ts-ignore
                                    nextRef.current.classList.add(
                                        "comments__control__disabled"
                                    )
                                    :// @ts-ignore
                                    nextRef.current.classList.remove(
                                        "comments__control__disabled"
                                    );
                            }}
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
                        ref={nextRef}
                        className="comments__right__control comments__control__disabled"
                        onClick={() => {// @ts-ignore
                            swiperRef.current?.slideNext()
                        }}
                        style={{ backgroundImage: `url("https://praguecoolpass.com/img/right-arrow.7fb8afe3.svg")` }}>

                    </div>
                </div>
                <div>
                    <div className={s.links_container}>
                        <div className={s.all_comments}>
                            <NavLink to={'*'}>{translation[globalLanguage as LanguageKeys]['REVIEWS_see_all']}</NavLink>
                        </div>
                        <div className={s.write}>
                            <span>{translation[globalLanguage as LanguageKeys]['REVIEWS_write_your_opinion']}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default AllComments;