import { useEffect } from 'react';
import React from 'react';
import axios from 'axios';
import Header from './components/Header';
import Hero from './components/Hero';
import Form from './components/Form';
import Card from './components/Card';
import { useDispatch, useSelector } from 'react-redux';
import { setPicturesData } from './Feature/pictures.slice';


const App = () => {

  const dispatch = useDispatch();
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
      <Form />
      <div className='cards-container'>
        {picsData?.map((pic, index) => (
          <Card key={index} pic={pic} />
          )
        )}
      </div>
    </>
  );
};

export default App;


