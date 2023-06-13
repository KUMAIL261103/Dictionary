import logo from './logo.svg'
import arrow from './icon-arrow-down.svg'
import moon from './icon-moon.svg'

import sun from './icons8-sun.svg'
import { useState } from 'react'
const Header = () => {
    let count=0;
    const [theme,settheme]=useState(moon);
    
    const colorchange = ()=>{
        count++;
        if(count%2===0){
            settheme(moon);
        }else{
            settheme(sun);
        }

    }
    return (  
        <div className="header">
            <img src={logo} alt="logo" className='logo'/>
            <div className="icons">
            <div className='textchange'>
                <p>text</p>
                <img src={arrow} alt='select'/>
            </div>
            <div className="colorchange">
               
                <img src={theme} alt='moon'  width="100%" height="100%" className='moon' onClick={colorchange}/>
            </div>
                
            </div>    

            </div>
        
    );
}
 
export default Header;