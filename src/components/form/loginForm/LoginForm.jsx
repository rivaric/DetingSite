import { Link } from 'react-router-dom';
import './LoginForm.scss';
import { useContext, useState } from 'react';
import { Context } from '../../..';
import { observer } from 'mobx-react-lite';

export default observer(function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {store} = useContext(Context);

    return (
        <>
            <div className="containerLogin">

                <h2>login</h2>
                <form>
                    <input 
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                        type="text"
                        className="email inputForm" 
                        placeholder="email"
                        />

                    <br/>
                    <input
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                        type="password" 
                        className="pwd inputForm" 
                        placeholder="password"
                        />
                    <br/>
                    <Link to='/register'>
                        <button className='buttonForm'>
                            <span>register</span>
                        </button>
                    </Link>
                    <Link to='/main'>
                        <button
                            type='submit'
                            onClick={() => store.login(email, password)}
                            className='buttonForm'
                            >
                            <span>sign in</span>
                        </button>
                    </Link>
                </form>
            </div>
        </>
    )
})