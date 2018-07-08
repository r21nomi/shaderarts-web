import * as React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../reducers/index';
import { MyProfileState } from '../../reducers/myProfile';
import Header from '../organisms/Header';
import MyArts from '../MyArts';
import Profile from '../../components/atoms/Profile';
import MyPageStat from '../../components/atoms/MyPageStat';
import './styles/page.css';
import './styles/my_page.css';

interface Props {
    myProfileState: MyProfileState;
    onArtCountClicked: () => void;
    onStarCountClicked: () => void;
    onFollowClicked: () => void;
    onFollowerClicked: () => void;
}

const mapStateToProps = (state: RootState) => ({
    myProfileState: state.myProfile
});

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
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

class MyPage extends React.Component<Props, object> {
    render() {
        const {
            onArtCountClicked,
            onStarCountClicked,
            onFollowClicked,
            onFollowerClicked
        } = this.props;

        return <div>
                    <Header />
                    <div className="Page-content MyPage-content">
                        <div className="MyPage-profile">
                            <Profile userEntity={this.props.myProfileState.user} />
                        </div>
                        <div className="MyPage-myPageStat">
                            <MyPageStat
                                onArtCountClicked={onArtCountClicked}
                                onStarCountClicked={onStarCountClicked}
                                onFollowClicked={onFollowClicked}
                                onFollowerClicked={onFollowerClicked}
                            />
                        </div>
                        <MyArts />
                    </div>
                </div>
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MyPage);