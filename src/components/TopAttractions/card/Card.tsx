import {useState} from 'react';
import classes from '../style.module.css'
import {AttractionsDataInterface} from "../../../types/AttractionsDataTypes.ts";
import {LangsInterface} from "../../../types/Langs.ts";


interface CardProps {
    item: AttractionsDataInterface,
    language: string,
    translation: LangsInterface
}

export const Card = ({item, language, translation}:CardProps) => {

    const [likeFull, setLikeFull] = useState(false)

    function handleLikeClick() {
        setLikeFull(!likeFull)
    }

    type Langkeys = keyof LangsInterface;

    return (
        translation && language && item &&
        <div className={classes.item_list_top_prague}
             style={{backgroundImage: `url(https://static2.praguecoolpass.com/small_${item.images[0]})`}}>
            <span
                className={classes.title}>{translation[language as Langkeys]['ATTRACTIONS_label_included']} {translation[language as Langkeys]['ATTRACTIONS_label_with_pass']}</span>
            <div className={classes.bottom_bar}>
                <span className={classes.description}>{item.content[language as Langkeys].title}</span>
                <div className={classes.body}
                     dangerouslySetInnerHTML={{__html: item.content[language as Langkeys].subtitle}}></div>
                <div data-testid='likeId' className={`${classes.like} ${likeFull ? `${classes.likeFull}` : ''} `}
                     onClick={handleLikeClick}></div>
            </div>
        </div>
    )
}