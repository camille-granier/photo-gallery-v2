import React from 'react';
import { useSelector } from 'react-redux';
import Form from './Form';
import Card from './Card';

const PhotoGallery = () => {

    const picsData = useSelector((state) => state.pictures.pictures);

    return (
        <div className='photo-gallery'>
            <Form/>
            <div className='cards-container'>
        {picsData?.map((pic, index) => (
          <Card key={index} pic={pic} />
          )
        )}
      </div>
        </div>
    );
};

export default PhotoGallery;