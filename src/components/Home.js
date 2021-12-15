import React from 'react'
import GroundList from './GroundList'
import FavouriteList from './FavouriteList'

function Home({ground, favourite, setFavourite}) {

 
    return (
        <div className='Home'>
            <h1>Liste des terrains : </h1>
            <div className='homeContainer'>
            <GroundList ground={ground} favourite={favourite} setFavourite={setFavourite} />
            <FavouriteList favourite={favourite} setFavourite={setFavourite}/>
            </div>
            
        </div>
    )
}

export default Home
