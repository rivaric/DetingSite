import { Link } from 'react-router-dom';
import './DislakeButton.scss';

export default function DislikeButton() {
    return (
        <div className="wrapperDislikeButton">
            <Link to='/' className="close-button">
                <div className="in">
                    <div className="close-button-block"></div>
                    <div className="close-button-block"></div>
                </div>
                <div className="out">
                    <div className="close-button-block"></div>
                    <div className="close-button-block"></div>
                </div>
            </Link>
        </div>
    )
}