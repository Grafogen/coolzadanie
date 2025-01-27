import {useEffect, useState} from 'react';
import s from '../style.module.css'
import {AttractionsDataInterface} from "../../../types/AttractionsDataTypes.ts";
import {LangsInterface} from "../../../types/Langs.ts";


interface CardProps {
    item: AttractionsDataInterface,
    language: string,
    translation: LangsInterface
}

export const Card = ({item, language, translation}:CardProps) => {

    const [likeFull, setLikeFull] = useState(false)

    const itemId = item._id;


    const updateLocalStorage = (id: string, isLiked: boolean) => {
        const likes = JSON.parse(localStorage.getItem('likedAttractions') || '[]');
        if (isLiked) {
            likes.push(id);
        } else {
            const updatedLikes = likes.filter((likedId: string) => likedId !== id);
            localStorage.setItem('likedAttractions', JSON.stringify(updatedLikes));
            return;
        }
        localStorage.setItem('likedAttractions', JSON.stringify(likes));
    };

    useEffect(() => {
        const likes = JSON.parse(localStorage.getItem('likedAttractions') || '[]');
        setLikeFull(likes.includes(itemId));
    }, [itemId]);

    function handleLikeClick() {
        const newLikeState = !likeFull;
        setLikeFull(newLikeState);
        updateLocalStorage(itemId, newLikeState);
    }

    type Langkeys = keyof LangsInterface;

    return (
        translation && language && item &&
        <div className={s.item_list_top_prague}
             style={{backgroundImage: `url(https://static2.praguecoolpass.com/small_${item.images[0]})`}}>
            <span
                className={s.title}>{translation[language as Langkeys]['ATTRACTIONS_label_included']} {translation[language as Langkeys]['ATTRACTIONS_label_with_pass']}</span>
            <div className={s.bottom_bar}>
                <span className={s.description}>{item.content[language as Langkeys].title}</span>
                <div className={s.body}
                     dangerouslySetInnerHTML={{__html: item.content[language as Langkeys].subtitle}}></div>
                <div className={`${s.like} ${likeFull ? `${s.likeFull}` : ''} `}
                     onClick={handleLikeClick}></div>
            </div>
        </div>
    )
}