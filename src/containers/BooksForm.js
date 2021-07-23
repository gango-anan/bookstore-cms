import React, { useState } from 'react';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const BooksForm = () => {
  const [books, setBooks] = useState([{ title: '', category: '' }]);
  return (
    <form>
      <div>
        <label htmlFor="title">
          ADD NEW BOOK
          <input id="title" name="title" type="text" placeholder="Add title" />
        </label>
      </div>
      <div>
        <select id="categories">
          <option>Category</option>
          {
          categories
            .map((category) => (<option key={category} value={category}>{category}</option>))
        }
        </select>
      </div>
      <button type="button">Add book</button>
    </form>
  );
};

export default BooksForm;
