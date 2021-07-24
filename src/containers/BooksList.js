import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeBook } from '../actions/index';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';

const BooksList = ({ books, deleteBook }) => {
  const handleRemoveBook = (id) => {
    deleteBook(id);
  };
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Book ID</th>
            <th>Title</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {
          books.map((book) => (
            <Book
              key={book.id}
              id={book.id}
              title={book.title}
              category={book.category}
              delBook={handleRemoveBook}
            />
          ))
        }
        </tbody>
      </table>
      <CategoryFilter />
    </div>
  );
};

BooksList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
  deleteBook: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => state.books;
const mapDispatchToProps = (dispatch) => ({
  deleteBook: (id) => { dispatch(removeBook(id)); },
});
export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
