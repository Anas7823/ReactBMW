import '../style/Footer.css';

function Footer(){
    const numero = "06.12.34.56.78";
    const site = "https://ecole-ipssi.com";
    return <footer>
        <div className="siteFooter">
            <h4>
                Compléments d'informations :
            </h4>
            <ul className="liste">
                <li> numéro : {numero}</li>
                <li> site officiel: <a href={site}>Belek Belek la sorcière</a></li>
                <li> all right reserved</li>
            </ul>
        </div>
    </footer>
}

export default Footer;
