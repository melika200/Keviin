import './App.css'
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/Home/Home';
import About from './Pages/About/About';
import Skill from './Pages/Skills/Skill';
import Services from './Pages/Services/Services';
import Portfolio from './Pages/Portfolio/Portfolio';
import Contact from './Pages/Contact/Contact'

function App() {
  return (
<>
<BrowserRouter>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/skill' element={<Skill/>}/>
<Route path='/services' element={<Services/>}/>
<Route path='/portfolio' element={<Portfolio/>}/>
<Route path='/contact' element={<Contact/>}/>
</Routes>
</BrowserRouter>

</>
  );
}

export default App;
