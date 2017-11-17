import React from 'react';
import Header from './Header'
import Filter from './Filter'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import 'normalize.css'
import styles from '../styles/app.css'

const App = () => (
  <div>
    <Header />
    <div className={styles.content}>
      <AddTodo />
      <Filter />
      <VisibleTodoList />
    </div>
    <Footer />
  </div>
)

export default App;
