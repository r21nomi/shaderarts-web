import { connect } from 'react-redux';
import { updateArtDataCode } from '../actions/updateArtData';
import ShaderEditor from '../components/molecules/ShaderEditor';
import { RootState } from '../reducers/index';
import { CodeData } from '../models/data';

const mapStateToProps = (state: RootState) => ({
    windowSizeState: state.windowSize,
    artData: state.artData
});

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
    onCodeUpdated: (codeData: CodeData[]) => {
        dispatch(updateArtDataCode(codeData));
    }
});

const UpdateCode = connect(
    mapStateToProps,
    mapDispatchToProps
)(ShaderEditor);

export default UpdateCode;