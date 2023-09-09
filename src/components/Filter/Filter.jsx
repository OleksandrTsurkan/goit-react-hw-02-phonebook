import React from 'react';
import PropTypes from 'prop-types';

export const Filter = ({ filter, onChangeFilter }) => {
  return (
    <div>
      <label>
        Find contacts by name
        <input
          name="filter"
          type="text"
          value={filter}
          onChange={onChangeFilter}
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func,
};

export default Filter;
