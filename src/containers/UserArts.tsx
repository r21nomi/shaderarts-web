import { connect } from 'react-redux';
import { toggleStar } from '../actions/actionCreator/toggleStar';
import ArtList from './organisms/ArtList';
import { RootState } from '../reducers';
import { fetchUserArts } from '../actions/actionCreator/fetchUserArts';
import {pushArt} from "../actions/actionCreator/pushArt";

interface Props {
    userId: String
}

const mapStateToProps = (state: RootState) => ({
    arts: state.arts,
    isMyPage: true
});

const mapDispatchToProps = (dispatch: any, ownProps: Props) => ({
    onFetch: () => {
        dispatch(fetchUserArts(ownProps.userId, 0));
    },
    onToggleStar: (artId: string, isStarCurrent: boolean) => {
        dispatch(toggleStar(artId, isStarCurrent));
    },
    onPushArt: (artId: string) => {
        dispatch(pushArt(artId));
    }
});

const UserArts = connect(
    mapStateToProps,
    mapDispatchToProps
)(ArtList);

export default UserArts;