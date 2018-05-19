import * as React from 'react';
import { connect } from 'react-redux';
import Button from 'material-ui/Button';
import Header from '../organisms/Header';
import { RootState } from '../../reducers/index';
import { MyProfileState } from '../../reducers/myProfile';
import { ArtDetailState } from '../../reducers/artDetail';
import { ArtType } from '../../models/index';
import UpdateGLSLCanvas from '../UpdateGLSLCanvas';
import ArtInfo from '../../components/atoms/ArtInfo';
import { fetchArtDetail } from '../../actions/actionCreator/fetchArtDetail';
import ShaderEditor from '../../components/molecules/ShaderEditor';
import './styles/page.css';
import './styles/art_detail_page.css';
import { toArtDataFromEntity } from '../../models/artDataProvider';
import { WindowSizeState } from '../../reducers/windowSize';

interface Props {
    match: {
        params: {
            id: string
        }
    };
    myProfileState: MyProfileState;
    artDetailState: ArtDetailState;
    onFetch: (artID: string) => void;
    onToggleStar: (artId: String) => void;
    windowSizeState: WindowSizeState;
}

const mapStateToProps = (state: RootState) => ({
    windowSizeState: state.windowSize,
    myProfileState: state.myProfile,
    artDetailState: state.artDetail
});

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
    onFetch: (artID: string) => {
        dispatch(fetchArtDetail(artID));
    }
});

class ArtDetailPage extends React.Component<Props, object> {
    artAndCodeArea: any;
    codeButtonLabel: string;
    showCode: boolean = false;
    defaultCanvasHeight: number = 500;
    canvasWidth: number = 1024;
    canvasHeight: number = this.defaultCanvasHeight;

    componentDidMount() {
        let artID = this.props.match.params.id;
        this.props.onFetch(artID);
    }
    render() {
        const { artDetailState, onToggleStar, windowSizeState } = this.props;

        if (artDetailState.isFetching) {
            return <div>Now fetching...</div>;

        } else {
            const art = artDetailState.art;

            if (art.type == ArtType.GLSL) {
                console.log('ArtType: GLSL');
            }

            let artDataState = {
                data: toArtDataFromEntity(art)
            };

            if (this.showCode && this.artAndCodeArea) {
                this.canvasHeight = this.artAndCodeArea.clientHeight;
                this.codeButtonLabel = 'Hide Code';
            } else {
                this.canvasHeight = this.defaultCanvasHeight;
                this.codeButtonLabel = 'Show Code';
            }
            let artAndCodeAreaStyle = {
                height: `${this.canvasHeight}px`
            };

            return (
                <React.Fragment>
                    <Header />
                    <div className="Page-content ArtDetailPage-content"
                         ref={(r) => this.artAndCodeArea = r}>

                        <div className="ArtDetailPage-artAndCode"
                             style={artAndCodeAreaStyle}>

                            <UpdateGLSLCanvas
                                width={this.canvasWidth}
                                height={this.canvasHeight}
                                onCanvasUpdated={(gl: any) => {
                                    // no-op
                                }}
                                vertexShader={art.codes[0].text}
                                fragmentShader={art.codes[1].text}
                                shouldRender={true}
                                hasError={false}
                            />
                            {(() => {
                                if (this.showCode) {
                                    return <ShaderEditor
                                        artData={artDataState}
                                        onCodeUpdated={c => {

                                        }}
                                        windowSizeState={windowSizeState}/>;
                                } else {
                                    return null;
                                }
                            })()}
                            <Button
                                className="ArtDetailPage-codeButton"
                                onClick={() => {
                                    this.showCode = !this.showCode;
                                    this.forceUpdate();
                                }}
                            >
                                {this.codeButtonLabel}
                            </Button>
                        </div>
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
                </React.Fragment>
            );
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ArtDetailPage);