import './Cards.scss';
import profileImg from './f-9KKy3ETxI.jpg';

export default function Cards() {
    return (
        <div className="card">
            <img src={profileImg} alt="profile img" className="card__img"></img>
            <h1 className='title'>
                Роман Калякин
            </h1>
            {/* <div className="zodiac">
                <img src={zodiacImg} alt="zodiac img"className="zodiac__img"/>
                <div className='zodiac__text'>86%</div>
            </div> */}
            <div className="card__descr">
                <div className='card__text'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, enim inventore. Quaerat... 
                </div>
                <div className='card_interests'>
                    Интересы:
                    <ul>
                        <li>Гейство</li>
                        <li>Баскетбо</li>
                        <li>Футбол</li>
                        <li></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}