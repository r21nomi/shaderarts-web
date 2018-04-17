import * as React from 'react';
import Header from '../organisms/Header';
import ExploreArts from '../ExploreArts';
import './styles/page.css';
import './styles/explore_page.css';

const ExplorePage = () => (
    <div>
        <Header />
        <div className="Page-content ExplorePage-content">
            <ExploreArts />
        </div>
    </div>
);

export default ExplorePage;