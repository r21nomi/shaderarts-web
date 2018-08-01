import * as React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Header from '../organisms/Header';
import { RootState } from '../../reducers/index';
import { MyProfileState } from '../../reducers/myProfile';
import { ArtDetailState } from '../../reducers/artDetail';
import { ArtType, CodeEntity } from '../../models/index';
import UpdateGLSLCanvas from '../UpdateGLSLCanvas';
import { fetchArtDetail } from '../../actions/actionCreator/fetchArtDetail';
import ShaderEditor from '../../components/molecules/ShaderEditor';
import './styles/page.css';
import './styles/art_detail_page.css';
import { toArtDataFromEntity } from '../../models/artDataProvider';
import { WindowSizeState } from '../../reducers/windowSize';
import { CodeData } from '../../models/data';
import { toggleStar } from '../../actions/actionCreator/toggleStar';
import { pushArt } from '../../actions/actionCreator/pushArt';
import DetailArtInfo from '../../components/atoms/DetailArtInfo';
import Spinner from '../../components/atoms/Spinner';

interface Props {
    match: {
        params: {
            id: string
        }
    };
    myProfileState: MyProfileState;
    artDetailState: ArtDetailState;
    onFetch: (artID: string) => void;
    onToggleStar: (artId: String, isStarCurrent: boolean) => void;
    onPushArt: (artId: string) => void;
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
    },
    onToggleStar: (artId: string, isStarCurrent: boolean) => {
        dispatch(toggleStar(artId, isStarCurrent));
    },
    onPushArt: (artId: string) => {
        dispatch(pushArt(artId));
    }
});

class ArtDetailPage extends React.Component<Props, object> {
    artAndCodeArea: any;
    codeButtonLabel: string;
    showCode: boolean = false;
    defaultCanvasHeight: number = 500;
    canvasWidth: number = 0;
    canvasHeight: number = this.defaultCanvasHeight;
    codes: CodeEntity[] = [];

    updateCode(codeData: CodeData[]) {
        this.codes[1].text = codeData[1].text;

        let hasError = function (): boolean {
            return codeData[0].errorLine > 0 || codeData[1].errorLine > 0;
        };

        if (!hasError()) {
            this.forceUpdate();
        }
    }

    toggleCodeButton() {
        this.showCode = !this.showCode;
        this.forceUpdate();
    }

    componentWillMount() {
        let artID = this.props.match.params.id;
        this.props.onFetch(artID);
    }

    render() {
        const { artDetailState, onToggleStar, onPushArt, windowSizeState } = this.props;

        this.canvasWidth = this.getCanvasWidth();

        if (artDetailState.isFetching) {
            return <Spinner />

        } else {
            const art = artDetailState.art;

            this.codes = art.codes;

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
                                vertexShader={this.codes[0].text}
                                fragmentShader={this.codes[1].text}
                                shouldRender={true}
                                hasError={false}
                            />
                            {(() => {
                                if (this.showCode) {
                                    return <ShaderEditor
                                        artData={artDataState}
                                        onCodeUpdated={codeData => this.updateCode(codeData)}
                                        windowSizeState={windowSizeState}/>;
                                } else {
                                    return null;
                                }
                            })()}
                            <Button
                                className="ArtDetailPage-codeButton"
                                onClick={() => this.toggleCodeButton()}
                            >
                                {this.codeButtonLabel}
                            </Button>
                        </div>
                        <div className="ArtDetailPage-titleArea">
                            <h1>{art.title}</h1>
                            <p>{art.description}</p>
                        </div>
                        <DetailArtInfo
                            art={art}
                            isMyPage={false}
                            onToggleStar={onToggleStar}
                            onPushArt={onPushArt}
                        />
                    </div>
                </React.Fragment>
            );
        }
    }

    private getCanvasWidth(): number {
        return  Math.min(1024, this.props.windowSizeState.width);
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ArtDetailPage);