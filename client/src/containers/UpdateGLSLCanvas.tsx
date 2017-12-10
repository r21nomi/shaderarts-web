import { connect } from 'react-redux';
import GLSLCanvas from '../components/molecules/GLSLCanvas';
import { RootState } from '../reducers/index';

const mapStateToProps = (state: RootState) => ({
    code: state.code
});

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
    // no-op
});

const UpdateGLSLCanvas = connect(
    mapStateToProps,
    mapDispatchToProps
)(GLSLCanvas);

export default UpdateGLSLCanvas;