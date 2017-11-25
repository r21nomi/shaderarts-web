import React from 'react'
import AddTodo from './AddTodo'
import Filter from './Filter'
import VisibleTodoList from './VisibleTodoList'

const BrowsePage = () => (
    <div>
        <AddTodo />
        <Filter />
        <VisibleTodoList />
    </div>
)

export default BrowsePage