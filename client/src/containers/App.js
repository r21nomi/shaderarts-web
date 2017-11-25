import React from 'react';
import Header from '../components/Header'
import TopPage from './TopPage'
import BrowsePage from './BrowsePage'
import CreatePage from './CreatePage'
import Footer from '../components/Footer'
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'
import 'normalize.css'
import styles from '../styles/app.css'

const App = () => (
    <Router>
        <div>
            <Header />
            <div className={styles.content}>
                <Route exact path="/" component={TopPage}></Route>
                <Route path="/browse" component={BrowsePage} />
                <Route path="/create" component={CreatePage} />
            </div>
            <Footer />
        </div>
    </Router>
)

export default App