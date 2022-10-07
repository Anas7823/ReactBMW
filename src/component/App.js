import '../style/App.css';
import Banner from './Banner';
import Footer from './Footer';
import Produit from './Produit';
import Accueil from './Accueil';
import M3drift from './M3drift';
import M5custom from './M5custom';
import M3Touring from './M3touring'
import { useState } from 'react';
import m5face from "../assets/m5/bmw-m5-1.jpg";
import m52 from "../assets/m5/bmw-m5-2.jpg";
import m53 from "../assets/m5/bmw-m5-3.jpg";
import m54 from "../assets/m5/bmw-m5-4.jpg";

import m3Tface from "../assets/M3-Touring-scaled.jpeg";
import none from "../assets/no-image/no-image.png";

import {
  Routes,
  Route,
} from "react-router-dom";
function App() {

  
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
      if (theme === 'light') {
        setTheme('dark');
      } else {
        setTheme('light');
      }
    };
  return(
    
    <div>
      <Banner mode={theme}/>
      <button class="mode" onClick={toggleTheme}>🌓</button>
      <Routes>
        <Route path="/" element={<Accueil mode={theme} />}>
        </Route>
        <Route path="/Produit" element={<Produit mode={theme}/>}>
        </Route>
        <Route path='/Produit/:modele' element={<M3drift mode={theme}/>}>
        </Route>
      </Routes>
      
      <Footer mode={theme}/>
    </div>
  )

}

export default App;
