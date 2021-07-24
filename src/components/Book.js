import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ id, title, category }) => (
  <tr>
    <td>{id}</td>
    <td>{title}</td>
    <td>{category}</td>
    <td><button type="button">Remove Book</button></td>
  </tr>
);

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
