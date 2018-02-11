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
import { ArtInfoData } from '../../models/data';
import Button from 'material-ui/Button';
import KeyboardArrowDown from 'material-ui-icons/KeyboardArrowDown';

interface Props {
    onSaveAsDraftButtonClick: () => void;
    onSubmitButtonClick: (postData: ArtInfoData) => void;

    // For PaneMenuButton
    paneModeState: PaneModeState;
    onModeChanged: (mode: PaneMode) => void;
}

const mapStateToProps = (state: RootState) => ({
    paneModeState: state.paneMode
});

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
    onModeChanged: (mode: PaneMode) => {
        dispatch(UpdatePaneMode(mode));
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
        const { paneModeState, onModeChanged, onSaveAsDraftButtonClick, onSubmitButtonClick } = this.props;

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
                            onMouseOver={this.onSubmitMouseOver.bind(this)}
                        >
                            Submit
                            <KeyboardArrowDown />
                        </Button>
                    </div>
                    <div
                        className="CreateHeader-submitMenu"
                        onMouseOver={this.onSubmitMouseOver.bind(this)}
                        onMouseLeave={this.onSubmitMouseLeave.bind(this)}
                    >
                        <PostSheet
                            onDaveAsDraftButtonClick={() => onSaveAsDraftButtonClick()}
                            onSubmitButtonClick={(postData: ArtInfoData) => onSubmitButtonClick(postData)} />
                    </div>
                </header>;
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateHeader);