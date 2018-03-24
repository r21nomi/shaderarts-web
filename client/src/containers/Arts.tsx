import { connect } from 'react-redux';
import { fetchArts } from '../actions/actionCreator/fetchArts';
import { postStar } from '../actions/actionCreator/postStar';
import ArtList from './organisms/ArtList';
import { RootState } from '../reducers/index';

const mapStateToProps = (state: RootState) => ({
    arts: state.arts
});

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
    onFetch: () => {
        dispatch(fetchArts(0));
    },
    onStar: (artId: string) => {
        dispatch(postStar(artId));
    }
});

const Arts = connect(
    mapStateToProps,
    mapDispatchToProps
)(ArtList);

export default Arts;