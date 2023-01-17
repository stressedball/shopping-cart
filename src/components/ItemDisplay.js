import { useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { itemsWithId } from "../App"

export default function ItemDisplay({ addToCart }) {
    const params = useParams()
    const navigate = useNavigate()
    const watch = itemsWithId.find(el => el.id === params.id)
    const categoryItems = itemsWithId.filter(el => el.type === watch.type)
    const getNext = (e) => {
        const id = e.target.dataset.handle
        const watch = categoryItems.filter(el => el.id === id)[0]
        if (categoryItems.map(el => el.id).indexOf(watch.id) + 1 > categoryItems.length - 1) {
            navigate(`/watch/${params.category}/${categoryItems[0].id}`)
        } else {
            const tempIndex = (categoryItems.map(el => el.id).indexOf(watch.id)) + 1
            navigate(`/watch/${params.category}/${categoryItems[tempIndex].id}`)
        }
    }
    const getPrevious = (e) => {
        const id = e.target.dataset.handle
        const watch = categoryItems.filter(el => el.id === id)[0]
        if (categoryItems.map(el => el.id).indexOf(watch.id) - 1 < 0) {
            navigate(`/watch/${params.category}/${categoryItems[categoryItems.length - 1].id}`)
        } else {
            const tempIndex = categoryItems.map(el => el.id).indexOf(watch.id) - 1
            navigate(`/watch/${params.category}/${categoryItems[tempIndex].id}`)
        }
    }
    const handleClick = (e) => {
        addToCart(e.target.id)
    }
    const handleReturnToCategory = () => {
        navigate(`/shopping/${params.category}`)
    }
    return (
        <>
            <div className="item-vitrine">
                <div className='carrousel-watch-display'>
                    <img id='left' data-handle={watch.id} onClick={getPrevious} className='arrow left' src='../../svg/right-arrow-svgrepo-com.svg' alt='arrow-navigation'></img>
                    <div className="item-container">
                        <div className="watch-display-container">
                            <img src={`../${watch.path}`} alt="watch-display"></img>
                        </div>
                        <div className="description-container">
                            <h4>{watch.name}</h4>
                            <p>Price (in €) : {watch.price}</p>
                            <p>Reference : {watch.ref}</p>
                            <p>Size : {watch.size}</p>
                            <p>Details : {watch.description}</p>
                            <div className="add-to-cart">
                                <button onClick={handleClick} id={watch.id}>Add to cart</button>
                            </div>
                        </div>
                    </div>
                    <img className='arrow right' src='../../svg/right-arrow-svgrepo-com.svg' id='right' data-handle={watch.id} onClick={getNext} alt='arrow-navigation'></img>
                </div>
            </div>
            <div className="return-container">
                <button onClick={handleReturnToCategory}>Return to category</button>
            </div>
        </>
    )
}