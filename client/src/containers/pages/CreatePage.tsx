import * as React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../reducers/index';
import { WindowSizeState } from '../../reducers/windowSize';
import { CodeState } from '../../reducers/code';
import { PaneModeState } from '../../reducers/paneMode';
import UpdateCode from '../UpdateCode';
import UpdateGLSLCanvas from '../UpdateGLSLCanvas';
import CreateHeader from '../organisms/CreateHeader';
import { postArt } from '../../actions/postArt';
import { toArtData } from '../../models/artDataProvider';
import { ArtType, PaneMode } from '../../models/index';
import './styles/page.css';
import './styles/create_page.css';
import {ArtData, ArtInfoData} from "../../models/data";

interface Props {
    windowSizeState: WindowSizeState;
    codeState: CodeState;
    paneModeState: PaneModeState;
    handleHeaderSaveAsDraftButtonClick: (code: CodeState) => void;
    handleHeaderSubmitButtonClick: (artData: ArtData) => void;
}

const mapStateToProps = (state: RootState) => ({
    windowSizeState: state.windowSize,
    codeState: state.code,
    paneModeState: state.paneMode
});

const mapDispatchToProps = (dispatch: any, ownProps: Props) => ({
    handleHeaderSaveAsDraftButtonClick: (codeState: CodeState) => {
        console.log("handleHeaderSaveAsDraftButtonClick");
    },
    handleHeaderSubmitButtonClick: (artData: ArtData) => {
        dispatch(postArt(artData));
    }
});

class CreatePage extends React.Component<Props, object> {
    updateGLSLCanvas: any;
    getArtThumb: () => any
    lastCanvasWidth: number;
    lastCanvasHeight: number;
    lastPaneMode: PaneMode;

    componentDidMount() {
        let glslCanvas = this.updateGLSLCanvas.getWrappedInstance();
        this.getArtThumb = glslCanvas.getThumb;
    }

    render() {
        const {
            windowSizeState,
            codeState,
            paneModeState,
            handleHeaderSaveAsDraftButtonClick,
            handleHeaderSubmitButtonClick
        } = this.props

        let rootClassName = '';
        let canvasSize = getSizeForCanvas(paneModeState, windowSizeState)

        if (true) {
            if (paneModeState.mode == PaneMode.OVERLAY) {
                rootClassName = 'paneMode-overlay';
            } else if (paneModeState.mode == PaneMode.SPLIT) {
                rootClassName = 'paneMode-split';
            }
        }

        let shouldRenderCanvas = this.lastCanvasWidth != canvasSize.width
            || this.lastCanvasHeight != canvasSize.height || this.lastPaneMode != paneModeState.mode;

        this.lastCanvasWidth = canvasSize.width;
        this.lastCanvasHeight = canvasSize.height;
        this.lastPaneMode = paneModeState.mode;

        return <div className={rootClassName}>
            <CreateHeader 
                onSaveAsDraftButtonClick={() => {
                    handleHeaderSaveAsDraftButtonClick(codeState);
                }}
                onSubmitButtonClick={(artInfoData: ArtInfoData) => {
                    let artThumb: string = this.getArtThumb().replace(/^.*,/, '');
                    let artData = toArtData(
                        artInfoData.title,
                        artInfoData.description,
                        ArtType.GLSL,
                        artThumb,
                        codeState,
                        artInfoData.tags
                    );
                    handleHeaderSubmitButtonClick(artData);
                }}
            />
            <div className="Page-content CreatePage-content">
                <UpdateCode />
                <UpdateGLSLCanvas
                    ref={(r) => this.updateGLSLCanvas = r}
                    width = {canvasSize.width}
                    height = {canvasSize.height}
                    onCanvasUpdated = {(gl: any) => {
                        // no-op
                    }}
                    vertexShader = {codeState.vertexShader}
                    fragmentShader = {codeState.fragmentShader}
                    shouldRender = {shouldRenderCanvas}
                />
            </div>
        </div>;
    }
}

function getSizeForCanvas(paneModeState: PaneModeState, windowSizeState: WindowSizeState) {
    let size = {
        width: 0,
        height: 0
    };

    if (paneModeState.mode == PaneMode.OVERLAY) {
        size.width = windowSizeState.width;
        size.height = windowSizeState.height;

    } else if (paneModeState.mode == PaneMode.SPLIT) {
        size.width = size.height = windowSizeState.width;
    }

    return size;
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreatePage);