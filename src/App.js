import React, {useState, useEffect} from 'react'
import {Routes, useNavigate} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
import GroundDesc from './components/GroundDesc';

// Notre application a pour but de récupérer des données JSON et d'afficher une liste de terrains de basket
// On doit pouvoir cliquer sur un terrain afin d'obtenir sa fiche terrain et l'ajouter ou le supprimer de nos favoris
// L'état doit être résilient et ne pas changer même si on rafraîchit le composant



// Our application aims to retrieve JSON data and display a list of basketball courts
// We must be able to click on a land in order to obtain its land file and add or remove it from our favorites
// The state must be resilient and not change even if the component is refreshed


function App(props) {

  // Récupérer et stocker les données de notre API 

  const [ground, setGround] = useState([]);

  const [favourite, setFavourite] = useState([])





  // Le useEffect permet d'aller interroger l'API en asynchrone
  useEffect(() => {
      fetch('../groundsData.json')
      .then((resp) => resp.json())
      .then((myJson) => (setGround([myJson][0].allGrounds)))
  },[])

  return (
    <Router>
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home ground={ground} favourite={favourite} setFavourite={setFavourite}/>}/>
        <Route path='/GroundDesc/:id' element={<GroundDesc ground={ground}  favourite={favourite} setFavourite={setFavourite}/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
