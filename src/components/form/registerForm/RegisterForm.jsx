import { Link } from 'react-router-dom';
import './RegisterForm.scss';
import { useState, useContext } from 'react';
import { Context } from '../../..';
import { observer } from 'mobx-react-lite';

export default observer(function RegisterForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {store} = useContext(Context);

    return (
        <>
            <div className="containerRegister">
                <h2>register</h2>
                <form>
                    <input
                        type="text" 
                        className="email inputForm" 
                        placeholder="first name"
                        onChange={e => setFirstName(e.target.value)}
                        value={firstName}
                    />
                    <br/>
                    <input 
                        type="text" 
                        className="pwd inputForm" 
                        placeholder="last name"
                        onChange={e => setLastName(e.target.value)}
                        value={lastName}
                    />
                    <br/>
                    {/* <input 
                        type="text" 
                        className="pwd inputForm" 
                        placeholder="years"
                        onChange={e => setYears(e.target.value)}
                        value={years}
                    /> */}
                    {/* <br/> */}
                    <input 
                        type="text" 
                        className="email inputForm" 
                        placeholder="email"
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                    />
                    <br/>
                    <input 
                        type="text" 
                        className="pwd inputForm" 
                        placeholder="password"
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                    />
                </form>
                <Link to='/' className="register">
                    <button className='buttonForm'>
                        <span>login</span>
                    </button>
                </Link>
                <Link className="signin" to='/main'>
                    <button 
                        onClick={() => store.registration(firstName, lastName, email, password)}  
                        className='buttonForm'
                    >
                        <span>sign up</span>
                    </button>
                </Link>
            </div>
        </>
    )
})