import '../style/Produit.css';
import M3 from "../assets/m3.jpg";
import M5 from "../assets/m5.jpg";

function Produit() {
    const Produit = 
    [{name: 'M3 Miteuse',
    commentaire: "Avec ses 270cv et ses 250kg ce véhicule totalement homologé va vous satisfaire et vous donnera des sensations tel que celle d'un avion de chasse.",
    image:M3,},

    {name: "M5 de l'abberance",
    commentaire: "Plus lourde que la M3, la M5 Pack M sport + vous garantit une vitesse de pointe et accéleration digne de son nom, cependant à voir si vos points ne disparaitrons pas plus vite que la voiture.",
    image:M5},
]
return(
    <div className='card_items'>
        {Produit.map((produit, index) => (
        <div className='item'>
            
            <div>
               <img className='img-card' src={produit.image} alt=''/> 
            </div>

            <div className='body-card'>
            <h1>{produit.name}</h1>
            <p>{produit.commentaire}</p>
            </div>

        </div>
        ))}
    </div>
)
}

export default Produit;
