import { useEffect, useState } from 'react';
import React from 'react';
import axios from 'axios';
import Header from './components/Header';
import Hero from './components/Hero';
import Form from './components/Form';
import Card from './components/Card';
import { useDispatch, useSelector } from 'react-redux';
import { setPicturesData } from './Feature/pictures.slice';


const App = () => {

  const [lengthPics, setLengthPics] = useState(0);
  const dispatch = useDispatch();
  const picsData = useSelector((state) => state.pictures.pictures);

  const getPictures = () => {
    axios
       .get('http://localhost:5000/pictures')
       .then((res) => dispatch(setPicturesData(res.data)) )          
        .then((res) => setLengthPics(res.data));
  }

  useEffect(() => {

  getPictures();
  //eslint-disable-next-line
  }, []);

  return (
    <>
      <Header />
      <Hero lengthPics={lengthPics} getPictures={getPictures}/>
      <Form getPictures={getPictures}/>
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


