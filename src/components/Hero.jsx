import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const Hero = () => {

 
  const picsData = useSelector((state) => state.pictures.pictures);
  const [lengthPics, setLengthPics] = useState(3);
  const [current, setCurrent] = useState(0);


  const nextSlide = () => {
    setLengthPics(picsData.length);
    setCurrent(current === lengthPics - 1 ? 0 : current + 1);
    console.log(lengthPics)
    console.log(current)
  };

  const prevSlide = () => {
    setLengthPics(picsData.length);
    setCurrent(current === 0 ? lengthPics - 1 : current - 1)
  }

   return (
      <section className="hero">
        <h1>Get inspired today</h1>
        <div className='photo-slider'>
          <FaArrowAltCircleLeft className='left-arrow arrow' onClick={prevSlide} />
          {picsData?.map((pic, index) => {
            return(
              <div className={ index === current ? 'slide-active' : 'slide' }
                   key={index}>
            {index === current && (<img src={pic.photo} alt={index} key={index}/>)}
            </div>
          )})}
          <FaArrowAltCircleRight className='right-arrow arrow' onClick={nextSlide} />
        </div>
      </section>
    );
};

export default Hero;