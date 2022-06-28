
import image01 from '../../../Media/HomePage/StretchCinema.png';
import image02 from '../../../Media/HomePage/TwoTowers.jpg';
import { Slide } from 'react-slideshow-image';
import React from 'react';
import 'react-slideshow-image/dist/styles.css'

const slideImages = [
    {
        url: image01,
        caption: 'Slide 1'
    },
    {
        url: image02,
        caption: 'Slide 2'
    },
    {
        url: image01,
        caption: 'Slide 3'
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