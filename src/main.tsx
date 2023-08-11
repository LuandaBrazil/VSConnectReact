import React from 'react';
import ReactDOM from 'react-dom/client';


//componentes
import Home from "./pages/Home/";
import ListaServicos from './pages/ListaServicos';


//Rotas

import { BrowserRouter, Routes, Route } from "react-router-dom"

//estilização global
import "./index.css";
import Footer from './components/Footer';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>

      <Footer />
    </BrowserRouter>
  </React.StrictMode>
)
