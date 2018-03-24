import { connect } from 'react-redux';
import { fetchArts } from '../actions/actionCreator/fetchArts';
import ArtList from './organisms/ArtList';
import { RootState } from '../reducers/index';

const mapStateToProps = (state: RootState) => ({
    arts: state.arts
});

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
    onFetch: () => {
        dispatch(fetchArts(6));
    }
});

const Arts = connect(
    mapStateToProps,
    mapDispatchToProps
)(ArtList);

export default Arts;