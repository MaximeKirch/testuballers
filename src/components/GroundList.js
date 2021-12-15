import React, {useState} from 'react'
import {useNavigate } from 'react-router-dom';
import '../App.css'

function GroundList({ground, favourite, setFavourite}) {

    // Initialisation du state qui permet de filtrer les terrains en fonction du select
    const [groundFilter, setGroundFilter] = useState('');

    // Renvoyer vers la page du terrain avec son ID 
    let history = useNavigate();

    // Ajouter un terrain aux favoris en récupérant son nom et son ID 
    function handleAddFavourite(nom, id) {
    
        setFavourite([...favourite, {nom, id}])

    }




    // Renvoyer les données sous forme de tableau pour créer une liste 


    const listGround = ground.filter((item)=> item.limit.includes(groundFilter)).map((item) => ( // Ici on ajoute notre filtre pour renvoyer la liste désirée
        <div className='listContainer'>
         <li onClick={() => history('/GroundDesc/'+item.groundId)}className='groundContainer' key={item.groundId}> {/* le history permet de faire passer l'id dans l'url et donc de cibler le terrain pour la description */}
             {item.groundName}


         </li>
             <button onClick={() => handleAddFavourite(item.groundName, item.groundId)}>Ajouter aux favoris</button>
        </div>
    ))


    return (
        <div className='groundList'>
            <select onChange={(e) => setGroundFilter(e.target.value)}>
                <option value=''>Tous</option>
                <option value='public'>Publiques</option>
                <option value='private'>Privés</option>
            </select>
            {listGround}
        </div>
    )
}

export default GroundList
