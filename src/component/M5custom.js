import '../style/M5custom.css'
import m5face from "../assets/m5/bmw-m5-1.jpg";
import m52 from "../assets/m5/bmw-m5-2.jpg";
import m53 from "../assets/m5/bmw-m5-3.jpg";
import m54 from "../assets/m5/bmw-m5-4.jpg";

function M5custom(props){
    let theme= props.mode
      return<div className={` M5custom ${theme}`}>
           <div className='contenueProduit'>
            <div className='photo'>
                <div className=''>
                    <img className='img-principal' src={m5face} alt=''/>
                </div>
                <div className='sous-img'>
                    <img className='petiteImg' src={m52} alt=''/>
                    <img className='petiteImg' src={m53} alt=''/>
                    <img className='petiteImg' src={m54} alt=''/>
                </div>
            </div>

            <div className='info'>
                <h1>M5 de base</h1>

                <hr></hr>
                
                <h1>120000$</h1>

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
  

export default M5custom;
