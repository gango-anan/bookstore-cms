import React from 'react';
import PropTypes from 'prop-types';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const CategoryFilter = ({ onChange }) => (
  <div>
    <p>FILTER BOOKS</p>
    <select id="categories" onChange={(event) => onChange(event.target.value)}>
      <option value="All">All</option>
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

CategoryFilter.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
