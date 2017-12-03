import React from 'react';
import TopPage from './TopPage'
import ExplorePage from './ExplorePage'
import CreatePage from './CreatePage'
import Footer from '../organisms/Footer'
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'
import '../../styles/global_styles.css'
import styles from '../../styles/app.css'

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