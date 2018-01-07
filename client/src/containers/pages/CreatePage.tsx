import * as React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../reducers/index';
import { UserState } from '../../reducers/user';
import { CodeState } from '../../reducers/code';
import UpdateCode from '../UpdateCode';
import UpdateGLSLCanvas from '../UpdateGLSLCanvas';
import CreateHeader from '../organisms/CreateHeader';
import { postArt } from '../../actions/postArt';
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
    handleHeaderSubmitButtonClick: (userState: UserState, code: CodeState) => void;
}

const mapStateToProps = (state: RootState) => ({
    codeState: state.code,
    userState: state.user
});

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
    handleHeaderSaveAsDraftButtonClick: (codeState: CodeState) => {
        console.log("handleHeaderSaveAsDraftButtonClick");
        console.log(codeState);
    },
    handleHeaderSubmitButtonClick: (userState: UserState, codeState: CodeState) => {
        console.log("handleHeaderSubmitButtonClick");
        console.log(userState);
        dispatch(postArt(userState.user, codeState));
    }
});

class CreatePage extends React.Component<Props, object> {
    render() {
        const { userState, codeState, handleHeaderSaveAsDraftButtonClick, handleHeaderSubmitButtonClick } = this.props

        return <div>
            <CreateHeader 
                onSaveAsDraftButtonClick={() => handleHeaderSaveAsDraftButtonClick(codeState)}
                onSubmitButtonClick={() => handleHeaderSubmitButtonClick(userState, codeState)}
            />
            <div className="Page-content CreatePage-content">
                <UpdateCode />
                <UpdateGLSLCanvas {...canvasProps} />
            </div>
        </div>;
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreatePage);