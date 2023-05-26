import { useState, useContext } from 'react';
import { Context } from '../../..';
import { observer } from 'mobx-react-lite';

import './EditForm.scss'

export default observer(function EditForm() {
    const {store} = useContext(Context);
    const [firstName, setFirstName] = useState(store.user.username.split(' ')[0]);
    const [lastName, setLastName] = useState(store.user.username.split(' ')[1]);
    const [years, setYears] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    return (
        <div className="containerEdit">

                <h2 style={{paddingBottom: 20, paddingTop: 30}}>Editing</h2>
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
                    <input 
                        type="text" 
                        className="pwd inputForm" 
                        placeholder="years"
                        onChange={e => setYears(e.target.value)}
                        value={years}
                    />
                    <br/>
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
                    <textarea rows='2' className="email inputForm inputDescr" placeholder='Description'/>
                    <button className='buttonForm' style={{width: '100%'}}>Edit</button>
                </form>
            </div>
    )
})