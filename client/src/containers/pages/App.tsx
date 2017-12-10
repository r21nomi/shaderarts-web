import 'normalize.css';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';
import '../../styles/app.css';
import * as React from 'react';
import TopPage from './TopPage';
import ExplorePage from './ExplorePage';
import CreatePage from './CreatePage';
import Footer from '../organisms/Footer';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

const App = () => (
    <Router>
        <div>
            <Route exact path="/" component={TopPage}></Route>
            <Route path="/explore" component={ExplorePage} />
            <Route path="/create" component={CreatePage} />
            <Footer />
        </div>
    </Router>
);

export default App;