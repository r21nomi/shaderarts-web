import React from 'react';
import TopPage from './TopPage'
import ExplorePage from './ExplorePage'
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
            <Route exact path="/" component={TopPage}></Route>
            <Route path="/explore" component={ExplorePage} />
            <Route path="/create" component={CreatePage} />
            <Footer />
        </div>
    </Router>
)

export default App