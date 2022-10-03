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
                    <img class="img-service" src="https://www.ptfrenchcars.com/-_-/res/ad078b32-cb74-4f71-95be-f8372d29e128/images/files/ad078b32-cb74-4f71-95be-f8372d29e128/d3dd547e-2548-4e64-b99b-27496b0a98f9/256-256/0c489a1d219b91e66c571a8ae1b6278225990657" alt=""></img>
                </div>     
            </div> 
        </div>
}

export default Accueil;