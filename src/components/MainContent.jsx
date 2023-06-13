import { useState } from "react";
const MainContent = (props) => {
    const [array,setarray]= useState([]);
    if(props.display){
        setarray(props.data);
    }
    
    return ( 
        <div className="maincontent">
                {props.display &&<ul>
                    {array.map((meaning,i)=>{
                        return (<li key={i}>{meaning}</li>)
                    })}
                </ul>}
                {!props.display&&(<p>data not found</p>)
                    
                }

                
          </div>
     );
}
 
export default MainContent;