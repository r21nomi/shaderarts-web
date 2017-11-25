import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/header.css'

const Header = () => (
    <header className={styles.header}>
        <div className={styles.title}><Link to="/">Arto</Link></div>
        <ul>
            <li><Link to="/browse">Browse</Link></li>
            <li><Link to="/create">Create</Link></li>
        </ul>
    </header>
)

export default Header