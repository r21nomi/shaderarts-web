import * as React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/header.css';

const Header = () => (
    <header className="Header">
        <div className="Header-title"><Link to="/">Arto</Link></div>
        <ul>
            <li><Link to="/explore">Explore</Link></li>
            <li><Link to="/create">Create</Link></li>
        </ul>
    </header>
);

export default Header;