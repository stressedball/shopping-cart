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
    let video = null
    const width = window.innerWidth
    if (width > 700) {
        video =
            <div>
                <video id="that-video" autoPlay muted loop src={process.env.PUBLIC_URL + "/Pocket_Watch_a15___30s___4k_res.mp4"} alt='time' onLoadedData={() => onVideoLoad()}>
                </video>
                <div className="vitrine-photo-credits">
                    <a href="http://www.videezy.com">Stock video by Videezy!</a>
                </div>
            </div>
    } else {
        video =
            <>
                <img id="small-screen-pic" src={process.env.PUBLIC_URL + "/landing-page-small-screens.jpg"} alt="watch-image-landing"></img>
                <div className="vitrine-photo-credits">
                    Photo credits : <a href="https://unsplash.com/@agebarros?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Agê Barros</a> from <a href="https://unsplash.com/fr/s/photos/time?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                </div>
            </>
    }
    return (
        <>
            <div className='landing-page'>
                <div id="video-wrapper">
                    {video}
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
            <Categories status={videoReady} />
        </>
    )
}

const Categories = ({ status }) => {
    // Making a featured watch that will select a random watch for each category
    const randomIndex = Math.trunc((Math.random() * 5))
    const racer = Object.values(listOfItems)[0].filter(el => el.type === 'racer')[randomIndex]
    const pilot = Object.values(listOfItems)[0].filter(el => el.type === 'pilot')[randomIndex]
    const field = Object.values(listOfItems)[0].filter(el => el.type === 'field')[randomIndex]
    const dress = Object.values(listOfItems)[0].filter(el => el.type === 'dress')[randomIndex]
    const diver = Object.values(listOfItems)[0].filter(el => el.type === 'diver')[randomIndex]

    // Playing around to make vitrine's elements slide in visually on scroll
    // revealVitrine() is called from the useEffect
    // gets the current window height and adds class if top of element is within specified range
    const revealVitrine = () => {
        const vitrines = document.querySelectorAll('.vitrine-container')
        const lorem = document.querySelector('.lorem')
        const loremTop = lorem.getBoundingClientRect().top
        const windowHeight = window.innerHeight

        if (document.querySelector('.vitrine-title').getBoundingClientRect().top < windowHeight - 80) {
            document.querySelector('.vitrine-title').classList.add('reveal')
        } else {
            document.querySelector('.vitrine-title').classList.remove('reveal')
        }

        if (loremTop < windowHeight - 100) lorem.classList.add('reveal')
        else lorem.classList.remove('reveal')

        for (let el of vitrines) {
            const elTop = el.getBoundingClientRect().top
            if (elTop < windowHeight - 300) {
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
    // while (status === false) return // VERY UGLY // Couldn't find a work around
    while (status === false) {
        if (window.innerWidth < 700) break
        return
    }
    return (
        <div id="vitrine">
            <h3 className="vitrine-title">Our selection of timekeepers</h3>
            <p className="lorem">Est reprehenderit incididunt esse enim in consectetur veniam. Eiusmod ullamco amet aliqua nisi exercitation duis id et nisi esse duis tempor occaecat. Nostrud dolor non elit non cillum consectetur id non et dolore excepteur reprehenderit do.</p>
            <div className="vitrine-container dress">
                <div className="vitrine-photo-credits">
                    Photo credits : <a href="https://unsplash.com/@sammgrdichian?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Sam Mgrdichian</a> from <a href="https://unsplash.com/fr/s/photos/classy?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                </div>
                <div className="vitrine-category">
                    <p>Check our classy choices</p>
                    <div className="vitrine-items" >
                        <div className='featured'>
                            <p>Featured</p>
                            <p>{dress.name}</p>
                        </div>
                        <div className="vitrine-img-container">
                            <img src={process.env.PUBLIC_URL + `${dress.path}`} alt='vitrine-item-watch'></img>
                        </div>
                    </div>
                    <Link to='shopping/dress' >
                        <button className="dress">Discover more</button>
                    </Link>
                </div>
            </div>
            <div className="vitrine-container deep">
                <div className="vitrine-photo-credits">
                    Photo credits : <a href="https://unsplash.com/@alexrose?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Alex Rose</a> from <a href="https://unsplash.com/fr/s/photos/deep-sea?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                </div>
                <div className="vitrine-category">
                    <p>Conquer the depths of the oceans</p>
                    <div className="vitrine-items" >
                        <div className='featured'>
                            <p>Featured</p>
                            <p>{diver.name}</p>
                        </div>
                        <div className="vitrine-img-container">
                            <img src={process.env.PUBLIC_URL + `${diver.path}`} alt='vitrine-item-watch'></img>
                        </div>
                    </div>
                    <Link to='shopping/diver'>
                        <button className="diver">Discover more</button>
                    </Link>
                </div>
            </div>
            <div className="vitrine-container field">
                <div className="vitrine-photo-credits">
                    Photo credits : <a href="https://unsplash.com/@damianpatkowski?utm_source=unsplash&    utm_medium=referral&utm_content=creditCopyText">Damian Patkowski</a> from <a href="https://unsplash.com/fr/s/photos/field?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                </div>
                <div className="vitrine-category">
                    <p>Get to the top of the world...</p>
                    <div className="vitrine-items" >
                        <div className='featured'>
                            <p>Featured</p>
                            <p>{field.name}</p>
                        </div>
                        <div className="vitrine-img-container">
                            <img src={process.env.PUBLIC_URL + `${field.path}`} alt='vitrine-item-watch'></img>
                        </div>
                    </div>
                    <Link to='shopping/field'>
                        <button className="field">Discover more</button>
                    </Link>
                </div>
            </div>
            <div className="vitrine-container pilot">
                <div className="vitrine-photo-credits">
                    Photo credits : <a href="https://unsplash.com/@cleipelt?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Chris Leipelt</a> from <a href="https://unsplash.com/fr/s/photos/pilot?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                </div>
                <div className="vitrine-category">
                    <p>Find the perfect match for your travels</p>
                    <div className="vitrine-items" >
                        <div className='featured'>
                            <p>Featured</p>
                            <p>{pilot.name}</p>
                        </div>
                        <div className="vitrine-img-container">
                            <img src={process.env.PUBLIC_URL + `${pilot.path}`} alt='vitrine-item-watch'></img>
                        </div>
                    </div>
                    <Link to='shopping/pilot'>
                        <button className="pilot">Discover more</button>
                    </Link>
                </div>
            </div>
            <div className="vitrine-container racer">
                <div className="vitrine-photo-credits">
                    Photo credits : <a href="https://unsplash.com/@rblumbergs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ralfs Blumbergs</a> from <a href="https://unsplash.com/fr/s/photos/racing?utm_source=unsplash&    utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                </div>
                <div className="vitrine-category">
                    <p>Our collection for the sports fans</p>
                    <div className="vitrine-items" >
                        <div className='featured'>
                            <p>Featured</p>
                            <p>{racer.name}</p>
                        </div>
                        <div className="vitrine-img-container">
                            <img src={process.env.PUBLIC_URL + `${racer.path}`} alt='vitrine-item-watch'></img>
                        </div>
                    </div>
                    <Link to='shopping/racer'>
                        <button className="racer">Discover more</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
