import React from 'react'
import './App.css'
import Home from './components/home/Home'
import Portfolio from './components/portfolio/Portfolio'
import About from './components/about/About'
import Resume from './components/resume/Resume'
import SideBar from './components/sidebar/sideBar'


const App = () => {
  return(
    <>
    <SideBar/>
    <div className="main">
      <Home/>
      <Portfolio/>
      <About/>
      <Resume/>
    </div>
    
    </>
  );
};

export default App
