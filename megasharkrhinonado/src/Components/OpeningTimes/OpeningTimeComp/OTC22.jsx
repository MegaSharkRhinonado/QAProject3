
import image01 from '../../../Media/HomePage/StretchCinema.png';
import image02 from '../../../Media/HomePage/TwoTowers.jpg';
//  Festivle images
import foodFest from '../../../Media/Events/FoodFest.jpg'
import gandolfThrowingDown from '../../../Media/Events/GandolfThrowingItDown.jpg'
import theRing from '../../../Media/Events/TheRealRing.jpg'
import dwarfCheese from '../../../Media/Events/GreedyDwarfs.jpg'



import { Slide } from 'react-slideshow-image';
import React from 'react';
import 'react-slideshow-image/dist/styles.css'

const slideImages = [
    {
        url: foodFest,
        caption: 'foodFest'
    },
    {
        url: gandolfThrowingDown,
        caption: 'Wizard dancing'
    },
    {
        url: dwarfCheese,
        caption: 'dwarf holding LOTS of cheese'
    },
    {
        url: theRing,
        caption: 'the Ring'
    },
];

const OTC22 = () => {
    return (
        <>

                <div className="slide-container">
                    <Slide>
                        {slideImages.map((slideImage, index) => (
                            <div className="each-slide" key={index}>
                                <img src={slideImage.url} alt={slideImage.caption} width='100%' height='100%' />
                            </div>
                        ))}
                    </Slide>
                </div>

        </>

    );

}

export default OTC22;

// https://www.npmjs.com/package/react-slideshow-image