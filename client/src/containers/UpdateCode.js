import { connect } from 'react-redux'
import { updateCode } from '../actions'
import ShaderEditor from '../components/molecules/ShaderEditor'

const mapStateToProps = (state) => ({
    code: state.code
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onCodeUpdated: (newCode) => {
        dispatch(updateCode(newCode))
    }
})

const UpdateCode = connect(
    mapStateToProps,
    mapDispatchToProps
)(ShaderEditor)

export default UpdateCode