import axios from "axios";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addPicture } from "../Feature/pictures.slice";
import { GrAdd } from "react-icons/gr";
const {v4 : uuidv4} = require('uuid');

const Form = ({getPictures}) => {

  const inputTitle = useRef();
  const formRef = useRef();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newId = uuidv4()

    const data = {
      title: inputTitle.current.value,
      photo: `https://picsum.photos/400/${Math.round(
        Math.random() * 200 + 300
      )}`,
      id: newId
    };

    axios.post('http://localhost:5000/pictures', data).then(() => {
      dispatch(addPicture(data))
      formRef.current.reset();
    });
  };

  return (
    <div className="form-container">
      <div className="form">
        <h2>Add a new photo</h2>
        <form onSubmit={(e) => handleSubmit(e)} ref={formRef}>
          <input type="text" placeholder="title" ref={inputTitle} />
          <button type="submit" name="submit" >Add a new photo
          <GrAdd />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;