import * as React from 'react';
import Header from '../organisms/Header';
import AddTodo from '../AddTodo';
import Filter from '../organisms/Filter';
import VisibleTodoList from '../VisibleTodoList';
import '../../styles/explore_page.css';

const ExplorePage = () => (
    <div>
        <Header />
        <div className="ExplorePage-content">
            <AddTodo />
            <Filter />
            <VisibleTodoList />
        </div>
    </div>
);

export default ExplorePage;