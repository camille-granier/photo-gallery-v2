import { useEffect, lazy, Suspense, useState } from 'react';
import React from 'react';
import axios from 'axios';
import Header from './components/Header';
import Hero from './components/Hero';
import Contact from './components/Contact';
import { useDispatch, useSelector } from 'react-redux';
import { setPicturesData } from './Feature/pictures.slice';

const PhotoGallery = lazy(() => import(/* webpackChunkName: "PhotoGallery" */ "./components/PhotoGallery"));

const App = () => {

  const dispatch = useDispatch();
  //eslint-disable-next-line
  const picsData = useSelector((state) => state.pictures.pictures);
  const [isLoading, setIsLoading] = useState(true);

  const getPictures = () => {
    axios
       .get('https://pictures-photo-gallery.herokuapp.com/pictures')
       .then((res) => {
         dispatch(setPicturesData(res.data));
          setIsLoading(false)});          
  }

  useEffect(() => {
  getPictures();
  //eslint-disable-next-line
  }, []);


  return (
    <>
      <Header />
      <Hero loading={isLoading}/>
      <Suspense fallback={<div>loading...</div>}>
        <PhotoGallery />
      </Suspense>
      <Contact />
    </>
  );
};

export default App;


