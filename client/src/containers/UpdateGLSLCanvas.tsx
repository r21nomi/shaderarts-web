import { connect, Dispatch } from 'react-redux';
import GLSLCanvas from '../components/molecules/GLSLCanvas';
import { RootState } from '../reducers/index';

interface Props {
    vertexShader: string;
    fragmentShader: string;
}

const mapStateToProps = (state: RootState, ownProps: Props) => ({
    vertexShader: ownProps.vertexShader,
    fragmentShader: ownProps.fragmentShader
});

const mapDispatchToProps = (dispatch: Dispatch<any>, ownProps: Props) => ({
    // no-op
});

const UpdateGLSLCanvas = connect(
    mapStateToProps,
    mapDispatchToProps,
    null,
    { withRef: true }
)(GLSLCanvas);

export default UpdateGLSLCanvas;