import React from 'react'
import ReactDOM from 'react-dom';
import NavBar from './NavBar.js'
import Home from './pages/Home';
import Layout from './pages/Layout';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import { HashRouter, Routes, Route } from "react-router-dom";
export default function App() {
    return(
        <HashRouter base="/">       
            <Routes>         
                          
                <Route index element={<Home />} />  
                <Route path="/" element={<Layout />}>          
                <Route path="Projects" element={<Projects />} />           
                <Route path="Contact" element={<Contact />} />           
                <Route path="About" element={<About />} />         
                </Route>       
            </Routes>     
        </HashRouter>   
    ); 
}


ReactDOM.render(<App />, document.getElementById("root"));