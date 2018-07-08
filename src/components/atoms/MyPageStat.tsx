import * as React from 'react';
import './styles/my_page_stat.css';

interface Props {
    onArtCountClicked: () => void;
    onStarCountClicked: () => void;
    onFollowClicked: () => void;
    onFollowerClicked: () => void;
}

const MyPageStat = ({ 
    onArtCountClicked,
    onStarCountClicked,
    onFollowClicked,
    onFollowerClicked
 }: Props) => (
    <ul className="MyPageStat">
        <li className="MyPageStat-item" onClick={onArtCountClicked}><a href="javascript:void(0)">Art 0</a></li>
        <li className="MyPageStat-item" onClick={onStarCountClicked}><a href="javascript:void(0)">Star 0</a></li>
        <li className="MyPageStat-item" onClick={onFollowClicked}><a href="javascript:void(0)">Follow 0</a></li>
        <li className="MyPageStat-item" onClick={onFollowerClicked}><a href="javascript:void(0)">Follower 0</a></li>
    </ul>
);

export default MyPageStat;