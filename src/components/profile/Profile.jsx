import { useContext } from "react";
import { Context } from "../..";

export default function Profile() {

    const {store} = useContext(Context);

    return (
        <h1>{store.user.username}</h1>
    )
}