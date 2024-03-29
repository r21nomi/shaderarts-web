import * as React from 'react';
import { connect } from 'react-redux';
import App from '../containers/pages/App';
import { fetchUser } from '../actions/actionCreator/fetchUser';
import { RootState } from '../reducers/index';
import { MyProfileState } from '../reducers/myProfile';
import * as firebase from 'firebase';
import { firebaseConfig } from '../firebaseConfig';

interface Props {
    myProfileState: MyProfileState;
    onFetchUser: () => void;
}

const mapStateToProps = (state: RootState) => ({
    myProfileState: state.myProfile
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
        const { myProfileState } = this.props;

        if (myProfileState.isFetching) {
            return <div />;
        } else {
            if (myProfileState.isAuthorized) {
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