import '../style/App.css';
import Banner from './Banner';
import Footer from './Footer';
import Produit from './Produit';
import Accueil from './Accueil';
import {
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return(
    <div>
      <Banner />

      <Routes>
        <Route path="/" element={<Accueil />}>
        </Route>
        <Route path="/Produit" element={<Produit />}>
        </Route>
      </Routes>
      
      <Footer />
    </div>
  )

}

export default App;
