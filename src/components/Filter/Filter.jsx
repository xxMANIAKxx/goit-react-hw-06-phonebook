import React from 'react';
import style from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/filter-slice';
import { getFilter } from 'redux/filter/filter-selectors';

const Filter = () => {
  const onSetFilter = payload => {
    dispatch(setFilter(payload));
  };

  const updateFilter = event => {
    onSetFilter(event.target.value);
  };

  const dispatch = useDispatch();

  const filter = useSelector(getFilter);

  return (
    <div className={style.filter}>
      <label className={style.labelFilter} htmlFor="filter">
        Filter
        <input
          type="text"
          name="filter"
          onChange={updateFilter}
          value={filter}
          className={style.filterInput}
        />
      </label>
    </div>
  );
};

export default Filter;