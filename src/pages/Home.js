import  "./Home.css";
import ImageSlider from './ImageSlider';
import { SliderData } from './SliderData';
import chef from "./assets/peter-dawn-mM-L0yx5LcQ-unsplash.jpg"
import logo from "./assets/Chefs-Kiss-logos_transparent.png"
import {Link} from "react-router-dom"
// import Recipes from "./pages/Recipes";


// import {Link} from "react-router-dom"


export function Home(){

    return(  
        

        
        <div >
                <div className="holdlogo">
            <img className="logo" src={logo}></img>
        </div>
                 
             <h1 className='homequote'>
             Unlock the Secrets of Deliciousness: Join Our Recipe Revolution
        </h1>
    
        <div className='containerx' >
        <div className='imageslider'>
        <ImageSlider slides={SliderData} />
        </div>
        </div>
        <Link to ="/Recipes">
        <button>Check out our hot new recipes!</button>
        </Link>


        <div className="dashed">
        <h2 className='words'>
            
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        <br />
        <br />
        - Leonardo Simon

        </h2>
        </div>
     

        <div className="img-gradient">
  <img className="chef"src={chef}/>
</div>

        </div>
        
       

    );


}



export default Home