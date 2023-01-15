import { useParams, useNavigate } from "react-router-dom"
import { itemsWithId } from "../App"
import arrow from '../svg/right-arrow-svgrepo-com.svg'

export default function ItemDisplay({ addToCart, cart }) {
    const params = useParams()
    const navigate = useNavigate()
    const watch = itemsWithId.find(el => el.id === params.id)
    const categoryItems = itemsWithId.filter(el => el.type === watch.type)
    const getNext = (e) => {
        const id = e.target.dataset.handle
        const watch = categoryItems.filter(el => el.id === id)[0]
        if (categoryItems.map(el => el.id).indexOf(watch.id) + 1 > categoryItems.length - 1) {
            navigate(`/watch/${categoryItems[0].id}`)
        } else {
            const tempIndex = (categoryItems.map(el => el.id).indexOf(watch.id)) + 1
            navigate(`/watch/${categoryItems[tempIndex].id}`)
        }
    }
    const getPrevious = (e) => {
        const id = e.target.dataset.handle
        const watch = categoryItems.filter(el => el.id === id)[0]
        if (categoryItems.map(el => el.id).indexOf(watch.id) - 1 < 0) {
            navigate(`/watch/${categoryItems[categoryItems.length - 1].id}`)
        } else {
            const tempIndex = categoryItems.map(el => el.id).indexOf(watch.id) - 1
            navigate(`/watch/${categoryItems[tempIndex].id}`)
        }
    }
    const handleClick = (e) => { 
        addToCart(e.target.id) 
    }
    return (
        <div className="item-vitrine">
            <div className='carrousel'>
                <div id='left' data-handle={watch.id} key='button-left' className='button-car' onClick={getPrevious}>
                    <img className='arrow left' src={arrow} alt='arrow-navigation'></img>
                </div>
                <div className="item-container">
                    <img src={watch.path} alt="watch-display"></img>
                    <div className="description-container">
                        <h4>{watch.name}</h4>
                        <p>Price (in €) : {watch.price}</p>
                        <p>Reference : {watch.ref}</p>
                        <p>Size : {watch.size}</p>
                        <p>Details : {watch.description}</p>
                    </div>
                </div>
                <div id='right' data-handle={watch.id} key='button-right' className='button-car' onClick={getNext}>
                    <img className='arrow right' src={arrow} alt='arrow-navigation'></img>
                </div>
                <div className="add-to-cart">
                    <button onClick={handleClick} id={watch.id}>
                        Add to cart.
                    </button>
                </div>
            </div>
        </div>
    )
}