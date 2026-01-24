// import { useState } from 'react'
import zenithlogo from './assets/Zenith.png'
import './App.css'

export function NavBar() {
  return (
    <>
      <div className="header">
        <div  className="astromagLogo"> 
          <img style={{height: "7vh"}} src={zenithlogo}/>
        </div>
        <nav style={{flex: 0.7}}>
          <div className="navBar">
            <a href="/">Home</a>
            <a>Magazines</a>
            <a>Articles</a>
            <a target="_blank" href="https://iitrpr.ac.in/bost/zenith">About us</a>
            <a>Contact</a>
          </div>
        </nav>
      </div>
    </>
  )
}

function App() {
  return(
    <>
      <div className="Content">
        <div className="intropage">
          <img className="contentlogo" src={zenithlogo} />
          <div className="introduction">
            <h1>
              Welcome to Astromag
            </h1>
            <h2>
            A platform by the Zenith Club of IIT Ropar dedicated 
            to space technology, astronomy, and astrophysics, featuring 
            magazines, articles, and explorations that reflect curiosity, research, and 
            student perspectives on the universe.
            </h2>
          </div>
          <button className='start'>Get Started</button>
        </div>
        <div className="magpage">

        </div>
      </div>
    </>
  )
}

export function Footer() {
  return(
    <>
      <div className="ftcopy"><p> © 2026 Zenith. All rights reserved </p></div>
      
    </>
  )
}

export default App
