import * as React from 'react';
import { connect } from 'react-redux';
import Header from '../organisms/Header';
import { RootState } from '../../reducers/index';
import { UserState } from '../../reducers/user';
import { ArtDetailState } from '../../reducers/artDetail';
import { UserEntity, ArtType } from '../../models/index';
import UpdateGLSLCanvas from '../UpdateGLSLCanvas';
import { fetchArtDetail } from '../../actions/fetchArtDetail';
import './styles/page.css';

const canvasProps = {
    width: 500,
    height: 500,
    onCanvasUpdated: (gl: any) => {
        // no-op
    }
};

interface Props {
    match: {
        params: {
            id: string
        }
    };
    userState: UserState;
    artDetailState: ArtDetailState;
    onFetch: (userEntity: UserEntity, artID: string) => void;
}

const mapStateToProps = (state: RootState) => ({
    userState: state.user,
    artDetailState: state.artDetail
});

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
    onFetch: (userEntity: UserEntity, artID: string) => {
        dispatch(fetchArtDetail(userEntity, artID));
    }
});

class ArtDetailPage extends React.Component<Props, object> {
    componentDidMount() {
        var artID = this.props.match.params.id
        this.props.onFetch(this.props.userState.user, artID);
    }
    render() {
        const { artDetailState } = this.props;

        if (artDetailState.isFetching) {
            return <div>Now fetching...</div>

        } else {
            const art = artDetailState.art

            if (art.type == ArtType.GLSL) {
                console.log('ArtType: GLSL')
            }

            return (
                <div>
                    <Header />
                    <div className="Page-content ArtDetailPage-content">
                        <UpdateGLSLCanvas
                            {...canvasProps}
                            vertexShader = {art.codes[0].text}
                            fragmentShader = {art.codes[1].text}
                        />
                    </div>
                </div>
            );
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ArtDetailPage);