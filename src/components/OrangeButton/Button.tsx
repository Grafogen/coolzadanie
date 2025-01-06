import s from './style.module.css'

type Props={
    text:string,
}

export const Button = (props:Props) => {

    return (
        <div >
            <button className={s.button}>{props.text}</button>
        </div>
    );
};
