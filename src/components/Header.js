import { NavLink } from "react-router-dom";
import listOfItems from '../items.json'
export default function Header({count}){
    // use random category if user clicks on shopping nav link from home page
    const randomIndex = Math.trunc(Math.random() * (Object.values(listOfItems)[0].length))
    const category = Object.values(listOfItems)[0][randomIndex].type
    let zIndexHeader = ''
    const setClassOnHeader = () => {
        if (window.innerWidth < 800) {
            if (window.scrollY > 0) {
                document.querySelector('#header').classList.add('header-small-screen')
            } else {
                document.querySelector('#header').classList.remove('header-small-screen')
            }
        }
    }
    window.addEventListener('scroll', setClassOnHeader)
    return(
        <div id='header' className={`${zIndexHeader}`}>
            <div id='links'>
                <NavLink to='/shopping-cart/' role='home-link'>Home</NavLink>
                <NavLink to={`/shopping-cart/shopping/${category}`} role='shopping-link'>Shop</NavLink>
                <NavLink to={'/about'} >About</NavLink>
            </div>
            <div className="logo-container">
                <img className="filter-img" alt="logo-watch" src={process.env.PUBLIC_URL + '/watch-svgrepo-com.svg'}></img>
                <h1>TIME KEEPER</h1>
            </div>
            <NavLink to='/cart' role='shopping-cart' style={{ textDecoration : 'none'}} className='cart-shortcut-container'>
                <div id='cart-shortcut'>
                    <img className="filter-img" src={process.env.PUBLIC_URL + '/svg/shopping-bag-svgrepo-com.svg'} width='30px' alt="cart-svg"></img>
                    <p id='items-count'>{count}</p>
                </div>
            </NavLink>
      </div>
    )
}