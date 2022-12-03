import './App.css';
import Navbar from "./Navbar";
import CV from "./CV";
import Project from "./Project";
import About from "./About";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
    <Route path="/about" element={<About />}/>
      <Route path="/cv" element={<CV/>}/>
      <Route path="/project" element={<Project/>}/>
    </Routes>
    </>
  );
}

export default App;
