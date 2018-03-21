import { connect } from 'react-redux';
import { fetchArts } from '../actions/actionCreator/fetchArts';
import ArtList from './organisms/ArtList';
import { RootState } from '../reducers/index';

const mapStateToProps = (state: RootState) => ({
    arts: state.arts
});

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
    onFetch: () => {
        dispatch(fetchArts(0));
    },
    onArtClick: (id: string) => {
        console.log('id:' + id);
    }
});

const Arts = connect(
    mapStateToProps,
    mapDispatchToProps
)(ArtList);

export default Arts;