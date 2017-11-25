import React from 'react'
import Header from '../components/Header'
import styles from '../styles/top_page.css'

const TopPage = () => (
    <div>
        <Header />
        <div className={styles.content}>Top Page</div>
    </div>
)

export default TopPage