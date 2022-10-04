import '../style/Footer.css';

function Footer(props){
    let theme= props.mode
    const numero = "06.12.34.56.78";
    const site = "https://ecole-ipssi.com";
    return <footer>
        <div className={` siteFooter ${theme}`}>
            <h4>
                Compléments d'informations :
            </h4>
            <ul className="liste">
                <li> numéro : {numero}</li>
                <li> site officiel: <a href={site} target="blank">Belek Belek la sorcière</a></li>
                <li> all right reserved</li>
            </ul>
        </div>
    </footer>
}

export default Footer;
