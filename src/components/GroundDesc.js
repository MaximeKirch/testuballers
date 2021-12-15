import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'

function GroundDesc({ground, favourite, setFavourite}) {

    // Récupérer l'id de l'élément avec useParams
const {id} = useParams();
const recid = {id}.id;


//Effectuer une recherche de l'élément grâce à son ID et récupérer le terrain correspondant

// La variable finaltarget représente le terrain sur lequel on a cliqué précédemment


// On map d'abord les éléments de ground pour récupérer leur ID 
const target = ground.map(el => el.groundId);

// Variable de test qui permettait de vérifier si un élément contenait ou non l'ID passé dans le useParams et si oui, lequel.
const targetincludes = target.includes(recid);

// On cherche l'index de l'élément qui contient l'ID passé par le useParams
const finaltarget = target.indexOf(recid);

// Ici on utilise notre variable finaltarget pour sélectionner l'index stocké dans notre tableau d'objets ground passé en props 
let descTarget = ground[finaltarget];







//Ajouter l'élément aux favoris

function handleAddFavourite(nom, id) {
    
    setFavourite([...favourite, {nom, id}]) // Itération du tableau favourite auquel nous ajoutons l'élément avec son nom et son id : plus efficace pour réutiliser les données par la suite

}
    return (
        <div className='GroundDesc'>
            <div className='GroundDescName'>
                <h1>{descTarget.groundName}</h1>

                <button id='descBtn' onClick={() => handleAddFavourite(descTarget.groundName, descTarget.groundId)}>Ajouter aux favoris 🦬</button>
            </div>

            <div className='GroundInfos'>
                <div id='GroundAddress'>
                    <h3>Localisation</h3>
                    <p>{descTarget.address}</p>
                </div>

                <div id='GroundSpecs'>
                    <h3>Détails du terrain</h3>
                    <p> Accessibilité : {descTarget.limit ? descTarget.limit : 'Inconnu' }</p> {/* L'opérateur ternaire permet d'afficher inconnu si la valeur n'est pas renseignée */}
                    <p>Nombre de paniers : {descTarget.basketNumber ? descTarget.basketNumber : 'Inconnu'}</p>
                    <p>S'y rendre : {descTarget.transport ? descTarget.transport : 'Inconnu'}</p>
                </div>
            </div>


            
        </div>
    )
}

export default GroundDesc
