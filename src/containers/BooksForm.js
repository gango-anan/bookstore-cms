import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const BooksForm = ({ books }) => {
  const [book, setBook] = useState({ id: String(Math.floor(Math.random() * 1000000)), title: '', category: '' });
  const handleSubmit = (event) => {
    event.preventDefault();

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
  books: PropTypes.instanceOf(Array).isRequired,
};

const mapStateToProps = (state) => state.books;

export default connect(mapStateToProps)(BooksForm);
