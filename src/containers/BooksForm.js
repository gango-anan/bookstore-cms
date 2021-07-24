import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBook } from '../actions/index';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const BooksForm = ({ addBook }) => {
  const [book, setBook] = useState({ id: '', title: '', category: '' });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (book.title && book.category) {
      addBook(String(Math.floor(Math.random() * 1000000)), book.title, book.category);
    }
    setBook({ id: '', title: '', category: '' });
  };

  const handleChange = (event) => {
    if (event.target.id === 'title') {
      setBook({ ...book, title: event.target.value });
    }
    if (event.target.id === 'categories') {
      setBook({ ...book, category: event.target.value });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">
          ADD NEW BOOK
          <input id="title" name="title" type="text" placeholder="Add title" onChange={handleChange} value={book.title} />
        </label>
      </div>
      <div>
        <select id="categories" value={book.category} onChange={handleChange}>
          <option value="" disabled>Category</option>
          {
          categories
            .map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))
        }
        </select>
      </div>
      <button type="submit">Add book</button>
    </form>
  );
};

BooksForm.propTypes = {
  addBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  addBook: (id, title, category) => { dispatch(createBook(id, title, category)); },
});

export default connect(null, mapDispatchToProps)(BooksForm);
