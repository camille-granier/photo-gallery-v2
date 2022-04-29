import { useEffect, useRef, useState } from 'react';
import React from 'react';
import axios from 'axios';
import Header from './components/Header';
import Hero from './components/Hero';
import PhotoGallery from './components/PhotoGallery';
import Contact from './components/Contact';
import { useDispatch, useSelector } from 'react-redux';
import { setPicturesData } from './Feature/pictures.slice';


const App = () => {

  const dispatch = useDispatch();
  //eslint-disable-next-line
  const picsData = useSelector((state) => state.pictures.pictures);

  const [heroIsVisible, setHeroIsVisible] = useState();

  const photoRef = useRef();
  const heroRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
    const entry = entries[0];
    setHeroIsVisible(entry.isIntersecting);
    });
    observer.observe(heroRef.current);
  }, []);

  const handleScroll = () => {
    if(heroIsVisible){
    console.log('scrolling');
    photoRef.current.scrollIntoView({behavior: "smooth"})
    }
  }

  const getPictures = () => {
    axios
       .get('http://localhost:5000/pictures')
       .then((res) => 
         dispatch(setPicturesData(res.data)))          
  }

  useEffect(() => {
  getPictures();
  //eslint-disable-next-line
  }, []);

  useEffect(() => {
     window.addEventListener("scroll", handleScroll);
    
   return() => {
     console.log('not scrolling')
     window.removeEventListener("scroll", handleScroll)
  }
  }, [heroIsVisible]);


  return (
    <>
      <Header />
      <div ref={heroRef}><Hero  handleScroll={handleScroll}/></div>
      <PhotoGallery refProps={photoRef}/>
      <Contact />
    </>
  );
};

export default App;


