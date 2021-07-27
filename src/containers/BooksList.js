import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeBook, changeFilter } from '../actions/index';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';
import '../styles/BooksList.css';

const BooksList = ({
  books, filter, deleteBook, alterFilter,
}) => {
  const handleRemoveBook = (id) => {
    deleteBook(id);
  };
  const handleFilterChange = (filter) => {
    alterFilter(filter);
  };
  const filteredBooks = () => {
    if (filter === 'All') {
      return books;
    }
    return books.filter((book) => book.category === filter);
  };
  return (
    <div className="books">
      <nav className="nav-bar">
        <div className="menu-bar">
          <div className="menus">
            <h1 className="logo">Bookstore CMS</h1>
            <p className="active-menu-item">BOOKS</p>
            <CategoryFilter onChange={handleFilterChange} />
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill avator" viewBox="0 0 16 16">
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
            </svg>
          </div>
        </div>
      </nav>
      <div className="book-card">
        {
          filteredBooks().map((book) => (
            <Book
              key={book.id}
              id={book.id}
              title={book.title}
              category={book.category}
              delBook={handleRemoveBook}
            />
          ))
        }
      </div>
    </div>
  );
};

BooksList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
  deleteBook: PropTypes.func.isRequired,
  alterFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({ books: state.books.books, filter: state.filter });
const mapDispatchToProps = (dispatch) => ({
  deleteBook: (id) => { dispatch(removeBook(id)); },
  alterFilter: (name) => { dispatch(changeFilter(name)); },
});
export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
