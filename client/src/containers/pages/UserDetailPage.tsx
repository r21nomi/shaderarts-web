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
import UserArts from "../UserArts";

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
    componentWillMount() {
        let userID = this.props.match.params.id;
        this.props.onFetch(userID);
    }
    render() {
        const {
            onArtCountClicked,
            onStarCountClicked,
            onFollowClicked,
            onFollowerClicked,
            userDetailState
        } = this.props;

        let userID = this.props.match.params.id;

        return <div>
                    <Header />
                    <div className="Page-content UserDetailPage-content">
                        <div className="UserDetailPage-profile">
                            <Profile userEntity={userDetailState.user} />
                        </div>
                        <div className="UserDetailPage-myPageStat">
                            <MyPageStat
                                onArtCountClicked={onArtCountClicked}
                                onStarCountClicked={onStarCountClicked}
                                onFollowClicked={onFollowClicked}
                                onFollowerClicked={onFollowerClicked}
                            />
                        </div>
                        {(() => {
                            //  FIXME: stop checking user id here.
                            // This is work around that sometimes different arts are shown for a while af first.
                            if (!userDetailState.isFetching && userID == userDetailState.user.id) {
                                return <UserArts userId={userDetailState.user.id}/>;
                            } else {
                                return null;
                            }
                        })()}
                    </div>
                </div>
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserDetailPage);