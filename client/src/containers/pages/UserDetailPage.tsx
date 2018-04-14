import * as React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../reducers/index';
import { UserDetailState } from '../../reducers/userDetail';
import { fetchUserDetail } from '../../actions/actionCreator/fetchUserDetail';
import Header from '../organisms/Header';
import Profile from '../../components/atoms/Profile';
import MyPageStat from '../../components/atoms/MyPageStat';
import './styles/page.css';
import './styles/user_detail_page.css';

interface Props {
    match: {
        params: {
            id: string
        }
    };
    userDetailState: UserDetailState;
    onFetch: (userID: string) => void;
    onArtCountClicked: () => void;
    onStarCountClicked: () => void;
    onFollowClicked: () => void;
    onFollowerClicked: () => void;
}

const mapStateToProps = (state: RootState) => ({
    userDetailState: state.userDetail
});

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
    onFetch: (artID: string) => {
        dispatch(fetchUserDetail(artID));
    },
    onArtCountClicked: () => {
        console.log('onArtCountClicked');
    },
    onStarCountClicked: () => {
        console.log('onStarCountClicked');
    },
    onFollowClicked: () => {
        console.log('onFollowClicked');
    },
    onFollowerClicked: () => {
        console.log('onFollowerClicked');
    }
});

class UserDetailPage extends React.Component<Props, object> {
    componentDidMount() {
        var userID = this.props.match.params.id;
        this.props.onFetch(userID);
    }
    render() {
        const {
            onArtCountClicked,
            onStarCountClicked,
            onFollowClicked,
            onFollowerClicked
        } = this.props;

        return <div>
                    <Header />
                    <div className="Page-content UserDetailPage-content">
                        <div className="UserDetailPage-profile">
                            <Profile userEntity={this.props.userDetailState.user} />
                        </div>
                        <div className="UserDetailPage-myPageStat">
                            <MyPageStat
                                onArtCountClicked={onArtCountClicked}
                                onStarCountClicked={onStarCountClicked}
                                onFollowClicked={onFollowClicked}
                                onFollowerClicked={onFollowerClicked}
                            />
                        </div>
                    </div>
                </div>
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserDetailPage);