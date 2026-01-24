import { useRef } from 'react'
import zenithlogo from './assets/Zenith.png'
import astro1 from './assets/astro1.jpg'
import astro2 from './assets/astro2.jpg'
import astro3 from './assets/astro3.jpg'
import astro4 from './assets/astro4.jpg'
import astro5 from './assets/astro5.jpg'
import astro6 from './assets/astro6.jpg'
import astro7 from './assets/astro7.jpg'
import astro8v1 from './assets/astro8v1.jpg'
import astro8v2 from './assets/astro8v2.jpg'
import astro9 from './assets/astro9.png'
import Logo from './assets/AstromagLogoWB.png'

import './App.css'


export function NavBar() {
  return (
    <>
      <div className="header">
        <div  className="astromagLogo"> 
          <img className="toplogo" src={Logo}/>
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
  const sectionRef = useRef(null);
  const handleGetStarted = () => {
  sectionRef.current.scrollIntoView({
    behavior: "smooth"
  });
  };

  return(
    <>
      <div className="Content">
        <div className="intropage">
          <img className="contentlogo" src={zenithlogo} />
          <div className="introduction">
            <h1 className='introhead'>
              Welcome to Astromag
            </h1>
            <h2 className='intropara'>
            A platform by the Zenith Club of IIT Ropar dedicated 
            to space technology, astronomy, and astrophysics, featuring 
            magazines, articles, and explorations that reflect curiosity, research, and 
            student perspectives on the universe.
            </h2>
          </div>
          <button onClick={handleGetStarted} className='start'>Get Started</button>
        </div>
        <div ref={sectionRef} className="magpage">
          <div className="magazines">
            <div className="magcard">
              <img className='magimg' src={astro1} />
              <div className="magdet">
                <h1>Astromag 1</h1>
                <div className='astrodet'>
                  <p className='details'>Details</p>
                  <p>Published on: 2021</p>
                  <p>Topic: Secret's of Space</p>  
                  <p className='title'>Space Exploration</p>
                </div>
                <p style={{marginBottom: '20px', fontFamily:'Tektur'}}>Tap to view</p>
              </div>
            </div>
            <div className="magcard">
              <img className='magimg' src={astro2} />
              <div className="magdet">
                <h1>Astromag 2</h1>
                <div className='astrodet'>
                  <p className='details'>Details</p>
                  <p>Published on: 2022</p>
                  <p>Topic: Cosmic Contradictions</p>  
                  <p className='title'>Paradoxes</p>
                </div>
                <p style={{marginBottom: '20px', fontFamily:'Tektur'}}>Tap to view</p>
              </div>
            </div>
            <div className="magcard">
              <img className='magimg' src={astro3} />
              <div className="magdet">
                <h1>Astromag 3</h1>
                <div className='astrodet'>
                  <p className='details'>Details</p>
                  <p>Published on: 2023</p>
                  <p>Topic: The Big Bang THeory</p>  
                  <p className='title'>Origin of Universe</p>
                </div>
                <p style={{marginBottom: '20px', fontFamily:'Tektur'}}>Tap to view</p>
              </div>
            </div>
            <div className="magcard">
              <img className='magimg' src={astro4} />
              <div className="magdet">
                <h1>Astromag 4</h1>
                <div className='astrodet'>
                  <p className='details'>Details</p>
                  <p>Published on: 2023</p>
                  <p>Topic: Infinity</p>  
                  <p className='title'>Time Travel</p>
                </div>
                <p style={{marginBottom: '20px', fontFamily:'Tektur'}}>Tap to view</p>
              </div>
            </div>
            <div className="magcard">
              <img className='magimg' src={astro5} />
              <div className="magdet">
                <h1>Astromag 5</h1>
                <div className='astrodet'>
                  <p className='details'>Details</p>
                  <p>Published on: 2024</p>
                  <p>Topic: Singularity</p>  
                  <p className='title'>Black Holes</p>
                </div>
                <p style={{marginBottom: '20px', fontFamily:'Tektur'}}>Tap to view</p>
              </div>
            </div>
            <div className="magcard">
              <img className='magimg' src={astro6} />
              <div className="magdet">
                <h1>Astromag 6</h1>
                <div className='astrodet'>
                  <p className='details'>Details</p>
                  <p>Published on: 2024</p>
                  <p>Topic: Star Life</p>  
                  <p className='title'>Life of Stars</p>
                </div>
                <p style={{marginBottom: '20px', fontFamily:'Tektur'}}>Tap to view</p>
              </div>
            </div>
          <div className="magcard">
            <img className='magimg' src={astro7} />
            <div className="magdet">
              <h1>Astromag 7</h1>
              <div className='astrodet'>
                <p className='details'>Details</p>
                <p>Published on: 2025</p>
                <p>Topic: Alien Life</p>  
                <p className='title'>Alien Worlds</p>
              </div>
                <p style={{marginBottom: '20px', fontFamily:'Tektur'}}>Tap to view</p>
            </div>
          </div>
          <div className="magcard">
            <img className='magimg' src={astro8v1} />
            <div className="magdet">
              <h1>Astromag 8 Vol 1</h1>
              <div className='astrodet'>
                <p className='details'>Details</p>
                <p>Published on: 2025</p>
                <p>Topic: Space Tech</p>  
                <p className='title'>Technauts</p>
              </div>
                <p style={{marginBottom: '20px', fontFamily:'Tektur'}}>Tap to view</p>
            </div>
          </div>
          <div className="magcard">
            <img className='magimg' src={astro8v2} />
            <div className="magdet">
              <h1>Astromag 8 Vol 2</h1>
              <div className='astrodet'>
                <p className='details'>Details</p>
                <p>Published on: 2026</p>
                <p>Topic: Space Tech</p>  
                <p className='title'>Technauts</p>
              </div>
                <p style={{marginBottom: '20px', fontFamily:'Tektur'}}>Tap to view</p>
            </div>
          </div>
          <div className="magcard">
            <img className='magimg' src={astro9} />
            <div   style={{marginRight:'2vh'}}  className="magdet">
              <h1>Astromag 9</h1>
              <div className='astrodet'>
                <p className='details'>Details</p>
                <p>Published on: 2026</p>
                <p>Topic: Coming Soon</p>  
                <p className='title'>Coming Soon</p>
              </div>
                <p style={{marginBottom: '20px', fontFamily:'Tektur'}}>Tap to view</p>
            </div>
          </div>
          </div>
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
