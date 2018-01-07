import * as React from 'react';
import Header from '../organisms/Header';
import Arts from '../Arts';
import './styles/page.css';
import './styles/top_page.css';

const TopPage = () => (
    <div>
        <Header />
        <div className="Page-content TopPage-content">
            <Arts />
        </div>
    </div>
);

export default TopPage;