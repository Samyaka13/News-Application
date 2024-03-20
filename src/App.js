import './App.css';
import {
  Route,
  Routes,
  BrowserRouter
} from "react-router-dom";
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import About from './Components/About';
// import About from '../../textutils/src/Components/About';

export default class App extends Component {
  // s = 'samyak'
  render() { //This render compiles jsx to html and returns the html
    return (
      <div>
        {/* Hello {this.s} here  */}
        <Navbar/>
        {/* <News/> */}
        <BrowserRouter>
        <Routes>
          <Route path='/' element = {<News/>}></Route>
          <Route path='/about' element = {<About/>}></Route>
        </Routes>
        </BrowserRouter>

      </div>
    )
  }
}

 