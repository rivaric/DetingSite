import { useContext } from "react";
import { Context } from "../..";
import Cards from "../cards/Cards";
import EditForm from "../form/editForm/EditForm";

import './Profile.scss'

export default function Profile() {

    const {store} = useContext(Context);

    return (
        <div className="profile">
            <Cards username={store.user.username} text={store.descr}/>
            <EditForm/>
        </div>
    )
}