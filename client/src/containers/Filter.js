import React from 'react'
import FilterLink from './FilterLink'
import styles from '../styles/filter.css'

const Filter = () => (
    <div className={styles.filter}>
        Show:
        {" "}
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
)

export default Filter