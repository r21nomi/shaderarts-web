import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/header.css'

const Header = () => (
    <header className={styles.header}>
        <div className={styles.title}>Arto</div>
        <ul>
            <li><Link to="/">Browse</Link></li>
            <li><Link to="/create">Create</Link></li>
        </ul>
    </header>
)

export default Header