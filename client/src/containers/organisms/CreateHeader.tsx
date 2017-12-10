import * as React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/header.css';

const CreateHeader = () => (
    <header className="Header">
        <div className="Header-title"><Link to="/">Arto</Link></div>
        <ul>
            <li>Save as draft</li>
            <li>Submit</li>
        </ul>
    </header>
);

export default CreateHeader;