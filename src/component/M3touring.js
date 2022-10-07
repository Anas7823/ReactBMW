import '../style/M3Touring.css'
import m3Tface from "../assets/M3-Touring-scaled.jpeg";
import none from "../assets/no-image/no-image.png";



function M3Touring(props){
    let theme= props.mode
      return<div className={` M3Touring ${theme}`}>
           <div className='contenueProduit'>
            <div className='photo'>
                <div className=''>
                    <img className='img-principal' src={m3Tface} alt=''/>
                </div>
                <div className='sous-img'>
                    <img className='petiteImg' src={none} alt=''/>
                    <img className='petiteImg' src={none} alt=''/>
                    <img className='petiteImg' src={none} alt=''/>
                </div>
            </div>

            <div className='info'>
                <h1>M3 Touring</h1>

                <hr></hr>
                
                <h1>Arrive prochainement</h1>

                <div className='etat-r'>
                    <h4 className='pasDeStock'>Pas de Stock</h4>
                </div>
                <br></br>
                <hr></hr>

                <div className='bouton'>
                    <button className='btn-commande'>
                        <h3>Indisponible</h3>
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
                    
                </h3>
            </div>
        </div>
      </div> 
  }
  

export default M3Touring;
