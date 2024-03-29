import * as React from 'react';
import { withRouter } from 'react-router';

class ScrollToTop extends React.Component<any, object> {
    componentDidUpdate(prevProps: any) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            window.scrollTo(0, 0);
        }
    }
    render() {
        return this.props.children;
    }
}

export default withRouter(ScrollToTop);