import "./App.css";
import Classes from "./components/Classes";
import Navbar2 from "./components/Navbar2";
import Classwork from "./components/Classwork";
import MyClass from "./components/MyClass";
import Login from './components/Login'
import Assignment from "./components/Assignment";
import JoinedClasses from "./components/JoinedClasses";
import MyContext from "./context/classes/Mycontext";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Signup from "./components/SignUp";

function App() {
  return (
    <>
      <MyContext>
        <BrowserRouter>

          <Routes>
            <Route path="/" element={<Classes />} />
            <Route path="/about" element={<div>this is about</div>} />
            <Route path="/classwork/:classname/:section" element={<Classwork />} />
            <Route path="/myclass/:classname/:section" element={<MyClass />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </BrowserRouter>
      </MyContext>
    </>
  );
}

export default App;
