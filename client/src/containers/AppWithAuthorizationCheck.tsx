import * as React from 'react';
import { connect } from 'react-redux';
import App from '../containers/pages/App';
import { fetchUser } from '../actions/actionCreator/fetchUser';
import { RootState } from '../reducers/index';
import { UserState } from '../reducers/user';
import * as firebase from 'firebase';
import { firebaseConfig } from '../firebaseConfig';

interface Props {
    userState: UserState;
    onFetchUser: () => void;
}

const mapStateToProps = (state: RootState) => ({
    userState: state.user
});

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
    onFetchUser: () => {
        dispatch(fetchUser());
    }
});

class AppWithAuthorizationCheck extends React.Component<Props, object> {
    constructor(props: Props) {
        super(props);

        firebase.initializeApp(firebaseConfig);
        this.props.onFetchUser();
    }

    render() {
        const { userState } = this.props;

        if (userState.isFetching) {
            return <div />;
        } else {
            if (userState.isAuthorized) {
                console.log("authorized");
                return <App />;
            } else {
                console.log("not authorized");
                return <App />;
            }
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppWithAuthorizationCheck);