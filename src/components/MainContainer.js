import React, { useState, useEffect } from 'react'
import Search from './Search';
import Slideshow from './Slideshow';
import Footer from './Footer';
import ShowSearchedRecipe from './ShowSearchedRecipe';
import SingleRecipe from './SingleRecipe';
import { Route, useRouteMatch, useParams } from "react-router-dom";

function MainContainer({recipeData}) {
  const [searchInput, setSearchInput] = useState("");

  const searchedRecipe = recipeData.filter(recipe => recipe.name.toLowerCase().includes(searchInput.toLocaleLowerCase()));

console.log(recipeData)
  return (
    <div style={{textAlign: "center"}}>
      <h1>Break an Egg!</h1>
      <Search searchInput={searchInput} setSearchInput={setSearchInput} />
      {searchInput === "" ? null : <ShowSearchedRecipe searchedRecipe={searchedRecipe} />}
      <Slideshow recipeData={recipeData}/>
      <Footer />
    </div>
  )

}



export default MainContainer