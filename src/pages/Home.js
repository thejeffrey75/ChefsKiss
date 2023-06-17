import  "./Home.css";
import ImageSlider from './ImageSlider';
import { SliderData } from './SliderData';
import chef from "./assets/johnathan-macedo-4NQEvxW2_4w-unsplash.png"
import logo from "./assets/Chefs-Kiss-logos_transparent.png"



// import {Link} from "react-router-dom"


export function Home(){

    return(  
        

        
        <div className='containerx'>
                 
             <h1 className='homequote'>
             Unlock the Secrets of Deliciousness: Join Our Recipe Revolution
        </h1>
        <div className="holdlogo">
            <img className="logo" src={logo}></img>
        </div>
        <div className='imageslider'>
        <ImageSlider slides={SliderData} />
        </div>
        <div className="dashed">
        <p className='words'>
            
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        </div>
     

        <div className="img-gradient">
  <img className="chef"src={chef}/>
</div>

        </div>
        
       

    );


}



export default Home