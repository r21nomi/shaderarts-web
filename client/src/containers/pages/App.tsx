import 'normalize.css';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';
import './styles/app.css';
import * as React from 'react';
import { connect } from 'react-redux';
import TopPage from './TopPage';
import LoginPage from './LoginPage';
import ExplorePage from './ExplorePage';
import CreatePage from './CreatePage';
import ArtDetailPage from './ArtDetailPage'
import Footer from '../organisms/Footer';
import { RootState } from '../../reducers/index';
import { ConnectedRouter } from 'react-router-redux';
import history from '../../history';
import { Route, Switch } from 'react-router';
import { updateWindowSize } from '../../actions/actionCreator/updateWindowSize';

interface Props {
    onResize: (e: UIEvent) => void
}

const mapStateToProps = (state: RootState) => ({
    // no-op
});

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
    onResize: (e: UIEvent) => {
        dispatch(updateWindowSize(window.innerWidth, window.innerHeight));
    }
});

class App extends React.Component<Props, object> {
    componentDidMount() {
        const { onResize } = this.props
        window.addEventListener("resize", onResize);
    }
    render() {
        return <ConnectedRouter history={history}>
                    <Switch>
                        <Route exact path="/" component={TopPage} />
                        <Route path="/login" component={LoginPage} />
                        <Route path="/explore" component={ExplorePage} />
                        <Route path="/create" component={CreatePage} />
                        <Route path="/art/:id" component={ArtDetailPage} />
                        <Footer />
                    </Switch>
                </ConnectedRouter>
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);