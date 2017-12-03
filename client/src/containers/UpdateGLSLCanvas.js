import { connect } from 'react-redux'
import GLSLCanvas from './organisms/GLSLCanvas'

const mapStateToProps = (state) => ({
    code: state.code
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    // no-op
})

const UpdateGLSLCanvas = connect(
    mapStateToProps,
    mapDispatchToProps
)(GLSLCanvas)

export default UpdateGLSLCanvas