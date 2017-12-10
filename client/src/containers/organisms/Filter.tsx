import * as React from 'react';
import FilterLink from '../FilterLink';
import '../../styles/filter.css';

const Filter = () => (
    <div className="Filter">
        Show:
        {' '}
        <FilterLink filter="SHOW_ALL">
            ALL
        </FilterLink>
        <FilterLink filter="SHOW_COMPLETED">
            Completed
        </FilterLink>
        <FilterLink filter="SHOW_ACTIVE">
            Active
        </FilterLink>
    </div>
);

export default Filter;