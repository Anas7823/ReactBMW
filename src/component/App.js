import '../style/App.css';
import Banner from './Banner';
import Footer from './Footer';
import Produit from './Produit';
import Accueil from './Accueil';
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
      <button onClick={toggleTheme}>🌓</button>
      <Routes>
        <Route path="/" element={<Accueil mode={theme} />}>
        </Route>
        <Route path="/Produit" element={<Produit mode={theme}/>}>
        </Route>
      </Routes>
      
      <Footer mode={theme}/>
    </div>
  )

}

export default App;
