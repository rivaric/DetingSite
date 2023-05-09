import Cards from "../cards/Cards";
import Chat from "../chat/Chat";

import './Home.scss'

export default function Home() {
    return (
        <div className="home">
            <Chat/>
            <div className="">
                <Cards/>
            </div>
        </div>
    )
}