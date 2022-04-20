import { useEffect, useState } from 'react';
import React from 'react';
import axios from 'axios';
import Form from './components/Form';
import Card from './components/Card';
import { useDispatch } from 'react-redux';
import { setPicturesData } from './Feature/pictures.slice';

const App = () => {

  const dispatch = useDispatch();
  const [picsData, setPicsData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/pictures')
      .then((res) => dispatch(setPicturesData(res.data)));
  }, [])

  return (
    <>
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


