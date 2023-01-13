import { NavLink } from "react-router-dom";

export default function Header(){
    return(
        <div id='header'>
        <NavLink to='/' role='home-link'>Home</NavLink>
        <NavLink to='/shopping' role='shopping-link'>Shop</NavLink>
      </div>
    )
}