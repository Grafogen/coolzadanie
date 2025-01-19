import s from './style.module.css'
import {LanguageKeys} from "../../helpers/languageKeys.ts";
import {StateContext, StateContextType} from "../../App.tsx";
import {useContext} from "react";
import {useQuery} from "@tanstack/react-query";
import {ReviewInterface} from "../../types/ReviewType.ts";

const AllComments = () => {
    
    let sumStars = 0;
    let rating = 0;
    // @ts-ignore
    const context: StateContextType = useContext(StateContext)
    if (!context) {
        throw new Error('MyComponent must be used within a StateProvider');
    }
    const {globalLanguage, translation} = context

    const getReviewData = async ():Promise<ReviewInterface[]> => {
        const response = await fetch(`https://api2.praguecoolpass.com/review/approved`);
        const data = await response.json();
        return data
    }

    const {data: ReviewData} = useQuery({
        queryKey: ['ReviewData'],
        queryFn: getReviewData
    });


    if (ReviewData?.length) {
        ReviewData?.forEach((item) => {
            sumStars+=item.rating
        })
        // @ts-ignore
        rating = + ((sumStars / ReviewData.length).toFixed(1))

    }

    return (
        <section className={s.section}>
            <div className={s.h3_container}>

                <h3>{translation[globalLanguage as LanguageKeys]['REVIEWS_what_do_customers_say']}</h3>
                <div className={s.stars_wrap}>
                    <div className={s.rating}> {rating}</div>
                    <div className={s.stars}>
                        <span className={s.active_star}></span>
                        <span  className={s.active_star}></span>
                        <span  className={s.active_star}></span>
                        <span  className={s.active_star}></span>
                        <span  className={s.active_star}></span>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </section>
    );
};

export default AllComments;