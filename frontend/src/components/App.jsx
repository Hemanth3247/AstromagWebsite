import { useRef } from 'react'
import { magazines, logo, socialmedia } from '../assets/images.js'
import './App.css'


export function NavBar() {
  return (
    <>
      
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

  const contactRef = useRef(null); 
  const getContact = () => {
  contactRef.current.scrollIntoView({
    behavior:"smooth"
  });
  };

  return(
    <>
      <div className="header">
        <div  className="astromagLogo"> 
          <img  className="toplogo" src={logo[1]}/>
        </div>
        <nav style={{flex: 0.7}}>
          <div className="navBar">
            <a href="/">Home</a>
            <a>Magazines</a>
            <a>Articles</a>
            <a target="_blank" href="https://iitrpr.ac.in/bost/zenith">About</a>
            <a onClick={getContact} >Contact</a>
          </div>
        </nav>
      </div>
      <div className="Content">
        <div className="intropage">
          <img className="contentlogo" src={logo[0] } />
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
            <div className="arrow">
              <button>
                
              </button>
            </div>
            <div className="magcard">
              <img className='magimg' src={magazines[0]} />
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
              <img className='magimg' src={magazines[1]} />
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
              <img className='magimg' src={magazines[2]} />
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
              <img className='magimg' src={magazines[3]} />
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
              <img className='magimg' src={magazines[4]} />
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
              <img className='magimg' src={magazines[5]} />
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
            <img className='magimg' src={magazines[6]} />
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
            <img className='magimg' src={magazines[7]} />
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
            <img className='magimg' src={magazines[8]} />
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
            <img className='magimg' src={magazines[9]} />
            <div  className="magdet">
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
      <div className="footer">
        <div className="foothead">
          <div ref={contactRef} className="contact">
            <div><p style={{minHeight: '14vh'}}>Contact Us</p></div>
            <div className="mail">
              <p>For any queries contact us at:</p>
              <div className="mailid">
                <img src={socialmedia[0]} style={{width:'4vh'}} />
                <a href="mailto:zenithclub@iitrpr.ac.in" className='maillink'>zenithclub@iitrpr.ac.in</a>
              </div>
            </div>
          </div>
          <div className='follow'>
            <p>Follow Us</p>
            <div className="socials">
              <div><a target="_blank" href="https://www.instagram.com/zenith_iit_ropar/"><img style={{width:'7vh'}} src={socialmedia[1]} /></a></div>
              <div><a target="_blank" href="https://www.linkedin.com/company/zenith-iit-ropar/"><img style={{width:'7vh'}} src={socialmedia[2]} /></a></div>
              <div><a target="_blank" href="https://www.youtube.com/@Zenith_club" ><img style={{width:'9vh'}} src={socialmedia[3]} /></a></div>
            </div>
          </div>
          <div>
          </div>
        </div>
      </div>
      <div className="ftcopy"><p> © 2026 Zenith. All rights reserved </p></div>
    </>
  )
}



export function Contact() {

  return(
    <>
      
    </>
  )
}

export function Footer() {
  return(
    <>

    </>
  )
}

export default App
