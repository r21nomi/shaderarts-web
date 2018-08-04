import { connect } from 'react-redux';
import { fetchArts } from '../actions/actionCreator/fetchArts';
import { toggleStar } from '../actions/actionCreator/toggleStar';
import ArtList from './organisms/ArtList';
import { RootState } from '../reducers/index';
import {pushArt} from "../actions/actionCreator/pushArt";

const mapStateToProps = (state: RootState) => ({
    arts: state.arts,
    isMyPage: false
});

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
    onFetch: () => {
        dispatch(fetchArts(0));
    },
    onToggleStar: (artId: string, isStarCurrent: boolean) => {
        dispatch(toggleStar(artId, isStarCurrent));
    },
    onPushArt: (artId: string) => {
        dispatch(pushArt(artId));
    }
});

const Arts = connect(
    mapStateToProps,
    mapDispatchToProps
)(ArtList);

export default Arts;