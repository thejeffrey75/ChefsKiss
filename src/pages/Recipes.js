import "./Recipes.css"
import food1 from "./assets/chad-montano--GFCYhoRe48-unsplash.jpg"
import food2 from "./assets/anh-nguyen-kcA-c3f_3FE-unsplash.jpg"
import food3 from "./assets/eaters-collective-pLKgCsBOiw4-unsplash.jpg"
import food4 from "./assets/chad-montano-MqT0asuoIcU-unsplash.jpg"
import food5 from "./assets/brooke-lark-oaz0raysASk-unsplash.jpg"
import food6 from "./assets/charlesdeluvio-D-vDQMTfAAU-unsplash.jpg"
import food7 from "./assets/khloe-arledge-ND3edEmzcdQ-unsplash.jpg"
import food8 from "./assets/emiliano-vittoriosi-OFismyezPnY-unsplash.jpg"
import {Link} from "react-router-dom"
import React from 'react';

export function Recipes(){

    function burger(){
<Link to= "/Burger"> </Link> 
    }
    
    return(
        
        <div>
        
         
           
        
             <h1>Crave your hunger to cook!</h1>
      
        <div className="reccontainer">
        <Link to ="/Burger"> <figure>
            <div >  <img Link to="/Burger" src={food1} /></div>
            </figure>    </Link>
            <Link to ="/Salad"> <figure><div> <img src={food2} /></div> </figure> </Link>
            <Link to ="/ChickenSandwich"> <figure><div> <img src={food3} /></div> </figure> </Link>
            <Link to ="/Pizza"> <figure><div> <img src={food4} /></div> </figure> </Link>
            <Link to ="/GuacSalad"> <figure><div> <img src={food5} /></div> </figure> </Link>
            <Link to ="/Wonton"> <figure><div> <img src={food6} /></div> </figure> </Link>
            <Link to ="/Salmon"> <figure><div> <img src={food7} /></div> </figure> </Link>
            <Link to ="/Meatballs"> <figure><div> <img src={food8} /></div> </figure> </Link>
</div>
</div>
    );

}

export default Recipes