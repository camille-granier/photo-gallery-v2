import React from 'react';
import { useSelector } from 'react-redux';

const Hero = () => {

  const pictures = useSelector((state) => state.pictures.pictures);

    return (
      <section className="hero">
        <h1>Get inspired </h1>
        <div className='photo-slider'>
          <img src={pictures[0].photo} alt="kk"/>
          {pictures?.map((pic, index) => (
            <img src={pic.photo} alt={index} key={index}/>
          ))}
        </div>
      </section>
    );
};

export default Hero;