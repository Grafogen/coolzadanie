import {Link} from 'react-router-dom'
import s from './style.module.css'
import {Button} from "../OrangeButton/Button.tsx";

export const InDevelopment = () => {
    return (
        <>
            <div className={s.wrapper}>
                <h1 className={s.h1}> in development </h1>
                <Link to='/'>
                    <Button text={'Back'} ></Button>
                </Link>
            </div>
        </>
    )
}