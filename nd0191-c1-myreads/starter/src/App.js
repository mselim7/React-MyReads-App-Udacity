import React from "react";
import { Route, Routes } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import { useState, useEffect } from "react";
import "./App.css";
import Home from "./Pages/Home";
import Search from "./Pages/Search";

export const App = () => {
  const bookshelves = [
    { key: "currentlyReading", name: "Currently Reading" },
    { key: "wantToRead", name: "Want to Read" },
    { key: "read", name: "Read" },
  ];
  const [Books, setMyBooks] = useState([]);
  const [search, setSearch] = useState([]);
  const [val, setVal] = useState("");
  const [, setError] = useState(false);

  useEffect(() => {
    const getAllBooks = async () => {
      const res = await BooksAPI.getAll();
      setMyBooks(res);
    };
    getAllBooks();
  }, []);

  const moveBook = (book, shelf) => {
    BooksAPI.update(book, shelf).catch((err) => {
      console.log(err);
      setError(true);
    });

    if (shelf === "none") {
      setMyBooks(Books.filter((b) => b.id !== book.id));
    } else {
      book.shelf = shelf;
      setMyBooks(Books.filter((b) => b.id !== book.id).concat(book));
    }
  };

  const TextUpdate = (TheTxt) => {
    setVal(TheTxt);
    if (val.trim() === "") {
      setSearch([]);
    }
  };

  useEffect(() => {
    let acv = true;
    if (val) {
      BooksAPI.search(val).then((data) => {
        if (data.error) {
          setSearch([]);
        } else {
          if (acv) {
            setSearch(data);
          }
        }
      });
      return () => {
        acv = false;
        setSearch([]);
      };
    }
  }, [val]);

  const resetSearch = () => {
    setSearch([]);
  };

  return (
    <div className="app">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home bookshelves={bookshelves} books={Books} onMove={moveBook} />
          }
        />
        <Route
          exact
          path="/search"
          element={
            <Search
              search={search}
              val={val}
              Books={Books}
              onSearch={TextUpdate}
              onMove={moveBook}
              onResetSearch={resetSearch}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
