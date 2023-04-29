import { Route, Routes } from 'react-router-dom';

import LoginForm from './components/form/loginForm/LoginForm';
import RegisterForm from './components/form/registerForm/RegisterForm';
import Navbar from './components/navbar/Navbar';
import BackgroungeCircle from './components/backgroungeCircle/BackgroungeCircle';
import Home from './components/home/Home';
import Profile from './components/profile/Profile';
import Settings from './components/settings/Settings';
import Help from './components/help/Help';

import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<BackgroungeCircle/>}>
        <Route index element={<LoginForm/>} />
        <Route path='register' element={<RegisterForm/>} />
        <Route path='main' element={<Navbar/>}>
          <Route path='profile' element={<Profile/>}/>
          <Route path='home' element={<Home/>}/>
          <Route path='settings' element={<Settings/>}/>
          <Route path='help' element={<Help/>}/>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
