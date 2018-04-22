import { connect, Dispatch } from 'react-redux';
import GLSLCanvas from '../components/molecules/GLSLCanvas';
import { RootState } from '../reducers/index';
import { CodeType } from '../models';
import { updateArtDataCodeErrorLine } from '../actions/actionCreator/updateCodeErrorLine';

interface Props {
    vertexShader: string;
    fragmentShader: string;
}

const mapStateToProps = (state: RootState, ownProps: Props) => ({
    vertexShader: ownProps.vertexShader,
    fragmentShader: ownProps.fragmentShader
});

const mapDispatchToProps = (dispatch: Dispatch<any>, ownProps: Props) => ({
    onErrorLineUpdated: (errorLine: number, codeType: CodeType) => {
        dispatch(updateArtDataCodeErrorLine(errorLine, codeType));
    }
});

const UpdateGLSLCanvas = connect(
    mapStateToProps,
    mapDispatchToProps,
    null,
    { withRef: true }
)(GLSLCanvas);

export default UpdateGLSLCanvas;