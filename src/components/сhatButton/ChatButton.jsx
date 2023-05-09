import { Link } from 'react-router-dom'
import './ChatButton.scss'

export default function ChatButton() {
    return (
        <div className="text-box">
            <Link to="/" className="btn btn-white btn-animate">
                Chat
            </Link>
        </div>
    )
}