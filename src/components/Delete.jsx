import axios from 'axios';
import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { deletePicture } from '../Feature/pictures.slice';

const Delete = ({id}) => {

    const dispatch = useDispatch();

    const handleDelete = () => {
        axios.delete("http://localhost:5000/pictures/" + id).then(() => {
            dispatch(deletePicture(id))
        });
    };

    return (
        <div className='delete-icon' onClick={() => {handleDelete()}}>
            <AiOutlineDelete />
        </div>
    );
};

export default Delete;