import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeBook, changeFilter } from '../actions/index';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';

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
        </tbody>
      </table>
      <CategoryFilter onChange={handleFilterChange} />
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
