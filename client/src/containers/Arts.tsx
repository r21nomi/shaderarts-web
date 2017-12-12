import { connect } from 'react-redux';
import { fetchArtis } from '../actions';
import ArtList from '../components/molecules/ArtList';
import { RootState } from '../reducers/index';

const mapStateToProps = (state: RootState) => ({
    arts: state.arts
});

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
    onFetch: () => {
        dispatch(fetchArtis());
    },
    onArtClick: (id: string) => {
        // dispatch(fetchArtis());
    }
});

const Arts = connect(
    mapStateToProps,
    mapDispatchToProps
)(ArtList);

export default Arts;