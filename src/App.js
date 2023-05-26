import { Route, Routes, useNavigate } from 'react-router-dom';

import LoginForm from './components/form/loginForm/LoginForm';
import RegisterForm from './components/form/registerForm/RegisterForm';
import Layout from './components/layout/Layout';
import BackgroungeCircle from './components/backgroungeCircle/BackgroungeCircle';
import Home from './components/home/Home';
import Profile from './components/profile/Profile';
import Likes from './components/likes/Likes';
import NotAuth from './components/notAuth/NotAuth';

import './App.css';
import { useContext, useEffect } from 'react';
import { Context } from '.';
import { observer } from 'mobx-react-lite';

function App() {

  const navigata = useNavigate();
  const {store} = useContext(Context);

  useEffect(() => {
    if (!store.isAuth) {
      navigata('/main', {replace : true})
    }
    // eslint-disable-next-line
  }, [])


  return (
    <Routes>
      <Route path='/' element={<BackgroungeCircle/>}>
        <Route index element={<LoginForm/>} />
        <Route path='register' element={<RegisterForm/>} />
        <Route path='main' element={<Layout/>}>
          {
            store.isAuth ? 
            <>
                <Route path='profile' element={<Profile/>}/>
                <Route index element={<Home/>}/>
                <Route path='likes' element={<Likes />}/>
            </> :
            <>
                <Route index element={<NotAuth />}/>
            </>
        }
        </Route>
      </Route>
    </Routes>
  );
}



export default observer(App);
