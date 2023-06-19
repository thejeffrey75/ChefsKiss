import pizza from "../assets/chad-montano-MqT0asuoIcU-unsplash.jpg"
import "./Pizza.css"

export function Pizza(){
    return(<div>

        <div className="pizzagrid">
         <div className='div1'>
         <h1>Pineapple Pizza
        </h1>
            <img className='recipeimage'src={pizza} alt='pizza' />
           
            </div>
          
          
          <div className="div2">
           <h1 className='ingredientheader'>
        Ingredientes:
        </h1>
        <br />
        
        <p> 
        <ul>
        <li>250 grammatum carnis bovinae macrae</li>
        <li>Salis et piperis (secundum gustum)</li>
        <li>Casei cheddaris secti, quantitatem desideratam</li>
        <li>Panis hamburgeris, divisi in duas partes</li>
        <li>Lactucae foliorum, quantum necessarium</li>
        <li>Cuminum purgatum et piperi, pulverati</li>
        <li>Ketchupi, quantitatem desideratam</li>
        <li>Mustardae, quantitatem desideratam</li>
        <li>Cucumeris marinati, secti in laminas tenuiores</li>
        <li>Cebulae, sectae in annulos</li>
        </ul>
        <br />
        </p>
        <p>
        
        <h1>Instructio:</h1>
        <br />
        
        Cuminum et piper in quamdam patellam permisceto.<br />
        Carnem bovinam in duas partes aequales divide et utrasque partes in formam frustuli concolores compingito.<br />
        Frustula carnium in condimentis cum cuminum et piper exposita rotundato.<br />
        Ignem sub craticula maxime calido adhibito et craticulam oleo ungue et carnium frustulis adorna.<br />
        Carnes super craticulam ab ambo latere praeclarae et magnae quantitatis quattuor minutis adde.<br />
        Focum extrahito et frustula carnis in tepida craticula relinque.<br />
        Partes panis hamburgeris adposito calentem oleo in partes pinguiores tosta.<br />
        Partes panis inferiores admove et in eis folia lactucae positum.<br />
        Supra lactucae folia frustum carnium adpone et super carnes cheddaris laminas posiito.<br />
        Cebulam, ketchupum, mustardam et cucumeris laminas frustulo apposito admove.<br />
        Insuper, partes panis superiores addito et impinguo premi.<br />
        Hamburgensem experiri possumus. Bonum appetitum!<br />
        </p>
            </div>
          
        </div>
                </div>
            
                )
            };
export default Pizza