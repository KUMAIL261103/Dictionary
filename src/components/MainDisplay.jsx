import play from './icon-play.svg'

const MainDisplay = (props) => {
    
    const audioHandler=(audioUrl)=>{
    const audio = new Audio(audioUrl);
    audio.play();
  };
    
    return (  
        <>
       {props.display &&  
        <div className="mainDisplay">
            
           <div className="textdisplay">
                <p className='word'>{props.data[0].word}</p>
                <p className='sound'>{props.data[0].phonetic}</p>
            </div>
           
           <img src={play} alt ="play" onClick={()=>audioHandler(props.data[0].phonetics[0].audio)}></img>
        </div>}
        </>
    );
}
 
export default MainDisplay;