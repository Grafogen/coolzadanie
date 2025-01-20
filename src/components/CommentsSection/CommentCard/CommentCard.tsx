import s from './style.module.css'
import {useState} from "react";

// @ts-ignore
const CommentCard = ({card}) => {

    const MAX_STARS = 5;
    const DATE_STRING_LENGTH = 10;
    const MAX_TEXT_DISPLAY_LENGTH = 180;
    const [isTextExpanded, setIsTextExpanded] = useState(false);
    const monthNames = [
        'January', 'February', 'March', 'April', 'May',
        'June', 'July', 'August', 'September', 'October',
        'November', 'December'
    ];

    // @ts-ignore
    const formatReviewDate = (dateString) => {
        dateString = dateString.slice(0, DATE_STRING_LENGTH);
        const dateParts = dateString.split('-').reverse();
        dateParts[1] = monthNames[+dateParts[1]];

        const temp = dateParts[1];
        dateParts[1] = dateParts[0];
        dateParts[0] = temp;
        dateParts[1] += ',';

        return dateParts.join(' ');
    };

    const truncateText = (text:string) => {
        if (text) {
            if (text.length > MAX_TEXT_DISPLAY_LENGTH && !isTextExpanded) {
                return (
                    <p>
                        {`${text.slice(0, MAX_TEXT_DISPLAY_LENGTH)}... `}
                        <span className={s.more} onClick={() => setIsTextExpanded(true)}>more</span>
                    </p>
                );
            } else if (text.length > MAX_TEXT_DISPLAY_LENGTH && isTextExpanded) {
                return (
                    <p>
                        {text}
                        <span className={s.more} onClick={() => setIsTextExpanded(false)}>...less</span>
                    </p>
                );
            } else {
                return <p>{text}</p>;
            }
        }
    };


    const filledStarsCount = card['rating']
    const emptyStarsCount = MAX_STARS - filledStarsCount;

    console.log(filledStarsCount, emptyStarsCount)

    const stars = [
        ...Array(filledStarsCount).fill('filled'),
        ...Array(emptyStarsCount).fill('empty')
    ];
    return (
        card &&
        <div className={s.comment_container}>
            <div className={s.header}>
                <div className={s.stars}>
                    {stars.map((starType, index) => (
                        <span
                            className={starType === 'filled' ? s.active_star : s.void_star}
                            key={index}
                        ></span>
                    ))}
                </div>
                <p className={s.review_name}>{card.title}</p>
                <p className={s.date}>{formatReviewDate(card.date)}</p>
            </div>
            <div className={s.main}>
                <div className={s.main_text}>{truncateText(card.text)}</div>
            </div>
            <div className={s.footer}>
                <div className={s.footer_data}>{card.name}, {card.place}</div>
            </div>
        </div>
    );
};

export default CommentCard;