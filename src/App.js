import { useEffect } from 'react';
import React from 'react';
import axios from 'axios';
import Header from './components/Header';
import Form from './components/Form';
import Card from './components/Card';
import { useDispatch, useSelector } from 'react-redux';
import { setPicturesData } from './Feature/pictures.slice';


const App = () => {

  const dispatch = useDispatch();
  const picsData = useSelector((state) => state.pictures.pictures);

  useEffect(() => {
       axios
       .get('http://localhost:5000/pictures')
       .then((res) => dispatch(setPicturesData(res.data)));
         
       
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <Header />
      <h1>Photo Gallery</h1>
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


