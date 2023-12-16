import React, { useEffect, useState  } from 'react'
import { useParams , useNavigate} from 'react-router-dom';

import axios from "axios";
const initialBook = {
    name: "",
    author: "",
    price: 0,
    publishDate: new Date().toISOString().substring(0, 16),
};
const Update = () => {
  const {id} = useParams();
    const [book, setBook] = useState(initialBook);
    const navigation = useNavigate();
    useEffect(() => {
        axios
            .get(`http://localhost:23137/api/Book/${id}`)
            .then((res) => {
                setBook(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);
    const onChange = (e) => {
        setBook({ ...book, [e.target.name]: e.target.value });
    };

    const onChangePrice = (e) => {
        setBook({ ...book, [e.target.name]: Number(e.target.value) });
    };
    const onSubmit = (e) => {
        e.preventDefault();
        axios
            .put(`http://localhost:23137/api/Book/${id}`, book)
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
    </div>
  )

}

export default Update;
