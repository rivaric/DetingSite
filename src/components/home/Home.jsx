import Cards from "../cards/Cards";
import Chat from "../chat/Chat";

import './Home.scss'

export default function Home() {
    return (
        <div className="home">
            <Chat/>
            <div className="">
                <Cards username='Илья Кречин' descr='Привет, меня зовут Илья' />
            </div>
        </div>
    )
}