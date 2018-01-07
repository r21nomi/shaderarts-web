import * as React from 'react';
import { Link } from 'react-router-dom';
import './styles/create_header.css';

const CreateHeader = () => (
    <header className="CreateHeader">
        <div className="CreateHeader-title"><Link to="/">Arto</Link></div>
        <ul className="CreateHeader-menu">
            <li className="CreateHeader-menuItem">Save as draft</li>
            <li className="CreateHeader-menuItem">Submit</li>
        </ul>
    </header>
);

export default CreateHeader;