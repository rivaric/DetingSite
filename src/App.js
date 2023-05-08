import { Route, Routes } from 'react-router-dom';

import LoginForm from './components/form/loginForm/LoginForm';
import RegisterForm from './components/form/registerForm/RegisterForm';
import Layout from './components/layout/Layout'
import BackgroungeCircle from './components/backgroungeCircle/BackgroungeCircle';
import Home from './components/home/Home';
import Profile from './components/profile/Profile';
import Settings from './components/settings/Settings';
import Help from './components/help/Help';

import './App.css';
import { useContext, useEffect } from 'react';
import { Context } from '.';
import { observer } from 'mobx-react-lite';

function App() {
  const {store} = useContext(Context)

  useEffect(() => {
    if (localStorage.getItem('token')) {
      store.checkAuth()
    }
  })


  return (
    <Routes>
      <Route path='/' element={<BackgroungeCircle/>}>
        <Route index element={<LoginForm/>} />
        <Route path='register' element={<RegisterForm/>} />
        <Route path='main' element={<Layout/>}>
          <Route path='profile' element={<Profile/>}/>
          <Route index element={<Home/>}/>
          <Route path='settings' element={<Settings/>}/>
          <Route path='help' element={<Help/>}/>
        </Route>
      </Route>
    </Routes>
  );
}



export default observer(App);
