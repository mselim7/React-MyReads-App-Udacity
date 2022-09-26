import React from 'react';
import BookShelf from '../Components/BookShelf';
import { Link } from 'react-router-dom';

const Home = ({bookshelves,books,onMove}) => {
    return (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              {bookshelves.map(shelf => (
                <BookShelf
                  key={shelf.key}
                  shelf={shelf}
                  books={books}
                  onMove={onMove}
                />
              ))}
            </div>
          </div>
          <div className="open-search">
            <Link to="search">
              Add a Book
            </Link>
          </div>
        </div>
      );
}

export default Home;
