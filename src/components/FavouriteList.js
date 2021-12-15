import React from 'react'

function FavouriteList({favourite, setFavourite}) {

    // Renvoyer la liste des terrains favoris stockés dans le useState favourite 

    let favList = favourite.map((fav) => (
        <div className='favouriteListMap'>
        <li key={fav.id}> {fav.nom}</li>
        <button onClick={() => handleRemoveFavourite(fav.nom)}>X</button>
        </div>

        
    ))

     // Supprimer le terrain des favoris

     function handleRemoveFavourite(nom) {
        setFavourite(favourite => favourite.filter(fav => fav.nom !== nom))
    }


    return (
        <div className='FavouriteList'>

            <h3>Terrains favoris :</h3> 
            <ul>
           {favList}
            </ul>
        </div>
    )
}

export default FavouriteList
