import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About"
import ClaimBook from "./pages/ClaimBook";
import NavBarComponent from "./Components/Nav";
import User from "./pages/User"
function App() {
  return (
    <div className="form_container">
    <NavBarComponent/>
      <BrowserRouter>      
        <Routes>
          <Route path='/home' element={<Home/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/about/:slug' element={<About/>} />
          <Route path='/claim' element={<ClaimBook/>} />
          <Route path='/user' element={<User/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
