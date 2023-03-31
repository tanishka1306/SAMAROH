
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
import Reservation from "./page/Reservation";

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
      </Routes>
    </div>
   </Router>
  );
}

export default App;
