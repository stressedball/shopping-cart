import { useParams, Link } from 'react-router-dom'
import { itemsWithId } from '../App'

export default function Carrousel({ cart, addToCart, removeItem }) {
    const linkCategory = useParams()
    const handleClick = (e) => {
        if (e.target.className === 'add') {
            addToCart(e.target.id)
        } else {
            for (let i = cart.length - 1; i >=0; i--) {
                const item = cart[i]
                if (item[0].id === e.target.id) {
                    removeItem(cart.indexOf(item))
                }
            }
        }
    }
    const items = itemsWithId.map(el => {
        if (el.type === linkCategory.category) {
            return (
                <div className='shop-item-vitrine' key={el.id}>
                    <div className='img-container'>
                        <img src={el.path} alt='watch-carrousel'></img>
                    </div>
                    <div className='item-info'>
                        <p className='name'>
                            {el.name}
                        </p>
                        <p className='price'>
                            {el.price}
                        </p>
                        <Link to={`/watch/${linkCategory.category}/${el.id}`} >
                            <button role='more-info-test' className='more-info'>
                                More info
                            </button>
                        </Link>
                    </div>
                    <div className='shop-carrousel-buttons-container'>
                        <img src='../svg/plus-circle-svgrepo-com.svg' onClick={handleClick} id={el.id} className='add'  alt='add-svg'></img>
                        <p>{
                            cart.filter(item => item[0].id === el.id).length
                        }</p>
                        <img src='../svg/minus-circle-svgrepo-com.svg' onClick={handleClick} id={el.id} className='remove' alt='remove-svg'></img>
                    </div>
                </div>
            )
        }
    })
    return items
}