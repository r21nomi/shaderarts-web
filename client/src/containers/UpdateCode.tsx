import { connect } from 'react-redux';
import { updateCode } from '../actions';
import ShaderEditor from '../components/molecules/ShaderEditor';
import { RootState } from '../reducers/index';

const mapStateToProps = (state: RootState) => ({
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