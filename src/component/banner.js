import '../style/Banner.css';
import Logo from "../assets/BMW-Logo.png";
import * as React from "react";
import { Link } from "react-router-dom";

function Banner(){
	return<div className="banner">
        <Link to='/'>
        <img src={Logo} alt="" className='logo'/>
        </Link>
        <h1>ReactBMW MotorSport</h1>
        <Link to='/Produit'>
            <h4 className='ProduitNav'>Produit</h4>
        </Link>
            
        {/* <a href='/produit'> <h4 className='ProduitNav'>Produit</h4> </a>  chemin avec la balise a*/}
    </div> 
}

export default Banner;
