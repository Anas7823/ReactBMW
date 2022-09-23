import '../style/Produit.css';
import C1 from "../assets/C1.png";
import C5 from "../assets/C5.png";

function Produit() {
    const Produit = 
    [{name: 'C1 Miteuse',
    commentaire: "Avec ses 270cv et ses 250kg ce véhicule totalement homologé va vous satisfaire et vous donnera des sensations tel que celle d'un avion de chasse.",
    image:C1,},

    {name: "C5 de l'abberance",
    commentaire: "Plus lourde que la C1, la C5 Pack M sport + vous garantit une vitesse de pointe et accéleration digne de son nom, cependant à voir si le freinage assume le poids et la puissance.",
    image:C5},
]
return(
    <div className='card_items'>

    </div>
)
}

export default Produit;
