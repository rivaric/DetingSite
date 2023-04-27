import { Routes, Route } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Profile from "../../components/Profile/Profile";


export default function Mainpage() {
  return (
    <>
      <Navbar/>
      <div>
        <Routes>
          <Route exact path='/profile' Component={Profile} />
        </Routes>
      </div>
    </>
)
}