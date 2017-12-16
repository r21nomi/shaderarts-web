import { connect } from 'react-redux';
import { fetchArts } from '../actions';
import ArtList from '../components/molecules/ArtList';
import { RootState } from '../reducers/index';

const mapStateToProps = (state: RootState) => ({
    arts: state.arts
});

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
    onFetch: () => {
        dispatch(fetchArts());
    },
    onArtClick: (id: string) => {
        console.log('id:' + id);
        // dispatch(fetchArtis());
    }
});

const Arts = connect(
    mapStateToProps,
    mapDispatchToProps
)(ArtList);

export default Arts;