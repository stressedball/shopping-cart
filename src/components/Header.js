import { NavLink } from "react-router-dom";
import listOfItems from '../items.json'

export default function Header({count}){
    // use random category if user clicks on shopping nav link from home page
    const randomIndex = Math.trunc(Math.random() * (Object.values(listOfItems)[0].length))
    const category = Object.values(listOfItems)[0][randomIndex].type
    return(
        <div id='header'>
            <div id='links'>
                <NavLink to='/' role='home-link'>Home</NavLink>
                <NavLink to={`/shopping/${category}`} role='shopping-link'>Shop</NavLink>
            </div>
            <NavLink to='/cart' role='shopping-cart' style={{ textDecoration : 'none'}}>
                <div id='cart-shortcut'>
                    <img src='../svg/shopping-bag-svgrepo-com.svg' width='30px' alt="cart-svg"></img>
                    <p id='items-count'>{count}</p>
                </div>
            </NavLink>
      </div>
    )
}