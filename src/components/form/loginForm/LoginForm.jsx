import { Link } from 'react-router-dom';
import './LoginForm.scss';

export default function LoginForm() {
    return (
        <>
            <div class="container1">

                <h2>login</h2>
                <form>
                    <input type="text" class="email" placeholder="email"/>
                    <br/>
                    <input type="text" class="pwd" placeholder="password"/>
                </form>
                <br/>
                <Link to='/register'>
                    <button class="register">
                        <span>register</span>
                    </button>
                </Link>
                <Link to='/main'>
                    <button class="signin">
                        <span>sign in</span>
                    </button>
                </Link>
                <h3>your registration is complete !</h3>
                <h3>your sign in is complete !</h3>

            </div>
        </>
    )
}