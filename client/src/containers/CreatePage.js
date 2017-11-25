import React from 'react'
import CreateHeader from '../components/CreateHeader'
import styles from '../styles/create_page.css'

const CreatePage = () => (
    <div>
        <CreateHeader />
        <div className={styles.content}>
            Create page
        </div>
    </div>
)

export default CreatePage