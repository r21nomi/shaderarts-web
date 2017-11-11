import React from 'react'
import FilterLink from '../containers/FilterLink'

const Footer = () => (
    <footer>
        <p>
            Show:
            {" "}
            <FilterLink filter="SHOW_ALL">
                ALL
            </FilterLink>
        </p>
    </footer>
)

export default Footer