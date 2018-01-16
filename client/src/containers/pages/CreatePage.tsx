import * as React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../reducers/index';
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

const canvasProps = {
    width: 500,
    height: 500,
    onCanvasUpdated: (gl: any) => {
        // no-op
    }
};

interface Props {
    userState: UserState;
    codeState: CodeState;
    handleHeaderSaveAsDraftButtonClick: (code: CodeState) => void;
    handleHeaderSubmitButtonClick: (userState: UserState, code: CodeState, artThumb: string) => void;
}

const mapStateToProps = (state: RootState) => ({
    codeState: state.code,
    userState: state.user
});

const mapDispatchToProps = (dispatch: any, ownProps: Props) => ({
    handleHeaderSaveAsDraftButtonClick: (codeState: CodeState) => {
        console.log("handleHeaderSaveAsDraftButtonClick");
    },
    handleHeaderSubmitButtonClick: (userState: UserState, codeState: CodeState, artThumb: string) => {
        // TODO: Set title and description.
        console.log(artThumb);
        let artData = toArtData("art1", "description1", ArtType.GLSL, codeState);
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
        const { userState, codeState, handleHeaderSaveAsDraftButtonClick, handleHeaderSubmitButtonClick } = this.props

        return <div>
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
                <UpdateGLSLCanvas ref={(r) => this.updateGLSLCanvas = r} {...canvasProps} />
            </div>
        </div>;
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreatePage);