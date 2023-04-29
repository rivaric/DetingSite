import Cards from "../cards/Cards";
import Chat from "../chat/Chat";


export default function Home() {
    return (
        <div className="Home">
            <Chat/>
            <Cards/>
        </div>
    )
}