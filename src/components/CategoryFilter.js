import React from 'react';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const CategoryFilter = () => (
  <div>
    <p>FILTER BOOKS</p>
    <select id="categories" value="All">
      <option value="All" disabled>All</option>
      {
        categories
          .map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))
      }
    </select>
    <br />
  </div>
);

export default CategoryFilter;
