// import "./App.css";
import CreateUser from "./pages/CreateUser";
import { Routes, Route, useParams } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/AboutUs";
import Nav from "./pages/Nav";

function App() {
  
  return (
    <div>
      <Nav id={1234567}/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about/:id" element={<About/>} />
      </Routes>
      <div>soy un footer</div>
    </div>
  );
}

export default App;
