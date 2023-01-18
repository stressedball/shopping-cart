import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from "./components/Home";
import Header from './components/Header';
import Shopping from './components/Shopping';
import ShoppingCart from './components/ShoppingCart';
import ItemDisplay from './components/ItemDisplay';
import Carrousel from './components/Carrousel';
import About from './components/About';
import NotFound from './components/NotFound';
import listOfItems from './items.json';
import uniqid from 'uniqid';

let itemsWithId = {}
let keepItemsInState = false;

function App() {
  const [sessionCart, setSessionCart] = useState([])
  const addToCart = (id) => {
    const watch = itemsWithId.filter(el => el.id === id)
    setSessionCart((sessionCart) => [...sessionCart, watch])
  }
  const removeFromCart = (index) => {
    setSessionCart(() => {
      return sessionCart.filter(el => sessionCart.indexOf(el) !== Number(index))
    })
  }
  itemsWithId = makeItemsIdentifiable();
  return (
    <div className="App">
      <Header count={sessionCart.length} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shopping/*' element={<Shopping cart={sessionCart} addToCart={addToCart} removeItem={removeFromCart}/>} >
          <Route path=':category' element={<Carrousel />} />
        </Route>
        <Route path='/watch/:category/:id' element={<ItemDisplay addToCart={addToCart} cart={sessionCart} />} />
        <Route path='/cart' element={<ShoppingCart cart={sessionCart} removeItem={removeFromCart}/>} />
        <Route path='/about' element={<About />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
      <footer>Made by TS</footer>
    </div>
  );
}
// no other way to preserve the state of items with an id that doesn't get reset
const makeItemsIdentifiable = () => {
  if (keepItemsInState === true) return itemsWithId;
  const items = Object.values(listOfItems)[0]
  for (let i = 0; i < items.length; i++) {
    let item = items[i]
    item.id = uniqid()
  }
  keepItemsInState = true
  return items
}
export { App, itemsWithId };
