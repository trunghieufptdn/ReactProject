import React, {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const initialBook = {
    name: "",
    author: "",
    price: 0,
    publishDate: new Date(),
};
const CreateComponent = () => {
    const [book, setBook] = useState(initialBook);
    const navigation = useNavigate();

  // useEffect(() => {
  //   console.log(book)
  // }, [book]);
    const onChange = (e) => {
        setBook({...book, [e.target.name]: e.target.value});
    };

    const onChangePrice = (e) => {
        setBook({...book, [e.target.name]: Number(e.target.value)});
    };

    const onSubmit = (e) => {
        e.preventDefault();
        axios
            .post(`http://localhost:23137/api/Book`, book)
            .then((res) => {
              navigation("/")
            })
            .catch((err) => {
              console.log(err);
            });
    }


    return (
        <div>
            <h2>Add new book</h2>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input
                        name="name"
                        type="text"
                        value={book.name}
                        onChange={(e) => onChange(e)}
                        className="form-control"/>
                </div>

                <div className="form-group">
                    <label>Author</label>
                    <input
                        name="author"
                        type="text"
                        value={book.author}
                        onChange={(e) => onChange(e)}
                        className="form-control"/>
                </div>

                <div className="form-group">
                    <label>Price</label>
                    <input
                        name="price"
                        type="number"
                        value={book.price}
                        onChange={(e) => onChangePrice(e)}
                        className="form-control"/>
                </div>

                <div className="form-group">
                    <label>Publish Date</label>
                    <input
                        name="publishDate"
                        type="datetime-local"
                        value={book.publishDate}
                        onChange={(e) => onChange(e)}
                        className="form-control"/>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>);
}
export default CreateComponent;
