import { connect } from 'react-redux';
import { fetchArts } from '../actions/fetchArts';
import ArtList from './organisms/ArtList';
import { RootState } from '../reducers/index';
import { UserEntity } from '../models/index';

const mapStateToProps = (state: RootState) => ({
    arts: state.arts,
    userState: state.user
});

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
    onFetch: (userEntity: UserEntity) => {
        dispatch(fetchArts(userEntity, 0));
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