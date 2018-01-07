import 'normalize.css';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';
import './styles/app.css';
import * as React from 'react';
import TopPage from './TopPage';
import LoginPage from './LoginPage';
import ExplorePage from './ExplorePage';
import CreatePage from './CreatePage';
import Footer from '../organisms/Footer';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

interface Props {}

class App extends React.Component<Props, object> {
    render() {
        return <Router>
                    <div>
                        <Route exact path="/" component={TopPage} />
                        <Route path="/login" component={LoginPage} />
                        <Route path="/explore" component={ExplorePage} />
                        <Route path="/create" component={CreatePage} />
                        <Footer />
                    </div>
                </Router>
    }
}

export default App;