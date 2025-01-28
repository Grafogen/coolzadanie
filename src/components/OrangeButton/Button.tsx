import s from './style.module.css'

type Props={
    text:string,
    style?:unknown
}

export const Button = (props:Props) => {


    return (
        <div >
            <button
                // @ts-ignore
                style={props.style} className={s.button}>{props.text}</button>
        </div>
    );
};
