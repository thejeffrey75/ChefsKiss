import "./Recipes.css"
import salt from "./assets/bank-phrom-OwX4DzrAOq8-unsplash.jpg"
import food1 from "./assets/chad-montano--GFCYhoRe48-unsplash.jpg"
import food2 from "./assets/anh-nguyen-kcA-c3f_3FE-unsplash.jpg"
import food3 from "./assets/eaters-collective-pLKgCsBOiw4-unsplash.jpg"
import food4 from "./assets/chad-montano-MqT0asuoIcU-unsplash.jpg"
import food5 from "./assets/brooke-lark-oaz0raysASk-unsplash.jpg"
import food6 from "./assets/charlesdeluvio-D-vDQMTfAAU-unsplash.jpg"
import food7 from "./assets/khloe-arledge-ND3edEmzcdQ-unsplash.jpg"
import food8 from "./assets/emiliano-vittoriosi-OFismyezPnY-unsplash.jpg"



export function Recipes(){
    return(
        <div>
        
             <h1>Crave your hunger to cook!</h1>
      
        <div className="reccontainer">
        <figure>
            <div > <img src={food1} /></div>
            </figure>
            <figure><div> <img src={food2} /></div>      </figure>
            <figure><div> <img src={food3} /></div> </figure>
            <figure><div> <img src={food4} /></div> </figure>
            <figure><div> <img src={food5} /></div> </figure>
            <figure><div> <img src={food6} /></div> </figure>
            <figure><div> <img src={food7} /></div> </figure>
            <figure><div> <img src={food8} /></div> </figure>
</div>
</div>
    );

}

export default Recipes