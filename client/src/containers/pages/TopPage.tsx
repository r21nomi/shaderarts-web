import * as React from 'react';
import Header from '../organisms/Header';
import Arts from '../Arts';
import '../../styles/top_page.css';

const TopPage = () => (
    <div>
        <Header />
        <div className="TopPage-content">Top Page</div>
        <Arts />
    </div>
);

export default TopPage;