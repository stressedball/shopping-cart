export default function ShoppingCart({ cart, removeItem }) {
    const itemsInCart = cart
    const handleClick = (e) => { removeItem(e.target.id) }
    const items = itemsInCart.map(el => {
        return (
            <div className="added-item-container" key={el.id}>
                <div className="cart-img-container">
                    <img src={el[0].path} alt='cart-product-display'></img>
                </div>
                <div className="added-item-description">
                    <h3>{el[0].name}</h3>
                    <h5>{el[0].price}</h5>
                    <button onClick={handleClick} id={itemsInCart.indexOf(el)}>Remove item</button>
                </div>
            </div>
        )
    });
    let total = 0
    itemsInCart.map(el => total += Number(el[0].price))
    return (
        <div role={'shop-list'} className='shop-list-container'>
            <h4>Your selection</h4>
            <div className="items-container">
                {items}
            </div>
            <div className="total">
                <h4>Total CheckOut : {total}</h4>
            </div>
        </div>
    )
}


