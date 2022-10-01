import '../style/Accueil.css';

function Accueil(){
    return <div className='contenue'>
        <p><h1>Bien venue sur le site de ReactBMW MotorSport</h1></p>        
            <p>
                <h3>Notre entreprise propose des modifications de véhicule et des prototypes 
                demander par des clients ou communautés comme des préparations de véhicule atypique.</h3>
            </p>
            <div className='services'>
                <div className='service'>
                    <h3>Service 1</h3>
                </div>
                <div className='service'>
                <h3>Service 2</h3>
                </div>     
                
            </div> 
        </div>
}

export default Accueil;