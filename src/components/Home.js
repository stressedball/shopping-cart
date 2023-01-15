import { Link } from "react-router-dom";
import listOfItems from '../items.json'

export default function Home() {
    return (
        <>
            <div className='landing-page' role='home'>
                <div id="video-wrapper">
                    <video autoPlay muted loop src="./Pocket_Watch_a15___30s___4k_res.mp4" alt='time'>
                    </video>
                    <div id="citation">
                        <p className="intro">
                            “It is the time you have wasted for your rose that makes your rose so important.”
                        </p>
                        <p className="intro">
                            ― Antoine de Saint-Exupéry, The Little Prince
                        </p>
                    </div>
                </div>
            </div>
            <Categories />
        </>
    )
}

const Categories = () => {
    // const pilot = Object.values(listOfItems)
    // const racer = Object.values(listOfItems)
    // const field = Object.values(listOfItems)    

    const dress = Object.values(listOfItems)[0].filter(el => el.type === 'dress').map(el => {
        return <h4 key={el.name}>{el.name}</h4>
    });
    const diver = Object.values(listOfItems)[0].filter(el => el.type === 'diver').map(el => {
        return <h4 key={el.name}>{el.name}</h4>
    });
    return (
        // height={`${document.querySelector('div.landing-page').offsetHeight}px`}
        // ratio of 3840 x 2160 
        // for 1 width you get 2160/3840 height
        <div id="vitrine">
            <h3>Our selection of timekeepers</h3>
            <div className="vitrine-container">
                <p>Check our classy choices</p>
                <img src="../vitrines/dress.jpeg"></img>
                <div className="vitrine-items" >
                    {dress}
                </div>
                <Link to='shopping/dress'>
                    <button role='test' className="dress">Discover more</button>
                </Link>
            </div>
            <div className="vitrine-container">
                <p>Conquer the depths of the oceans</p>
                <img src="../vitrines/deep.jpeg"></img>
                <div className="vitrine-items" >
                    {diver}
                </div>
                <Link to='shopping/diver'>
                    <button className="diver">Discover more</button>
                </Link>
            </div>
        </div>
    )
}