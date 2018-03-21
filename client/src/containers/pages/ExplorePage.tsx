import * as React from 'react';
import Header from '../organisms/Header';
import Arts from '../Arts';
import './styles/page.css';
import './styles/explore_page.css';

const ExplorePage = () => (
    <div>
        <Header />
        <div className="Page-content ExplorePage-content">
            <Arts />
        </div>
    </div>
);

export default ExplorePage;