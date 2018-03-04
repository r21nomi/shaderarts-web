import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../reducers/index';
import { PaneModeState } from '../../reducers/paneMode';
import { PaneMode } from '../../models/index';
import './styles/header.css';
import './styles/create_header.css';
import PaneMenuButton from '../../components/molecules/PaneMenuButton';
import PostSheet from './PostSheet';
import { UpdatePaneMode } from '../../actions/updatePaneMode';
import { TogglePostSheetMode } from '../../actions/togglePostSheetMode';
import { ArtInfoData } from '../../models/data';
import Button from 'material-ui/Button';
import { PostSheetModeState } from "../../reducers/postSheetMode";

interface Props {
    onSaveAsDraftButtonClick: () => void;
    onSubmitButtonClick: (postData: ArtInfoData) => void;

    // For PaneMenuButton
    paneModeState: PaneModeState;
    onModeChanged: (mode: PaneMode) => void;

    // For PublishButton
    postSheetModeState: PostSheetModeState;
    onPostSheetModeChanged: (isCurrentEnabled: boolean) => void;
}

const mapStateToProps = (state: RootState) => ({
    paneModeState: state.paneMode,
    postSheetModeState: state.postSheetMode
});

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
    onModeChanged: (mode: PaneMode) => {
        dispatch(UpdatePaneMode(mode));
    },
    onPostSheetModeChanged: (isCurrentEnabled: boolean) => {
        dispatch(TogglePostSheetMode(isCurrentEnabled))
    }
});

class CreateHeader extends React.Component<Props, object> {

    onSubmitMouseOver() {
        let headerEL: any = this.refs.createHeader;
        headerEL.classList.add('submit--over');
    }

    onSubmitMouseLeave() {
        let headerEL: any = this.refs.createHeader;
        headerEL.classList.remove('submit--over');
    }

    onCancelButtonClick() {
        let headerEL: any = this.refs.createHeader;
        headerEL.classList.remove('submit--over');
    }

    render() {
        const {
            paneModeState,
            postSheetModeState,
            onModeChanged,
            onPostSheetModeChanged,
            onSaveAsDraftButtonClick,
            onSubmitButtonClick
        } = this.props;

        return <header className="Header CreateHeader" ref="createHeader">
                    <div className="Header-content CreateHeader-content">
                        <div className="Header-logo CreateHeader-logo"><Link to="/">Arto</Link></div>
                        <ul className="Header-menu CreateHeader-menu">
                            <li>
                                <PaneMenuButton
                                    paneMode={paneModeState.mode}
                                    onModeChanged={onModeChanged} />
                            </li>
                        </ul>
                        <Button
                            className="CreateHeader-submitButton"
                            onClick={() => onPostSheetModeChanged(postSheetModeState.isEnabled)}
                        >
                            Publish
                        </Button>
                    </div>
                    {(() => {
                        if (postSheetModeState.isEnabled) {
                            return <div
                                        className="CreateHeader-submitMenu"
                                    >
                                        <PostSheet
                                            onDaveAsDraftButtonClick={() => onSaveAsDraftButtonClick()}
                                            onSubmitButtonClick={(postData: ArtInfoData) => onSubmitButtonClick(postData)} />
                                    </div>
                        } else {
                            return null
                        }
                    })()}
                </header>;
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateHeader);