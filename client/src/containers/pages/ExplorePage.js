import React from 'react'
import Header from '../organisms/Header'
import AddTodo from '../AddTodo'
import Filter from '../organisms/Filter'
import VisibleTodoList from '../VisibleTodoList'
import styles from '../../styles/explore_page.css'

const ExplorePage = () => (
    <div>
        <Header />
        <div className={styles.content}>
            <AddTodo />
            <Filter />
            <VisibleTodoList />
        </div>
    </div>
)

export default ExplorePage