import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Book.css';

const Book = ({
  id, title, category, delBook,
}) => (
  <div className="book">
    <div className="book-details-container">
      <div className="book-details">
        <p>{category}</p>
        <p>{title}</p>
        <p>{id}</p>
      </div>
      <div className="edit-content">
        <span>Comments</span>
        <span><button type="button" onClick={() => delBook(id)}>Remove</button></span>
        <span>Edit</span>
      </div>
    </div>
    <div className="progress-bar">
      <div className="bar">
        ...BAR
      </div>
      <div className="percentage-completed">
        <p className="percentage">64%</p>
        <p className="completed">completed</p>
      </div>
    </div>
    <div className="current-chapter">
      <p>CURRENT CHAPTER</p>
      <p>Chapter 0</p>
      <button type="button">UPDATE PROGRESS</button>
    </div>
  </div>
);

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  delBook: PropTypes.func.isRequired,
};

export default Book;
