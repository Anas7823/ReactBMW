import '../style/Banner.css';
import Logo from "../assets/BMW-Logo.png";
import * as React from "react";
import { Link } from "react-router-dom";



function Banner(props){
  let theme= props.mode
	return<div className={` banner ${theme}`}>
        <Link to='/'>
        <img src={Logo} alt="" className='logo'/>
        </Link>
        <h1>ReactBMW MotorSport</h1>
        <div className='ProduitNav'>
            <Link to='/Produit'>
                <h4>Produit</h4>
            </Link>

        </div>
         
    </div> 
}

export default Banner;
