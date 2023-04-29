import { Link } from 'react-router-dom';
import './RegisterForm.scss';

export default function RegisterForm() {
    return (
        <>
            <div className="containerRegister">

                <h2>register</h2>
                <form>
                    <input type="text" className="email" placeholder="first name"/>
                    <br/>
                    <input type="text" className="pwd" placeholder="last name"/>
                    <br/>
                    <input type="text" className="pwd" placeholder="years"/>
                    <br/>
                    <input type="text" className="email" placeholder="email"/>
                    <br/>
                    <input type="text" className="pwd" placeholder="password"/>
                    <br/>
                    <input type="text" className="email" placeholder="Repeat password"/>
                </form>
                <Link to='/' className="register">
                    <button >
                        <span>login</span>
                    </button>
                </Link>
                <Link className="signin">
                    <button >
                        <span>sign up</span>
                    </button>
                </Link>
                <h3>your registration is complete !</h3>
                <h3>your sign in is complete !</h3>

            </div>
        </>
    )
}