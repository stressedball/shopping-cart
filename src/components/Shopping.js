import { Routes, Route, useParams} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import arrow from '../svg/right-arrow-svgrepo-com.svg'
import Carrousel from './Carrousel'
const categories = ['dress', 'diver']

export default function Shopping({cart, addToCart, removeItem}) {
    const linkCategory = useParams()
    const navigate = useNavigate()
    const currentIndex = categories.filter(el => el === linkCategory.category)
    const getPrevious = () => {
        if (categories.indexOf(`${currentIndex}`) - 1 < 0) {
            navigate(`/shopping/${categories[categories.length - 1]}`)
        } else {
            navigate(`/shopping/${categories[categories.indexOf(`${currentIndex}`) - 1]}`)
        }
    }
    const getNext = () => {
        if (categories.indexOf(`${currentIndex}`) + 1 > categories.length - 1) {
            navigate(`/shopping/${categories[0]}`)
        } else {
            navigate(`/shopping/${categories[categories.indexOf(`${currentIndex}`) + 1]}`)
        }
    }
    return (
        <div className='shop-container' role='shopping'>
            <h3>Discover our {linkCategory.category} collection</h3>
            <div className='carrousel'>
                <div id='left' key='button-left' className='button-car' onClick={getPrevious}>
                    <img className='arrow left' src={arrow} alt='arrow-navigation'></img>
                </div>
                <Routes>
                    <Route path={`${linkCategory.category}`} element={<Carrousel cart={cart} addToCart={addToCart} removeItem={removeItem}/>}/>
                </Routes>
                <div id='right' key='button-right' className='button-car' onClick={getNext}>
                    <img className='arrow right' src={arrow} alt='arrow-navigation'></img>
                </div>
            </div>
        </div>
    )
}
