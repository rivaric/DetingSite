import { Link } from 'react-router-dom';
import './CloseButton.scss';
import { useContext } from 'react';
import { Context } from "../..";

export default function CloseButton() {

    const {store} = useContext(Context);

    return (
        <Link className="btn-close" to="/" onClick={() => store.logout()} />
    )
}