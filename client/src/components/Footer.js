import React from 'react'
import FilterLink from '../containers/FilterLink'
import styles from '../styles/footer.css'

const Footer = () => (
    <footer className={styles.footer}>
        <p>
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
        </p>
    </footer>
)

export default Footer