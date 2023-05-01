import Cards from "../cards/Cards";
import Chat from "../chat/Chat";
import Selection from "../selection/Selection";

import './Home.scss'

export default function Home() {
    return (
        <div className="home">
            <Chat/>
            <div className="">
                <Cards/>
                <Selection/>
            </div>
        </div>
    )
}