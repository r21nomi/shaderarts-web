import * as React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../reducers/index';
import { WindowSizeState } from '../../reducers/windowSize';
import { UserState } from '../../reducers/user';
import { CodeState } from '../../reducers/code';
import UpdateCode from '../UpdateCode';
import UpdateGLSLCanvas from '../UpdateGLSLCanvas';
import CreateHeader from '../organisms/CreateHeader';
import { postArt } from '../../actions/postArt';
import { toArtData } from '../../models/artDataProvider';
import { ArtType } from '../../models/index';
import './styles/page.css';
import './styles/create_page.css';

interface Props {
    windowSizeState: WindowSizeState;
    userState: UserState;
    codeState: CodeState;
    handleHeaderSaveAsDraftButtonClick: (code: CodeState) => void;
    handleHeaderSubmitButtonClick: (userState: UserState, code: CodeState, artThumb: string) => void;
}

const mapStateToProps = (state: RootState) => ({
    windowSizeState: state.windowSize,
    codeState: state.code,
    userState: state.user
});

const mapDispatchToProps = (dispatch: any, ownProps: Props) => ({
    handleHeaderSaveAsDraftButtonClick: (codeState: CodeState) => {
        console.log("handleHeaderSaveAsDraftButtonClick");
    },
    handleHeaderSubmitButtonClick: (userState: UserState, codeState: CodeState, artThumb: string) => {
        artThumb = artThumb.replace(/^.*,/, '');
        let artData = toArtData("art1", "description1", ArtType.GLSL, artThumb, codeState);
        dispatch(postArt(userState.user, artData));
    }
});

class CreatePage extends React.Component<Props, object> {
    updateGLSLCanvas: any;
    getArtThumb: () => any

    componentDidMount() {
        let glslCanvas = this.updateGLSLCanvas.getWrappedInstance();
        this.getArtThumb = glslCanvas.getThumb;
    }

    render() {
        const { windowSizeState, userState, codeState, handleHeaderSaveAsDraftButtonClick, handleHeaderSubmitButtonClick } = this.props

        let rootClassName = '';

        if (true) {
            // TODO: Check condition.
            rootClassName = 'overlayMode';
        }

        return <div className={rootClassName}>
            <CreateHeader 
                onSaveAsDraftButtonClick={() => {
                    handleHeaderSaveAsDraftButtonClick(codeState);
                }}
                onSubmitButtonClick={() => {
                    let artThumb: string = this.getArtThumb();
                    handleHeaderSubmitButtonClick(userState, codeState, artThumb);
                }}
            />
            <div className="Page-content CreatePage-content">
                <UpdateCode />
                <UpdateGLSLCanvas
                    ref={(r) => this.updateGLSLCanvas = r}
                    width = {windowSizeState.width}
                    height = {windowSizeState.height}
                    onCanvasUpdated = {(gl: any) => {
                        // no-op
                    }}
                    // {...canvasProps}
                    vertexShader = {codeState.vertexShader}
                    fragmentShader = {codeState.fragmentShader}
                />
            </div>
        </div>;
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreatePage);