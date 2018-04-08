import * as React from 'react';
import { connect } from 'react-redux';
import Header from '../organisms/Header';
import { RootState } from '../../reducers/index';
import { UserState } from '../../reducers/user';
import { ArtDetailState } from '../../reducers/artDetail';
import { ArtType } from '../../models/index';
import UpdateGLSLCanvas from '../UpdateGLSLCanvas';
import ArtInfo from '../../components/atoms/ArtInfo';
import { fetchArtDetail } from '../../actions/actionCreator/fetchArtDetail';
import './styles/page.css';

const canvasProps = {
    width: 1024,
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
    onFetch: (artID: string) => void;
    onToggleStar: (artId: String) => void;
}

const mapStateToProps = (state: RootState) => ({
    userState: state.user,
    artDetailState: state.artDetail
});

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
    onFetch: (artID: string) => {
        dispatch(fetchArtDetail(artID));
    }
});

class ArtDetailPage extends React.Component<Props, object> {
    componentDidMount() {
        var artID = this.props.match.params.id;
        this.props.onFetch(artID);
    }
    render() {
        const { artDetailState, onToggleStar } = this.props;

        if (artDetailState.isFetching) {
            return <div>Now fetching...</div>;

        } else {
            const art = artDetailState.art;

            if (art.type == ArtType.GLSL) {
                console.log('ArtType: GLSL');
            }

            return (
                <div>
                    <Header />
                    <div className="Page-content ArtDetailPage-content">
                        <UpdateGLSLCanvas
                            {...canvasProps}
                            vertexShader = {art.codes[0].text}
                            fragmentShader = {art.codes[1].text}
                            shouldRender = {true}
                        />
                        <div>
                            <h1>{art.title}</h1>
                            <p>{art.description}</p>
                        </div>
                        <ArtInfo
                            art={art}
                            isMyPage={false}
                            onToggleStar={onToggleStar}
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