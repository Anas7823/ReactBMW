import '../style/Accueil.css';

function Accueil(){
    return <div className='contenue'>
        
        <p><h1>Bienvenue sur le site de ReactBMW MotorSport</h1></p>        
            <p>
                <h3>Notre entreprise propose des modifications de véhicule et des prototypes 
                demander par des clients ou communautés comme des préparations de véhicule atypique.</h3>
            </p>

            <div className='services'>
                <div className='service'>
                    <h3>Customisation de véhicule</h3>
                    <img class="img-service" src="https://atelier-gesret.fr/wp-content/uploads/2018/11/LOGO-atelier-gesret-garagiste-a-domicile-blanc-2.png" alt=""></img>
                </div>
            
                <div className='service'>
                    <h3>Création de prototypes</h3>
                    <img class="img-service" src="https://upload.wikimedia.org/wikipedia/fr/5/5f/Cars_%28film%29_Logo.png" alt=""></img>
                </div>     
            </div> 
        
        </div>
}

export default Accueil;