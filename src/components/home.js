import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:23137/api/Book");
      setBooks(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const deleteData = async (id) => {
    try {
      await axios
        .delete(`http://localhost:23137/api/Book/${id}`)
        .then((res) => {
          fetchData();
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="App">
      <h1>Books Table</h1>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Author</th>
            <th scope="col">Price</th>
            <th scope="col">Publish Date</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <th scope="row">{book.id}</th>
              <td>{book.name}</td>
              <td>{book.author}</td>
              <td>{book.price}</td>
              <td>{book.publishdate}</td>
              <td>
                <Link to={`/update/${book.id}`} style={{ padding: 10 }}>
                  Update
                </Link>
                <button onClick={() => deleteData(book.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
