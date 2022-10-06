import '../style/M3drift.css'
import m3face from "../assets/m3/BMW-M3-E92-1.jpeg";
import m32 from "../assets/m3/BMW-M3-E92-2.jpeg";
import m33 from "../assets/m3/BMW-M3-E92-3.jpg";



function M3drift(props){
    let theme= props.mode
      return<div className={` M3drift ${theme}`}>
        <div className='contenueProduit'>
            <div className='photo'>
                <div className=''>
                    <img className='img-principal' src={m3face} alt=''/>
                </div>
                <div className='sous-img'>
                    <img className='petiteImg' src={m32} alt=''/>
                    <img className='petiteImg' src={m33} alt=''/>
                    <img className='petiteImg' src={m32} alt=''/>
                </div>
            </div>

            <div className='info'>
                <h1>M3 de base</h1>

                <hr></hr>
                
                <h1>75000$</h1>

                <div className='etat'>
                    <h4 className='enStock'>En Stock</h4>
                </div>
                <br></br>
                <hr></hr>

                <div className='bouton'>
                    <button className='btn-commande'>
                        <h3>Commander</h3>
                    </button>

                    <button className='btn-devis'>
                        <h3>Devis</h3>
                    </button>
                </div>

            </div>

        </div>

        <div className='description'>
            <h1>Description:</h1>
            <div className='textDescription'>
                <h3>
                    Ce véhicule est vendu sans accessoire pour le moment. Il vous sera
                    prochainement possible de commander votre véhicule
                    directement customiser dans notre atelier.
                </h3>
            </div>
        </div>

      </div> 
  }
  

export default M3drift;
