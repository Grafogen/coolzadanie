import s from './style.module.css'

type Props={
    text:string,
    style?:any
}

export const Button = (props:Props) => {

    return (
        <div >
            <button style={props.style} className={s.button}>{props.text}</button>
        </div>
    );
};
