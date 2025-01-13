import s from '../style.module.css'
import {NavLink} from "react-router-dom";

const Calculator = () => {
    return (
        <div className={s.calculator_container}>
            <div className={s.calculator_header}>
                <div className={s.calculator_header_content}>
                    <h2 className={s.h2_header}>1 day pass</h2>
                    <p className={s.p_header}>  Buying Prague CoolPass </p>
                </div>
            </div>
            <div className={s.calculator_body}>
                <div className={s.adult}>
                    <p className={s.adult_label}> Adult </p>
                    <p className={s.adult_label_price}> Price</p>
                    <div className={s.price_section}>
                        <div>
                            <p className={s.adult_price}> 64 eur</p>
                        </div>
                    </div>
                    <div className={s.calculator}>
                        <div className={s.decr}>
                            <span className={s.decr_span}></span>
                        </div>
                        <div className={s.count}>
                            <p className={s.counter_num}>0</p>
                        </div>
                        <div className={s.inc}>
                            <div className={s.plus}>
                                <span className={s.vertical}></span>
                                <span className={s.horizontal}></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={s.student}>
                    <p className={s.student_label}> Student</p>
                    <div className={s.price_section}>
                        <div>
                            <p className={s.adult_price}> 48 eur</p>
                        </div>
                    </div>
                    <div className={s.calculator}>
                        <div className={s.decr}>
                            <span className={s.decr_span}></span>
                        </div>
                        <div className={s.count}>
                            <p className={s.counter_num}>0</p>
                        </div>
                        <div className={s.inc}>
                            <div className={s.plus}>
                                <span className={s.vertical}></span>
                                <span className={s.horizontal}></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={s.total_price_section}>
                    <div className={s.total_price}>
                        <p className={s.total_price_label}>Your price:</p>
                        <p className={s.price}>0.00 eur</p>
                    </div>
                </div>
            </div>
            <div className={s.calculator_footer}>
                <NavLink to={'*'} className={s.calculator_footer_link}>
                    <p className={s.footer_text}> COMPLETE YOUR BOOKING</p>
                </NavLink>
            </div>
        </div>
    );
};

export default Calculator;