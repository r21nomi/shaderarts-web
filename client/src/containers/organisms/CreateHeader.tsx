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
import {PostData} from "../../models/data";

interface Props {
    onSaveAsDraftButtonClick: () => void;
    onSubmitButtonClick: (postData: PostData) => void;

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
        let headerEL: any = this.refs.createHeader
        headerEL.classList.add('submit--over')
    }

    onSubmitMouseLeave() {
        let headerEL: any = this.refs.createHeader
        headerEL.classList.remove('submit--over')
    }

    onCancelButtonClick() {
        let headerEL: any = this.refs.createHeader
        headerEL.classList.remove('submit--over')
    }

    render() {
        const { paneModeState, onModeChanged, onSaveAsDraftButtonClick, onSubmitButtonClick } = this.props;

        return <header className="Header CreateHeader" ref="createHeader">
                    <div className="Header-content CreateHeader-content">
                        <div className="Header-logo CreateHeader-logo"><Link to="/">Arto</Link></div>
                        <ul className="Header-menu CreateHeader-menu">
                            <li className="Header-menuItem CreateHeader-menuItem">
                                <a
                                    href="javascript:void(0)"
                                    onClick={() => onSaveAsDraftButtonClick()}
                                >
                                    Save as draft
                                </a>
                            </li>
                            <li className="Header-menuItem CreateHeader-menuItem">
                                <a
                                    href="javascript:void(0)"
                                    onMouseOver={this.onSubmitMouseOver.bind(this)}
                                >
                                    Submit
                                </a>
                            </li>
                            <li>
                                <PaneMenuButton
                                    paneMode={paneModeState.mode}
                                    onModeChanged={onModeChanged} />
                            </li>
                        </ul>
                    </div>
                    <div
                        className="CreateHeader-submitMenu"
                        onMouseOver={this.onSubmitMouseOver.bind(this)}
                        onMouseLeave={this.onSubmitMouseLeave.bind(this)}
                    >
                        <PostSheet
                            onCancelButtonClick={() => this.onCancelButtonClick()}
                            onSubmitButtonClick={(postData: PostData) => onSubmitButtonClick(postData)} />
                    </div>
                </header>;
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateHeader);