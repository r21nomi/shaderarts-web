import * as React from 'react';
import { Link } from 'react-router-dom';
import './styles/header.css';
import './styles/create_header.css';

interface Props {
    onSaveAsDraftButtonClick: () => void;
    onSubmitButtonClick: () => void;
}

class CreateHeader extends React.Component<Props, object> {
    render() {
        const { onSaveAsDraftButtonClick, onSubmitButtonClick } = this.props;

        return <header className="Header CreateHeader">
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
                            onClick={() => onSubmitButtonClick()}
                        >
                            Submit
                        </a>
                    </li>
                </ul>
            </div>
        </header>;
    }
}

export default CreateHeader;