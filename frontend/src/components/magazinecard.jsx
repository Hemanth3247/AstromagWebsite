export default function MagCard({ magazineno, astromagno, date, topic, title, link }) {
    return(
        <>
            <div className="magcard">
                <a className="maglink" target="_blank" href={"https://astromag.onrender.com/pdf/"+link}>
                <img className='magimg' src={magazineno} />
                <div className="magdet">
                <h1>{'Astromag '+ astromagno}</h1>
                <div className='astrodet'>  
                    <p className="magdetails">{'Published on: '+date}</p>
                    <p className="magdetails">{'Topic: '+topic}</p>  
                    <p className='title'>{title}</p>
                </div>
                <p className="tapview" style={{marginBottom: '20px', fontFamily:'Tektur'}}>Tap to view</p>
                </div>
                </a>
            </div>
        </>
    );
}