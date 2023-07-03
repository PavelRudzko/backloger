import { useState } from 'react'
import React from 'react'
import './App.css'
import Navbar from './Comps /NavBar'
import Header from './Comps /header'
import Footer from './Comps /Footer'
import Home from './pages/Home'
import Ideas from './pages/Ideas'
import Reports from './pages/Reports'
import Team from './pages/Team'

import {BrowserRouter as Router, Routes ,Route } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header></Header>
    <Router>
      <Navbar/>
      
      <Routes>
         <Route exact path='/' element ={<Home/>} /> 
      </Routes>
    </Router>
    <Footer/>
      {/* <div>
        <header> <Header/></header>

        
      <label for="name">Name (4 to 8 characters):</label>

<input type="text" id="name" name="name" required


       minlength="4" maxlength="8" size="10"/>

        <input type="file" accept="image/*, text/*" name="file"/>

      </div>
      <h1> Backloger</h1>
      {/* <div> <Navbar/> </div> */}

      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
        Use application for aproach you idea 
        </p>
      </div>
      <footer> <Footer/> </footer>
      <p className="read-the-docs">
        Click on the Backloger logos to start
      </p>  */}
    </>
  );
}

export default App
