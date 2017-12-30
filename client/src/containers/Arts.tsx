import { connect } from 'react-redux';
import { fetchArts } from '../actions/fetchArts';
import ArtList from '../components/molecules/ArtList';
import { RootState } from '../reducers/index';
import { UserEntity } from '../models/index';

const mapStateToProps = (state: RootState) => ({
    arts: state.arts,
    userState: state.user
});

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
    onFetch: (userEntity: UserEntity) => {
        dispatch(fetchArts(userEntity));
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