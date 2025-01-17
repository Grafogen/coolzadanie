import s from '../style.module.css';
import { NavLink } from "react-router-dom";
import { Card } from "../../../types/PriceTypes.ts";
import { StateContext, StateContextType } from "../../../App.tsx";
import { useContext, useState } from "react";
import { LanguageKeys } from "../../../helpers/languageKeys.ts";

type CalcProps = {
    item: Card
}

const Calculator = ({ item }: CalcProps) => {
    // @ts-ignore
    const context: StateContextType = useContext(StateContext);
    if (!context) {
        throw new Error('MyComponent must be used within a StateProvider');
    }
    const { globalLanguage, translation } = context;

    const [adultCount, setAdultCount] = useState(0);
    const [studentCount, setStudentCount] = useState(0);

    const adultPrice = item.products[0].price;
    const studentPrice = item.products[1].price;

    const totalPrice = (adultCount * adultPrice) + (studentCount * studentPrice);

    return (
        <div className={s.calculator_container}>
            <div className={s.calculator_header}>
                <div className={s.calculator_header_content}>
                    <h2 className={s.h2_header}>{item.products[0].validity_in_days} {translation[globalLanguage as LanguageKeys]['ESHOP_product_name_DAY']} {translation[globalLanguage as LanguageKeys]['ESHOP_product_name_PASS']}</h2>
                    <p className={s.p_header}> {translation[globalLanguage as LanguageKeys]['BUY_PRAGUE_CARD_COOL_PASS']}</p>
                </div>
            </div>
            <div className={s.calculator_body}>
                <div className={s.adult}>
                    <p className={s.adult_label}>  {translation[globalLanguage as LanguageKeys]['CALCULATOR_ADULT']} </p>
                    <p className={s.adult_label_price}>{translation[globalLanguage as LanguageKeys]['PRICE']}</p>
                    <div className={s.price_section}>
                        <div>
                            <p className={s.adult_price}> {adultPrice} EUR</p>
                        </div>
                    </div>
                    <div className={s.calculator}>
                        <div className={s.decr} onClick={() => setAdultCount(Math.max(adultCount - 1, 0))}>
                            <span className={s.decr_span}></span>
                        </div>
                        <div className={s.count}>
                            <p className={s.counter_num}>{adultCount}</p>
                        </div>
                        <div className={s.inc} onClick={() => setAdultCount(adultCount + 1)}>
                            <div className={s.plus}>
                                <span className={s.vertical}></span>
                                <span className={s.horizontal}></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={s.student}>
                    <p className={s.student_label}> {translation[globalLanguage as LanguageKeys]['STUDENT_CHILD']}</p>
                    <div className={s.price_section}>
                        <div>
                            <p className={s.adult_price}> {studentPrice} EUR</p>
                        </div>
                    </div>
                    <div className={s.calculator}>
                        <div className={s.decr} onClick={() => setStudentCount(Math.max(studentCount - 1, 0))}>
                            <span className={s.decr_span}></span>
                        </div>
                        <div className={s.count}>
                            <p className={s.counter_num}>{studentCount}</p>
                        </div>
                        <div className={s.inc} onClick={() => setStudentCount(studentCount + 1)}>
                            <div className={s.plus}>
                                <span className={s.vertical}></span>
                                <span className={s.horizontal}></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={s.total_price_section}>
                    <div className={s.total_price}>
                        <p className={s.total_price_label}>{translation[globalLanguage as LanguageKeys]['YOUR_PRICE']}</p>
                        <p className={s.price}>{totalPrice.toFixed(2)} EUR</p>
                    </div>
                </div>
            </div>
            <div className={s.calculator_footer}>
                <NavLink to={'*'} className={s.calculator_footer_link}>
                    <p className={s.footer_text}> {translation[globalLanguage as LanguageKeys]['CALCULATOR_COMPLETE_BOOKING_BTN']}</p>
                </NavLink>
            </div>
        </div>
    );
};

export default Calculator;