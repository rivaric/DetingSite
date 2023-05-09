import ChatButton from '../whiteButton/WhiteButton'
import './NotAuth.scss'

export default function NotAuth() {
    return (
        <div className="notAuth">
            <div className="notAuth__title">
                Авторизуйтесь!
            </div>
            <div className="notAuth__descr">
                Вы не авторизованный пользователь, пожалуйста, <br/>вернитесь на страницу логина
            </div>

            <div className='wrapperChatButton'>
                <ChatButton linkTo='/' text='Login'/>
            </div>
        </div>
    )
}