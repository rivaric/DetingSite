import { Route, Routes } from 'react-router-dom';

import LoginPage from './pages/login/LoginPage';
import RegisterPage from './pages/register/RegisterPage';
import MainPage from './pages/main/MainPage';

import './App.css';

function App() {
  return (
    <Routes>
      <Route exact path='/login' Component={LoginPage} />
      <Route exact path='/register' Component={RegisterPage} />
      <Route exact path='/main' Component={MainPage} />
    </Routes>
  );
}

export default App;
