import './Cards.scss';
import profileImg from './f-9KKy3ETxI.jpg'
import zodiacImg from './free-icon-gemini-1885353.png'

export default function Cards() {
    return (
        <div className="card">
            <img src={profileImg} alt="profile img" className="card__img"></img>
            <h1 className='name'>
                Вумэн
            </h1>
            <div className="zodiac">
                <img src={zodiacImg} alt="zodiac img"className="zodiac__img"/>
                <div className='zodiac__text'>86%</div>
            </div>
            <div className="card__descr">
                <p className='card__text'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa autem, repellendus mollitia quibusdam eum harum voluptatem veniam dignissimos libero sapiente placeat reprehenderit ratione eligendi minima! Ducimus temporibus quae repellat sint.
                </p>
            </div>
        </div>
    )
}