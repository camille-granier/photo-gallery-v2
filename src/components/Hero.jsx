import React, { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import Loader from './Loader';

const Hero = ({loading}) => {

  const picsData = useSelector((state) => state.pictures.pictures);
  const [lengthPics, setLengthPics] = useState(2);
  const [current, setCurrent] = useState(0);
  const photoRef = useRef();

  console.log(photoRef.current)
  console.log(loading)

  const nextSlide = () => {
    setCurrent(current === lengthPics - 1 ? 0 : current + 1);
    setLengthPics(picsData.length);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? lengthPics - 1 : current - 1);
    setLengthPics(picsData.length);
  }
 


   return (
      <section className="hero">
        <h1>Get inspired today</h1>
           <div className='photo-slider'>
          <FiArrowLeft className='left-arrow arrow' onClick={prevSlide} />
           
            <Loader />
           {picsData?.map((pic, index) => {
            return(
              <div className={ index === current ? 'slide-active' : 'slide' }
                   key={index}>
            <img ref={photoRef} src={pic.photo} alt={index} key={index}/>
            </div>
          )})}
          <FiArrowRight className='right-arrow arrow' onClick={nextSlide} />
        </div>
      </section>
    );
};

export default Hero;