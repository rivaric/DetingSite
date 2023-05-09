import { Link } from 'react-router-dom'
import './WhiteButton.scss'

export default function WhiteButton({linkTo, text}) {
    return (
        <div className="text-box">
            <Link to={linkTo} className="btn btn-white btn-animate">
                {text}
            </Link>
        </div>
    )
}