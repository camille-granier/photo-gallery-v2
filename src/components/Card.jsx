import React from 'react';
import { useRef, useState } from 'react';
import axios from 'axios';
import Delete from './Delete';
import { FaRegEdit } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { editPicture } from '../Feature/pictures.slice';

const Card = ({pic}) => {

    const [edit, setEdit] = useState(false);
    const titleInput = useRef();
    const dispatch = useDispatch();

    const handleEdit = () => {
        setEdit(false);

        const data = {
            title: titleInput.current.value,
            photo: pic.photo
        };
        axios.put('http://localhost:5000/pictures/' + pic.id, data).then(() => {
            dispatch(editPicture([data.title, pic.id]));
        });
    }

    return (
        <div className='card'>
            <img src={pic.photo} alt={"picture name:" + pic.title} />
            <div className='infos'>
                <div className='title'>
                    {edit?(
                        <div>
                            <input
                            defaultValue={pic.title}
                            ref={titleInput}
                            autoFocus></input>
                        <button className="button-edit" onClick={() => handleEdit()}>Confirm</button>
                        </div>
                    )
                    : (
                        <h3>
                            {titleInput.current ? titleInput.current.value : pic.title}
                        </h3>
                    )}
            </div>
            <div className='button-container'>
                <div className='edit-icon' onClick={() => setEdit(!edit)}>
                        <FaRegEdit />
                </div>
                <Delete id={pic.id}/>
            </div>
            </div>     
        </div>
    );
};

export default Card;