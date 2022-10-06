import '../style/App.css';
import Banner from './Banner';
import Footer from './Footer';
import Produit from './Produit';
import Accueil from './Accueil';
import M3drift from './M3drift';
import M5custom from './M5custom';
import M3Touring from './M3touring'
import { useState } from 'react';

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
        <Route path='/M3-drift' element={<M3drift mode={theme}/>}>
        </Route>
        <Route path='/M5-custom' element={<M5custom mode={theme}/>}>
        </Route>
        <Route path='/M3-Touring' element={<M3Touring mode={theme}/>}>
        </Route>
      </Routes>
      
      <Footer mode={theme}/>
    </div>
  )

}

export default App;
