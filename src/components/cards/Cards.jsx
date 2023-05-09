import './Cards.scss';
import profileImg from './55EdDEqrlUo.jpg';
import LikeButton from '../likeButton/LikeButton';
import ChatButton from '../сhatButton/ChatButton';
import DislikeButton from '../dislikeButton/DislakeButton';

export default function Cards() {
    return (
        <div className="card">
            <img src={profileImg} alt="profile img" className="card__img"/>
            <div className="card__descr">
                <div className="card__name">Илья Кречин</div>
                <div className="card__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed atque consequuntur maiores cupiditate ...
                </div>
                <div className="section">
                    <LikeButton/>
                    <DislikeButton/>
                    <ChatButton/>
                </div>
            </div>
        </div>
    )
}