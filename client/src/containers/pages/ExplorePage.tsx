import * as React from 'react';
import Header from '../organisms/Header';
import PopularArts from '../PopularArts';
import './styles/page.css';
import './styles/explore_page.css';

const ExplorePage = () => (
    <div>
        <Header />
        <div className="Page-content ExplorePage-content">
            <PopularArts />
        </div>
    </div>
);

export default ExplorePage;