import React from 'react';
import { Link } from "react-router-dom";
// import { Card } from 'react-bootstrap';


function RecipeList({recipeData}) {
 

    const lists = recipeData.map(egg => {
        return (
          <li key={egg.id} className="card">
          <Link to={`/recipes/${egg.id}`}>
            <img style={{height: "236.29px"}} src={egg.image} alt={egg.name} />
          </Link> 
          <h4 className='eggName'>{egg.name}</h4>
          </li>
        )
        
      })

  return (
    <div className="grow">
      <div className='cards lists'>
        {lists}
      </div>
    </div>
   
  )
}

export default RecipeList