// change the source of the image for what is needed

import image01 from '../../../Media/HomePage/QACinema.jpg';

const homeCard02 = () => {

    return ( 
        <>
        
        <div>
          <div style={{
            float: 'left',
            margin: '0px 0px 0px 8%',
            border: '5px solid #555',
            height: '40%',
            width: '40%'
          }}>


            <img src={image01} alt="PictureOfCinema" width='100%' />
          </div>

          <div style={{
                        margin: '0px 8% 0% 50%',
                        // paddingLeft: '1.75%'
                        }}>
           <h1>QACinemas around Middle-Earth offer a range of content and combat, in addition to highly anticipated blockbusters, with event cinema titles including 'The hobbit that once was', 'The ugly eye in the sky', 'Muscles and his musical pals', 'National tall living day' and even 'Dwarfs digging a diggy diggy hole'. We dedicate sceens to such event and show support by giving donates to the hobbit people themselves and dedicating multiple screens to there areana games.</h1>
         </div>
      </div>
        
        
       </>
     );
}

export default homeCard02;