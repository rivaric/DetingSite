import { Link } from 'react-router-dom';
import './LoginForm.scss';

export default function LoginForm() {
    return (
        <>
            <div className="containerLogin">

                <h2>login</h2>
                <form>
                    <input type="text" className="email inputForm" placeholder="email"/>
                    <br/>
                    <input type="text" className="pwd inputForm" placeholder="password"/>
                </form>
                <br/>
                <Link to='/register'>
                    <button className='buttonForm'>
                        <span>register</span>
                    </button>
                </Link>
                <Link to='/main'>
                    <button className='buttonForm'>
                        <span>sign in</span>
                    </button>
                </Link>
                <h3>your registration is complete !</h3>
                <h3>your sign in is complete !</h3>

            </div>
        </>
    )
}