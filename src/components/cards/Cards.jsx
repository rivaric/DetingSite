import './Cards.scss';
import profileImg from './55EdDEqrlUo.jpg';
import LikeButton from '../likeButton/LikeButton';
import WhiteButton from '../whiteButton/WhiteButton';
import DislikeButton from '../dislikeButton/DislakeButton';

export default function Cards({username, descr}) {
    return (
        <>
            <div className="card">
                <img src={profileImg} alt="profile img" className="card__img"/>
                <div className="card__descr">
                    <div className="card__name">{username}</div>
                    <div className="card__text">
                        {descr}
                    </div>
                </div>
                <div className="section">
                    <DislikeButton/>
                    <div className='wrapper_whiteButton'>
                        <WhiteButton linkTo="/main" text='Chat'/>
                    </div>
                    <LikeButton/>
                </div>
            </div>
        </>
    )
}