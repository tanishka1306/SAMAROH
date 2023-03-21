
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Home from './page/Home';
import Navbar from './components/Navbar';
import Contactus from './page/Contactus';

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
