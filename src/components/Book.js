import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Book.css';

const Book = ({
  id, title, category, delBook,
}) => (
  <div className="book">
    <div className="book-details-container">
      <div className="book-details">
        <p className="bk-category">{category}</p>
        <p className="bk-title">{title}</p>
        <p className="bk-author">Author</p>
      </div>
      <div className="edit-content">
        <span>Comments</span>
        <span className="bk-remove">
          <button className="bk-remove-btn" type="button" onClick={() => delBook(id)}>Remove</button>
        </span>
        <span>Edit</span>
      </div>
    </div>
    <div className="progress-bar-container">
      <div className="box">
        <div className="percent">
          <svg>
            <circle cx="70" cy="70" r="35" />
            <circle cx="70" cy="70" r="35" />
          </svg>
        </div>
      </div>
      <div className="percentage-completed">
        <p className="percentage">64%</p>
        <p className="completed">Completed</p>
      </div>
    </div>
    <div className="current-chapter-container">
      <p className="current-chapter">CURRENT CHAPTER</p>
      <p className="chapter">Chapter 20</p>
      <button type="button" className="btn-update-chapter">UPDATE PROGRESS</button>
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
