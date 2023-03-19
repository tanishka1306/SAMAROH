
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Home from './page/home/Home';
import Navbar from './components/navbar/Navbar';
import Contactus from './page/contactus/Contactus';

function App() {
  return (
   <Router>
    <div>
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/navbar' element={<Navbar/>}></Route>
        <Route exact path='/contactus' element={<Contactus/>}></Route>
      </Routes>
    </div>
   </Router>
  );
}

export default App;
