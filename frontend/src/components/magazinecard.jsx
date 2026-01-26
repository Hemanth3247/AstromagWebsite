export default function MagCard({ magazineno, astromagno, date, topic, title }) {
    return(
        <>
            <div className="magcard">
                <img className='magimg' src={magazineno} />
                <div className="magdet">
                <h1>{'Astromag '+ astromagno}</h1>
                <div className='astrodet'>  
                    <p className='details'>Details</p>
                    <p>{'Published on: '+date}</p>
                    <p>{'Topic: '+topic}</p>  
                    <p className='title'>{title}</p>
                </div>
                <p style={{marginBottom: '20px', fontFamily:'Tektur'}}>Tap to view</p>
                </div>
            </div>
        </>
    );
}