import React from 'react'
import PropTypes from 'prop-types'
import styles from '../../styles/link.css'

const Link = ({ active, onClick, children }) => {
    if (active) {
        return <span className={styles.link_selected}>{children}</span>
    }

    return (
        <a className={styles.link}
            href="#"
            onClick={e => {
                e.preventDefault()
                onClick()
            }}
        >
        {children}
        </a>
    )
}

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Link