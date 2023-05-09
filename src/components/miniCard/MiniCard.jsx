import { useRef } from 'react';
import imgCard from './55EdDEqrlUo.jpg';
import './MiniCard.scss';

export default function MiniCard() {

    const text = useRef();
    const close = useRef();

    return (
        <div 
            className="miniCard"
            onMouseEnter={() => {
                text.current.style.opacity = 1;
                close.current.style.opacity = 1;
            }}
            onMouseLeave={() => {
                text.current.style.opacity = 0;
                close.current.style.opacity = 0;
            }}   
        >
            <div className="close" ref={close}></div>
            <img className="miniCard__img" src={imgCard} alt=''/>
            <div className="miniCard__descr">
                <div className="card__name miniCard__name">
                    Илья Кречин
                </div>
                <div className="miniCard__text" ref={text}>
                    Привет, меня зовут Илья
                </div>
            </div>

        </div>
    )
}