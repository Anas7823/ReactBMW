import '../style/Banner.css';
import Logo from "../assets/BMW-Logo.png";

function Banner(){
	return<div className="banner">
        <img src={Logo} alt="" className='logo'/><h1>ReactBMW MotorSport</h1>
    </div> 
}

export default Banner;
