import { connect } from 'react-redux';
import { fetchExploreArts } from '../actions/actionCreator/fetchExploreArts';
import ArtList from './organisms/ArtList';
import { RootState } from '../reducers/index';
import { toggleStar } from '../actions/actionCreator/toggleStar';

const mapStateToProps = (state: RootState) => ({
    arts: state.arts
});

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
    onFetch: () => {
        dispatch(fetchExploreArts(0));
    },
    onToggleStar: (artId: string, isStarCurrent: boolean) => {
        dispatch(toggleStar(artId, isStarCurrent));
    }
});

const Arts = connect(
    mapStateToProps,
    mapDispatchToProps
)(ArtList);

export default Arts;