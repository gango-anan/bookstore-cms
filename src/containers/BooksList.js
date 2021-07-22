import React from 'react';
import Book from '../components/Book';

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

export default BooksList;
