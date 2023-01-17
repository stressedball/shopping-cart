import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import listOfItems from '../items.json';

export default function Home() {
    // The following 3 lines are only used to make sure that the video loads first
    // otherwise Categories will mount components faster and the overall visual result is ugly
    const [videoReady, setVideoReady] = useState(false)
    const onVideoLoad = () => {
        setVideoReady(true)
    }
    return (
        <>
            <div className='landing-page' role='home'>
                <div id="video-wrapper">
                    <video autoPlay muted loop src="./Pocket_Watch_a15___30s___4k_res.mp4" alt='time' onLoadedData={() => onVideoLoad()}>
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
            <Categories status={videoReady}/>
        </>
    )
}

const Categories = ({status}) => {
    // to avoid having the scroll event listener displayed

    // const pilot = Object.values(listOfItems)
    // const racer = Object.values(listOfItems)

    const field = Object.values(listOfItems)[0].filter(el => el.type === 'field').map(el => {
        return (
            // <h4 key={el.name}>{el.name}</h4>
            <img src={el.path} alt='landing-page'></img>
        )
    });
    const dress = Object.values(listOfItems)[0].filter(el => el.type === 'dress').map(el => {
        return (
            // <h4 key={el.name}>{el.name}</h4>
            <img src={el.path} alt='landing-page'></img>
        )
    });
    const diver = Object.values(listOfItems)[0].filter(el => el.type === 'diver').map(el => {
        return (
            // <h4 key={el.name}>{el.name}</h4>
            <img src={el.path} alt='landing-page'></img>
        )
    });
    // Playing around to make vitrine's elements slide in visually on scroll
    // revealVitrine() is called from the useEffect
    // gets the current window height and adds class if top of element is within specified range
    const revealVitrine = () => {
        const vitrines = document.querySelectorAll('.vitrine-container')
        const windowHeight = window.innerHeight 

        if (document.querySelector('.vitrine-title').getBoundingClientRect().top < windowHeight - 80) {
            document.querySelector('.vitrine-title').classList.add('reveal')
        } else {
            document.querySelector('.vitrine-title').classList.remove('reveal')
        }

        for (let el of vitrines) {
            const elTop = el.getBoundingClientRect().top
            if (elTop < windowHeight - 200) {
                el.classList.add('reveal')
            } else {
                el.classList.remove('reveal')
            }
        }
    }
    // adding and (IMPORTANT) removing event listener
    useEffect(() => {
        window.addEventListener('scroll', revealVitrine)
        return () => {
            window.removeEventListener("scroll", revealVitrine);
        };
    }, [])
    while (status === false) return // VERY UGLY // Couldn't find a work around

    return (
        <div id="vitrine">
            <h3 className="vitrine-title">Our selection of timekeepers</h3>
            <div className="vitrine-container">
                <div className="maquette">
                    <p>Check our classy choices</p>
                    <img src="../vitrines/dress.jpeg"></img>
                </div>
                <div className="vitrine-category">
                    <div className="vitrine-items" >
                        {dress}
                    </div>
                    <Link to='shopping/dress' >
                        <button role='test' className="dress">Discover more</button>
                    </Link>
                </div>
            </div>
            <div className="vitrine-container">
                <div className="maquette">
                    <p>Conquer the depths of the oceans</p>
                    <img src="../vitrines/deep.jpeg"></img>
                </div>
                <div className="vitrine-category">
                    <div className="vitrine-items" >
                        {diver}
                    </div>
                    <Link to='shopping/diver'>
                        <button className="diver">Discover more</button>
                    </Link>
                </div>
            </div>
            <div className="vitrine-container">
                <div className="maquette">
                    <p>Get to the top of the world...</p>
                    <img src="../vitrines/field.jpeg"></img>
                </div>
                <div className="vitrine-category">
                    <div className="vitrine-items" >
                        {field}
                    </div>
                    <Link to='shopping/field'>
                        <button className="field">Discover more</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
