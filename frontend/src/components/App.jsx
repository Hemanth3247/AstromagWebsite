import { useRef, useState } from 'react'
import { magazines, logo, socialmedia, arrow } from '../assets/images.js'
import { magazinecard } from './magazine.js'
import MagCard from './magazinecard.jsx'
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

  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef(null);
  const SCROLL = 650;

  const handScroll = (scrolled) => {
    if (scrollPosition + scrolled < 0 || scrollPosition + scrolled > containerRef.current.scrollWidth + 500 - containerRef.current.clientWidth) {
      return;
    }
    const newScrollPosition = scrollPosition + scrolled;

    setScrollPosition(newScrollPosition);

    containerRef.current.scrollTo({left: newScrollPosition, behavior: 'smooth'});
  }

  return(
    <>

      <div className="header">
        <div  className="astromagLogo"> 
          <img  className="toplogo" src={logo[1]}/>
        </div>
        <nav style={{flex: 0.7}}>
          <div className="navBar">
            <a href="/">Home</a>
            <a onClick={handleGetStarted}>Magazines</a>
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



        <div ref={containerRef} className="magpage">
          <div className="arrow">
            <button onClick={()=>{handScroll(-SCROLL)}}  className="leftarrow" style={{backgroundColor:'none'}}>
              <img style={{width:"5vh", objectFit:"contain"}} src={arrow[0]} />
            </button>
            <button  onClick={()=>{handScroll(SCROLL)}} className="rightarrow" style={{backgroundColor:'none'}}>
              <img  style={{width:"5vh", objectFit:"contain"}} src={arrow[1]} />
            </button>
          </div>
          <div ref={ sectionRef }  className="magazines">

            {magazinecard.map((item) => (
              <MagCard
                magazineno = {magazines[item.magazineno]}
                astromagno = {item.AstromagNo}
                date = {item.Date}
                topic = {item.Topic}
                title = {item.title}
                link = {item.link} />
            )
            )};

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
