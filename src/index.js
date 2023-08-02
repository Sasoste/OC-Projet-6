import "./App.scss";
import React from "react";
import ReactDOM from "react-dom/client";
// BrowserRouter sert pour synchroniser interface utilisateur avec l'URL, Routes définit tous les chemins possibles, Route définit quel composant sera affiché en fonction de l'URL 
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import About from "./pages/About.jsx";
import Error from "./pages/Error.jsx";
import Home from "./pages/Home.jsx";
import Logement from "./pages/Logement.jsx";
import Logements from "./logements.json";

// on récupère le root du DOM pour attacher l'application ensuite
const root = document.getElementById("root");

// On crée un root de react pour attacher l'application
// on render (pour l'affichage) l'application dans ce root
// strictmode aide pour trouver les problèmes 
// header et footer dans Router parce qu'ils sont partout et utilisent des éléments de react
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <Router>
      <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement/:id" element={<Logement data={Logements}/>} />
        <Route path="*" element={<Error />} />
      </Routes>
      </Layout>
    </Router>
  </React.StrictMode>
);