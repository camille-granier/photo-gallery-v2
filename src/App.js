import { useEffect } from 'react';
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


  return (
    <>
      <Header />
      <Hero />
      <PhotoGallery />
      <Contact />
    </>
  );
};

export default App;


