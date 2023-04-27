import { Link } from 'react-router-dom';
import './RegisterForm.scss';

export default function RegisterForm() {
    return (
        <>
            <div class="container">

                <h2>register</h2>
                <form>
                    <input type="text" class="email" placeholder="first "/>
                    <br/>
                    <input type="text" class="pwd" placeholder="last "/>
                    <br/>
                    <input type="text" class="pwd" placeholder="years"/>
                    <br/>
                    <input type="text" class="email" placeholder="email"/>
                    <br/>
                    <input type="text" class="pwd" placeholder="password"/>
                    <br/>
                    <input type="text" class="email" placeholder="Repeat password"/>
                </form>
                <Link to='/login' className="register">
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