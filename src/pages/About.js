import chef from "./assets/travis-grossen-AXDTTuh-0UI-unsplash.jpg"
import "./About.css"

export function About(){
    return(<div>
     

        <div className="chickengrid">
            
         <div className='div1'>
   
         <h1>
        </h1>
            <img className='recipeimage' src={chef} alt='chef' />
           
            </div>
          
          
          <div className="div2">
           <h1 className='ingredientheader'>
 
        </h1>
        <br />
        
        <p> 
        Resensere coquendi artem in Latino, certe commendetur. Coquendi ars Latina multis annis radices habet et multos delicias culinarias exhibet. Verba Latina culinariis technicis et deliciis ciborum nova nitore imbuunt, quod coquendi processum in memoriam revocat.

Certe, coquendi in Latino discere non facilis est, sed fructus laboris abundantes sunt. Latine loqui in culinariis ineptos vere est ut dare linguam alicuius rite nota. Dum coquendi artem in Latino excipis, res novas discis, terminologia culinariam amplias, et culinarias traditiones antiquas exploras.

Exempli gratia, "sauté" verbum latino "frigere" reddi potest, "bake" "coquere in furno," "grill" "assare," et "stir fry" "insudare." Terminologia culinaria Latina tibi amplam basim praebet, ut nova verba experire et proprias tui creare possis.
      
<br />
        </p>
        <p>
        
        <h2><br />
            Reach out to us!</h2>

        <div class="row">
		
	</div>
	<div className="row input-container">
			<div className="col-xs-12">
				<div className="styled-input wide">
					<input type="text" required 
                     placeholder="Name"/>
					
				</div>
			</div>
			<div className="col-md-6 col-sm-12">
				<div className="styled-input">
					<input type="text" required
                    placeholder="Email" />
                    
					
				</div>
			</div>
			<div className="col-md-6 col-sm-12">
				<div className="styled-input">
					<input type="text" required 
                    placeholder="Phone Number"/>

					
				</div>
			</div>
			<div className="col-xs-12">
				<div className="styled-input wide">
					<textarea required placeholder="Leave us a message!" ></textarea>
					
				</div>
			</div>
			<div className="col-xs-12">
				<div className="btn-lrg submit-btn">Send Message</div>
			</div>       
            </div>     
        </p>
            </div>
          
        </div>
                </div>
            
                )
            };
export default About