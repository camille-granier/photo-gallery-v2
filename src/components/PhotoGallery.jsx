import React from 'react';
import { useSelector } from 'react-redux';
import Form from './Form';
import Card from './Card';

const PhotoGallery = ({refProps}) => {

    const picsData = useSelector((state) => state.pictures.pictures);

    return (
        <section ref={refProps} className='photo-gallery'>
            <Form/>
            <div className='cards-container'>
        {picsData?.map((pic, index) => (
          <Card key={index} pic={pic} />
          )
        )}
      </div>
        </section>
    );
};

export default PhotoGallery;