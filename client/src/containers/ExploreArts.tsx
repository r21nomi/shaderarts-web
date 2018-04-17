import { connect } from 'react-redux';
import { fetchExploreArts } from '../actions/actionCreator/fetchExploreArts';
import ArtList from './organisms/ArtList';
import { RootState } from '../reducers/index';

const mapStateToProps = (state: RootState) => ({
    arts: state.arts
});

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
    onFetch: () => {
        dispatch(fetchExploreArts(0));
    }
});

const Arts = connect(
    mapStateToProps,
    mapDispatchToProps
)(ArtList);

export default Arts;