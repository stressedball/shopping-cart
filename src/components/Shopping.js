import { Routes, Route, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Carrousel from './Carrousel'

export default function Shopping({ cart, addToCart, removeItem }) {
    const categories = ['dress', 'diver', 'field', 'pilot', 'racer']
    const linkCategory = useParams()
    const navigate = useNavigate()
    const currentIndex = categories.filter(el => el === linkCategory.category)
    // 2 functions below getPrevious and getNext serve to navigate between categories
    const getPrevious = () => {
        if (categories.indexOf(`${currentIndex}`) - 1 < 0) {
            navigate(`/shopping-cart/shopping/${categories[categories.length - 1]}`)
        } else {
            navigate(`/shopping-cart/shopping/${categories[categories.indexOf(`${currentIndex}`) - 1]}`)
        }
    }
    const getNext = () => {
        if (categories.indexOf(`${currentIndex}`) + 1 > categories.length - 1) {
            navigate(`/shopping-cart/shopping/${categories[0]}`)
        } else {
            navigate(`/shopping-cart/shopping/${categories[categories.indexOf(`${currentIndex}`) + 1]}`)
        }
    }
    return (
        <div className='shop-container' role='shopping'>
            <h3>Discover our {linkCategory.category} collection</h3>
            <div className='carrousel-shop-page'>
                <>
                <img className='arrow left' src={process.env.PUBLIC_URL + '/svg/right-arrow-svgrepo-com.svg'} alt='arrow-navigation-left' onClick={getPrevious}></img>
                </>
                <div className='carrousel-container'>
                    <Routes>
                        <Route path={`${linkCategory.category}`} element={<Carrousel cart={cart} addToCart={addToCart} removeItem={removeItem} />} />
                    </Routes>
                </div>
                <img className='arrow right' src={process.env.PUBLIC_URL + '/svg/right-arrow-svgrepo-com.svg'} alt='arrow-navigation-right' onClick={getNext}></img>
            </div>
        </div>
    )
}
