import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/home";
import CreateComponent from "./components/create";
import Update from "./components/update";

function App() {
  return (
    <>
      <nav style={{ margin: 10 }}>
        <Link to="/" style={{ padding: 10 }}>
          Home
        </Link>
        <Link to="/create" style={{ padding: 10 }}>
          Create
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateComponent />} />
        <Route path="/update/:id" element={<Update />} />

      </Routes>
    </>
  );
}

export default App;
