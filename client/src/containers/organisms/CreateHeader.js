import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../../styles/header.css'

const CreateHeader = () => (
    <header className={styles.header}>
        <div className={styles.title}><Link to="/">Arto</Link></div>
        <ul>
            <li>Save as draft</li>
            <li>Submit</li>
        </ul>
    </header>
)

export default CreateHeader