import React from 'react';
import Book from '../components/Book';
import { connect } from 'react-redux';

const BooksList = () => {
  return(
    <table>
      <thead>
        <tr>
          <th>Book ID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        <Book />
      </tbody>
    </table>
  );
};

export default connect()(BooksList);
