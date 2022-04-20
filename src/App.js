import { useEffect, useState } from 'react';
import React from 'react';
import axios from 'axios';
import Form from './components/Form';
import Card from './components/Card';

const App = () => {

  const [picsData, seetPicsData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/pictures')
      .then((res) => seetPicsData(res.data));
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


