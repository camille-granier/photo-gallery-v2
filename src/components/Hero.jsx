import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const Hero = () => {

  const pictures = useSelector((state) => state.pictures.pictures);
  const [current, setCurrent] = useState(0);
  const length = pictures.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

    return (
      <section className="hero">
        <h1>Get inspired today</h1>
        <div className='photo-slider'>
          <FaArrowAltCircleLeft className='left-arrow arrow' onClick={prevSlide} />
          <FaArrowAltCircleRight className='right-arrow arrow' onClick={nextSlide} />
          {pictures?.map((pic, index) => {
            return(
              <div className={ index === current ? 'slide-active' : 'slide' }
                   key={index}>
            {index === current && (<img src={pic.photo} alt={index} key={index}/>)}
            </div>
          )})}
        </div>
      </section>
    );
};

export default Hero;