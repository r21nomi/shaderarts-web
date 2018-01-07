import * as React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../reducers/index';
import { CodeState } from '../../reducers/code';
import UpdateCode from '../UpdateCode';
import UpdateGLSLCanvas from '../UpdateGLSLCanvas';
import CreateHeader from '../organisms/CreateHeader';
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
    code: CodeState;
    handleHeaderSaveAsDraftButtonClick: (code: CodeState) => void;
    handleHeaderSubmitButtonClick: (code: CodeState) => void;
}

const mapStateToProps = (state: RootState) => ({
    code: state.code
});

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
    handleHeaderSaveAsDraftButtonClick: (code: CodeState) => {
        console.log("handleHeaderSaveAsDraftButtonClick");
        console.log(code);
    },
    handleHeaderSubmitButtonClick: (code: CodeState) => {
        console.log("handleHeaderSubmitButtonClick");
        console.log(code);
    }
});

class CreatePage extends React.Component<Props, object> {
    render() {
        const { code, handleHeaderSaveAsDraftButtonClick, handleHeaderSubmitButtonClick } = this.props

        return <div>
            <CreateHeader 
                onSaveAsDraftButtonClick={() => handleHeaderSaveAsDraftButtonClick(code)}
                onSubmitButtonClick={() => handleHeaderSubmitButtonClick(code)}
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