import React from 'react'
import { NavLink } from 'react-router-dom';

// each link style needs to be changed
// NavLink 

const linkStyles = {
    display: "inline-block",
    width: "50px",
    padding: "12px",
    paddingLeft: "100px",
    paddingRight: "100px",
    margin: "0 6px 6px",
    background: "#FFB72B",
    textDecoration: "none",
    color: "#F7F7F7",
    fontFamily: "Soleil, Helvetica, Arial, sans-serif",
    fontWeight: "100",
    lettersSpacing: "2px",
    textTransform: "uppercase",
    // color: rgb(0, 0, 0);
    
  };

function Header() {
  return (
    <div> 
        <NavLink
            exact to="/"
            style={linkStyles}
        >
            HOME
        </NavLink>
        <NavLink
            exact to="/recipes"
            style={linkStyles}
        >
            View All Recipes
        </NavLink>
        <NavLink
            exact to="/post"
            style={linkStyles}
        >
            Add a recipe
        </NavLink>
    </div>
  )
}

export default Header