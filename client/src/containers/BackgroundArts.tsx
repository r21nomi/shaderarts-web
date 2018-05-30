import { connect } from 'react-redux';
import { fetchExploreArts } from '../actions/actionCreator/fetchExploreArts';
import { RootState } from '../reducers';
import CarouselArts from './organisms/CarouselArts';

const mapStateToProps = (state: RootState) => ({
    arts: state.arts,
    windowSizeState: state.windowSize
});

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
    onFetch: () => {
        dispatch(fetchExploreArts(0));
    }
});

const BackgroundArts = connect(
    mapStateToProps,
    mapDispatchToProps
)(CarouselArts);

export default BackgroundArts;