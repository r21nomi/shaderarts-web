import { connect } from 'react-redux';
import { updateCode } from '../actions';
import ShaderEditor from '../components/molecules/ShaderEditor';

const mapStateToProps = (state: any) => ({
    code: state.code
});

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
    onCodeUpdated: (newCode: string) => {
        dispatch(updateCode(newCode));
    }
});

const UpdateCode = connect(
    mapStateToProps,
    mapDispatchToProps
)(ShaderEditor);

export default UpdateCode;