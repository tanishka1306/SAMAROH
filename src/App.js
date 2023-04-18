
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Home from './page/Home';
import Navbar from './components/Navbar';
import Contactus from './page/Contactus';
import Aboutus from "./page/Aboutus";
import Gallery from "./page/Gallery";
import Register from "./page/Register";
import Login from "./page/Login";
import Admin from "./page/Admin";
import Reservation from "./page/Reservation";
import User from "./page/User";
import Service from "./page/Service";
import Request from "./page/Request";

function App() {
  return (
   <Router>
    <div>
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/navbar' element={<Navbar/>}></Route>
        <Route exact path='/contactus' element={<Contactus/>}></Route>
        <Route exact path='/aboutus' element={<Aboutus/>}></Route>
        <Route exact path='/gallery' element={<Gallery/>}></Route>
        <Route exact path='/register' element={<Register/>}></Route>
        <Route exact path='/login' element={<Login/>}></Route>
        <Route exact path='/reservation' element={<Reservation/>}></Route>
        <Route exact path='/admin' element={<Admin/>}></Route>
        <Route exact path='/admin/users' element={<User/>}></Route>
        <Route exact path='/admin/requests' element={<Request/>}></Route>
        <Route exact path='/service' element={<Service/>}></Route>
        

      </Routes>
    </div>
   </Router>
  );
}

export default App;
